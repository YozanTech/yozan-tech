"use client";
import FadeIn from "@/components/FadeIn";
import { useModalStore } from "@/store/useModalStore";
import { X, CheckCircle, AlertCircle, Ban } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const RATE_LIMIT_KEY = "yozan_consultation_submissions";
const DAILY_LIMIT = 3;

interface SubmissionRecord {
  date: string; // "YYYY-MM-DD"
  count: number;
}

/** Returns today's date string in local timezone as "YYYY-MM-DD" */
function getTodayString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

/** Reads current submission record from localStorage */
function getSubmissionRecord(): SubmissionRecord {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    if (!raw) return { date: getTodayString(), count: 0 };
    const record: SubmissionRecord = JSON.parse(raw);
    // Reset if it's a new day
    if (record.date !== getTodayString()) {
      return { date: getTodayString(), count: 0 };
    }
    return record;
  } catch {
    return { date: getTodayString(), count: 0 };
  }
}

/** Increments the submission count in localStorage */
function incrementSubmissionCount(): void {
  const record = getSubmissionRecord();
  localStorage.setItem(
    RATE_LIMIT_KEY,
    JSON.stringify({ date: record.date, count: record.count + 1 })
  );
}

/** Returns true if the user has hit the daily limit */
function isRateLimited(): boolean {
  return getSubmissionRecord().count >= DAILY_LIMIT;
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [errorToast, setErrorToast] = useState<string | null>(null);
  const [rateLimited, setRateLimited] = useState(false);

  const { isOpen, onClose } = useModalStore();
  const t = useTranslations("consultationForm");

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  // Check rate limit whenever the modal opens (update state during render)
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen && typeof window !== "undefined") {
      setRateLimited(isRateLimited());
    }
  }

  // Handle countdown and auto-close for success modal
  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isSuccess && countdown === 0) {
      onClose();
      // Reset state after closing animation
      setTimeout(() => {
        setIsSuccess(false);
        setCountdown(5);
      }, 500);
    }
  }, [isSuccess, countdown, onClose]);

  // Handle auto-dismiss for error toast
  useEffect(() => {
    if (errorToast) {
      const timer = setTimeout(() => setErrorToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [errorToast]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Guard: double-check rate limit at submit time
    if (isRateLimited()) {
      setRateLimited(true);
      return;
    }

    setIsLoading(true);
    setErrorToast(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const contact = formData.get("contact");
    const message = formData.get("message");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          message,
        }),
      });

      if (res.ok) {
        // Only increment count on successful submission
        incrementSubmissionCount();
        setIsSuccess(true);
      } else {
        setErrorToast(t("errorMessage") || "Error! Please Try Again Later.");
      }
    } catch (error) {
      console.error(error);
      setErrorToast(t("errorMessage") || "Error! Please Try Again Later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
        setCountdown(5);
      }, 500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <FadeIn
          className="z-100 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center backdrop-blur-md bg-surface-950/40 inset-0"
          onClick={handleClose}
        >
          {/* Form Container */}
          <FadeIn
            delay={0.2}
            initialY={20}
            className="bg-surface-50 w-full max-w-md rounded-2xl p-8 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
          >
            {/* Error Toast */}
            <AnimatePresence>
              {errorToast && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-4 left-0 right-0 flex justify-center z-50 pointer-events-none"
                >
                  <div className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium">
                    <AlertCircle size={16} />
                    {errorToast}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {rateLimited ? (
                /* Rate limit reached screen */
                <motion.div
                  key="rate-limited"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center text-center gap-4"
                >
                  <div className="p-4 shadow-inner aspect-square! bg-surface-200 text-surface-500 rounded-lg flex items-center justify-center mb-2">
                    <Ban size={32} />
                  </div>
                  <h2 className="text-xl font-bold text-surface-900">
                    {t("rateLimitMessage")}
                  </h2>
                  <button
                    onClick={handleClose}
                    className="mt-4 px-6 py-2 bg-surface-200 hover:bg-surface-300 cursor-pointer transition-all duration-300 hover:scale-105 text-surface-700 rounded-lg text-base font-medium"
                  >
                    {t("close")}
                  </button>
                </motion.div>
              ) : isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center text-center flex-1"
                >
                  <div className="p-4 shadow-inner aspect-square! bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-surface-900 mb-2">
                    {t("successTitle") || "Sent Successfully!"}
                  </h2>
                  <p className="text-surface-600 mb-8 text-sm">
                    {t("successMessage") || "We will get back to you shortly."}
                  </p>

                  <button
                    onClick={handleClose}
                    className="mt-6 px-6 py-2 bg-brand-600 hover:bg-brand-700 cursor-pointer transition-all duration-300 hover:scale-105 shadow-md text-surface-50 rounded-lg text-base font-medium"
                  >
                    {t("closingIn") || "Closing in"} {countdown}s...
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <h2 className="text-2xl font-bold text-surface-900">
                      {t("title")}
                    </h2>
                    <button
                      onClick={handleClose}
                      className="flex items-center justify-center duration-300 cursor-pointer text-surface-300 hover:text-surface-800 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <p className="text-surface-600 mb-8 text-sm">
                    {t("description")}
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder={t("namePlaceholder")}
                      className="placeholder-surface-600/50 text-surface-900 w-full px-4 py-2 border border-surface-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 focus:scale-102 outline-none focus:outline-none rounded-lg transition-all text-sm duration-300"
                    />
                    <input
                      name="contact"
                      type="text"
                      required
                      placeholder={t("contactPlaceholder")}
                      className="placeholder-surface-600/50 text-surface-900 w-full px-4 py-2 border border-surface-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 focus:scale-102 outline-none focus:outline-none rounded-lg transition-all text-sm duration-300"
                    />
                    <textarea
                      name="message"
                      required
                      placeholder={t("messagePlaceholder")}
                      className="placeholder-surface-600/50 text-surface-900 h-24.5 w-full px-4 py-2 border border-surface-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 focus:scale-102 resize-none  outline-none focus:outline-none rounded-lg transition-all text-sm duration-300"
                    ></textarea>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full text-white font-bold py-3 rounded-xl transition-colors mt-4 ${
                        isLoading
                          ? "bg-brand-400 cursor-not-allowed opacity-50"
                          : "bg-brand-600 hover:bg-brand-700"
                      }`}
                    >
                      {isLoading ? t("sending") : t("submit")}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeIn>
        </FadeIn>
      )}
    </AnimatePresence>
  );
}
