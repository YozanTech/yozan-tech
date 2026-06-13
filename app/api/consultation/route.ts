import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, contact, message } = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `[躍棧 YozanTech] New Consultation Appointment`,
      html: `
        <div style="padding: 16px; border: 1px solid #e5e7eb; border-radius: 8px; background-color: #ffffff;">
        <h1 style="font-size: 20px; font-weight: bold; color: #1f2937; margin-bottom: 12px;">
          Received New Consultation Appointment
        </h1>
        <p style="font-size: 14px; color: #374151; margin-bottom: 8px;">
          <strong>Name:</strong> ${name}
        </p>
        <p style="font-size: 14px; color: #374151; margin-bottom: 8px;">
          <strong>Contact:</strong> ${contact}
        </p>
        <p style="font-size: 14px; color: #374151; margin-bottom: 12px; white-space: pre-wrap;">
          <strong>Message:</strong> ${message}
        </p>
        </div>
        `,
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message:
        "Your Application Has Been Sent Successfully. We Will Get Back To You Soon.",
    });
  } catch (error) {
    console.log("Mail Send Failed: ", error);
    return NextResponse.json(
      { success: false, message: "Mail Send Failed" },
      { status: 500 },
    );
  }
}
