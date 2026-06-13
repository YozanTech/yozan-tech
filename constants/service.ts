import { BriefcaseBusiness, Globe, Cloud } from "lucide-react";

export const SERVICES = [
  {
    id: "customBusinessSystem",
    label: "Custom Business Systems",
    icon: BriefcaseBusiness,
    description:
      "From internal workflows to automated operations. We build tailored ERPs, CRMs, and dashboards that perfectly fit your unique business logic, eliminating the friction of rigid off-the-shelf software.",
    shortDescription:
      "Integrate the processes scattered across Excel, Line groups, and paper documents into a system that truly belongs to you.",
    serviceDetail: {
      1: { label: "Internal ERP / CRM / Order Management System" },
      2: { label: "Business process automation and auditing mechanisms" },
      3: { label: "Back-end dashboards and reports" },
      4: {
        label:
          "Third-party service integration (financial payments, logistics, accounting)",
      },
    },
  },
  {
    id: "premiumCorporateWebsite",
    label: "Premium Corporate Websites",
    icon: Globe,
    description:
      "From high-converting landing pages to robust e-commerce platforms. We craft lightning-fast, SEO-optimized, and visually stunning digital storefronts that elevate your brand and drive actual business growth.",
    shortDescription:
      "From brand positioning and copywriting structure to visual design, create websites that truly generate inquiries and conversions.",
    serviceDetail: {
      1: { label: "Brand website design and development." },
      2: { label: "Event / Product Landing Page" },
      3: { label: "SEO and performance optimization" },
      4: {
        label:
          "CMS integration, allowing marketing to update content independently",
      },
    },
  },
  {
    id: "maintenanceAndCloudManagement",
    label: "Maintenance & Cloud Management",
    icon: Cloud,
    description:
      "Ensuring high availability, bulletproof security, and smooth daily operations. We handle the servers, continuous deployments, and technical monitoring, so you can sleep well and focus entirely on your business.",
    shortDescription:
      "Going live is just the beginning. We offer long-term maintenance and cloud hosting, so you don't have to build your own IT team.",
    serviceDetail: {
      1: {
        label: "Cloud Infrastructure Design & Strategy (AWS, GCP, Cloudflare)",
      },
      2: {
        label: "System Monitoring, Data Backup & Disaster Recovery Solutions",
      },
      3: {
        label:
          "Performance Tuning, Scalability Enhancement & Cost Optimization",
      },
      4: {
        label:
          "Monthly Operations Reports, Infrastructure Reviews & Technical Advisory",
      },
    },
  },
];
