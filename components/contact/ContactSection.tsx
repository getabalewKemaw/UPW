"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Send,
  Check,
  Copy,
  ExternalLink,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { TelegramIcon } from "@/components/icons";
import { CONTACT_EMAIL } from "@/data/portfolio-data";
import { sound } from "@/utils/sound";
import { sendContactEmail } from "@/config/emailjs";

const SERVICE_OPTIONS = [
  "Custom Software Solutions",
  "Business Automation & Workflow Engines",
  "Mobile Application Development",
  "Software Training & Mentorship (Beginner / Mid-Level)",
  "Technical Talk & Team Workshop",
  "General Architecture Consultation",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: SERVICE_OPTIONS[0],
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    sound.playCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in your name, email, and message.");
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    const res = await sendContactEmail(formData);

    if (res.success) {
      sound.playCopy();
      setStatus("success");
      setStatusMessage("Thank you! Your message has been sent successfully to Getabalew. I will get back to you within 15 minutes.");
      setFormData({
        name: "",
        email: "",
        service: SERVICE_OPTIONS[0],
        message: "",
      });
    } else {
      setStatus("error");
      setStatusMessage(res.error || "Failed to send message via EmailJS. Please try again.");
    }
  };

  const mailtoFallbackUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `[Inquiry] ${formData.service || "Project Inquiry"} - ${formData.name || "Client"}`
  )}&body=${encodeURIComponent(
    `Hi Getabalew,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}\n`
  )}`;

  return (
    <section
      id="contact"
      aria-label="Contact and Inquiries"
      className="w-full flex flex-col gap-8 sm:gap-10 pt-10 sm:pt-14 scroll-mt-28"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-3 text-left items-start w-full">
        <div className="flex items-baseline gap-2.5 sm:gap-3">
          <span className="text-xl sm:text-2xl font-light text-theme-muted">/</span>
          <span className="text-xl sm:text-2xl font-light text-theme-muted tracking-tight">
            contact & collaborations
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
          <div className="flex flex-col gap-2 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-light tracking-tight text-theme-primary leading-tight">
              Let&apos;s Build Something Exceptional
            </h2>
            <p className="text-xl sm:text-2xl md:text-[24px] font-light text-theme-narrative leading-relaxed">
              Have a custom software project, business automation requirement, or training inquiry? Reach out below and I will respond promptly.
            </p>
          </div>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-[4px] text-sm sm:text-base font-mono bg-theme-chip text-theme-primary shrink-0 pb-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-semibold text-emerald-500">&lt; 15 Min Response Max</span>
          </div>
        </div>
      </div>

      {/* Side-by-Side Main Split (World Image on Left · Form on Right) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* ---------------- LEFT: World Connectivity Visual & Availability Rail ---------------- */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-theme-chip/30 overflow-hidden relative group">
          {/* World Image Visual */}
          <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square overflow-hidden bg-black/40">
            <Image
              src="/world.jpg"
              alt="Global connectivity map connecting Addis Ababa to tech hubs worldwide"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
            {/* Gradient Vignette for Seamless Aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-t from-theme-page/90 via-transparent to-transparent pointer-events-none" />

            {/* Floating Top Badge */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-black/60 backdrop-blur-md text-white text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Addis Ababa (UTC+3) · Remote Worldwide</span>
            </div>
          </div>

          {/* Quick Direct Channels & Availability Details */}
          <div className="p-6 sm:p-7 flex flex-col gap-4 text-left items-start w-full">
            <div className="flex flex-col gap-1 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-theme-muted">
                Direct Channels:
              </span>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-theme-chip text-theme-chip hover:bg-theme-chip-hover text-xs font-mono transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{CONTACT_EMAIL}</span>
                    </>
                  )}
                </button>

                <a
                  href="https://t.me/GetabalewKemaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-theme-chip text-theme-chip hover:bg-theme-chip-hover text-xs font-mono transition-colors cursor-pointer"
                >
                  <TelegramIcon className="w-3.5 h-3.5 text-[#229ed9]" />
                  <span>@GetabalewKemaw</span>
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>

                <a
                  href="tel:+251905952906"
                  onClick={() => sound.playClick()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-theme-chip text-theme-chip hover:bg-theme-chip-hover text-xs font-mono transition-colors cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>+251 905952906</span>
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-theme/15 w-full text-xs font-mono text-theme-muted/80 leading-relaxed">
              Available for full-time contracts, architecture advisory, and technical mentoring across US, UK, European, and Dubai timezones.
            </div>
          </div>
        </div>

        {/* ---------------- RIGHT: Contact Form (Name, Email, Service, Message) ---------------- */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl form-card-container text-left items-start w-full">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold">
                Direct Inquiry Form
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-theme-primary tracking-tight">
                Send a message directly
              </h3>
            </div>

            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-mono uppercase tracking-wider text-theme-muted"
                >
                  Your Name *
                </label>
                <div className="form-input-box">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Samuel Yohannes"
                    className="w-full h-12 sm:h-13 px-4 bg-transparent text-theme-primary text-base sm:text-lg font-light focus:outline-none"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-mono uppercase tracking-wider text-theme-muted"
                >
                  Your Email *
                </label>
                <div className="form-input-box">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full h-12 sm:h-13 px-4 bg-transparent text-theme-primary text-base sm:text-lg font-light focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Service Selection */}
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="contact-service"
                className="text-xs font-mono uppercase tracking-wider text-theme-muted"
              >
                Inquiry / Service Type *
              </label>
              <div className="relative form-input-box">
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full h-12 sm:h-13 px-4 bg-transparent text-theme-primary text-base sm:text-lg font-light focus:outline-none appearance-none cursor-pointer"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-theme-page text-theme-primary">
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-theme-muted">
                  <span className="text-xs">▼</span>
                </div>
              </div>
            </div>

            {/* Row 3: Message */}
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="contact-message"
                className="text-xs font-mono uppercase tracking-wider text-theme-muted"
              >
                Project Scope / Message *
              </label>
              <div className="form-input-box">
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, custom software vision, timeline, or training goals..."
                  className="w-full min-h-[140px] sm:min-h-[160px] p-4 bg-transparent text-theme-primary text-base sm:text-lg font-light focus:outline-none resize-y"
                />
              </div>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="p-4 rounded-[4px] bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-500 text-sm">
                <Check className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{statusMessage}</span>
              </div>
            )}

            {status === "error" && (
              <div className="p-4 rounded-[4px] bg-rose-500/10 border border-rose-500/30 flex flex-col gap-2 text-rose-500 text-sm">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
                <a
                  href={mailtoFallbackUrl}
                  className="pl-8 text-xs font-mono underline hover:opacity-80 text-rose-500"
                >
                  Click here to send directly via your email client →
                </a>
              </div>
            )}

            {/* Submit Action Button */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 w-full">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2.5 bg-theme-btn-primary text-theme-btn-primary px-8 py-3.5 rounded-[5px] text-base sm:text-lg font-normal hover:opacity-90 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 opacity-80" />
                  </>
                )}
              </button>

              <span className="text-xs font-mono text-theme-muted">
                Direct to Getabalew · Response guaranteed within 15 min
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
