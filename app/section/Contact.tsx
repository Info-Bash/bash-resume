"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, GitBranch, Link2, Send, CheckCircle, AlertCircle } from "lucide-react";
import clsx from "clsx";
import SectionReveal from "@/app/ui/SectionReveal";
import SectionHeader from "@/app/ui/SectionHeader";
import { personalInfo } from "@/app/lib/data";
import styles from "@/app/components/home.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const socialLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: <Mail size={18} />,
    color: "rgba(96,165,250,0.12)",
    border: "rgba(96,165,250,0.2)",
    text: "var(--accent-blue)",
  },
  {
    label: "GitHub",
    value: "github.com/Info-Bash",
    href: personalInfo.github,
    icon: <GitBranch size={18} />,
    color: "rgba(255,255,255,0.06)",
    border: "rgba(53, 56, 60, 0.2)",
    text: "var(--text-primary)",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bashir",
    href: personalInfo.linkedin,
    icon: <Link2 size={18} />,
    color: "rgba(14,118,255,0.12)",
    border: "rgba(14,118,255,0.2)",
    text: "#60a5fa",
  },
];

// Reusable field label component
function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-mono text-[0.72rem] tracking-[0.08em] text-[var(--text-secondary)] mb-2 uppercase"
    >
      {children}
    </label>
  );
}

// Reusable error message component
function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="flex items-center gap-1 text-[#f87171] text-[0.75rem] mt-1.5">
      <AlertCircle size={12} /> {message}
    </p>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    else if (form.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email";

    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20)
      newErrors.message = "Message must be at least 20 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="// contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid gap-12 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">

          {/* Contact info */}
          <SectionReveal direction="left">
            <div>
              <h3 className="font-display font-bold text-[1.3rem] mb-4">
                Get In Touch
              </h3>
              <p className="text-[var(--text-secondary)] leading-[1.75] mb-8">
                Whether you have a project proposal, want to discuss an opportunity, or just
                want to say hello - my inbox is always open.
              </p>

              {/* Social links */}
              <div className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 px-5 py-4 rounded-xl no-underline transition-opacity duration-200"
                    style={{
                      background: link.color,
                      border: `1px solid ${link.border}`,
                    }}
                  >
                    <span style={{ color: link.text }}>{link.icon}</span>
                    <div>
                      <div className="font-mono text-[0.65rem] tracking-[0.08em] text-[var(--text-muted)] uppercase mb-0.5">
                        {link.label}
                      </div>
                      <div
                        className="text-[0.9rem] font-medium"
                        style={{ color: link.text }}
                      >
                        {link.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Contact form */}
          <SectionReveal direction="right">
            <div className={`${styles.glassCard} p-8`}>
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8"
                >
                  <CheckCircle size={48} color="#4ade80" className="mx-auto mb-4" />
                  <h3 className="font-display font-bold text-[1.3rem] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className={`${styles.btnPrimary} mt-6 px-6 py-2.5 text-[0.88rem]`}
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>

                  {/* Name */}
                  <div className="mb-5">
                    <FieldLabel htmlFor="name">Name</FieldLabel>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`${styles.formInput} px-4 py-3 text-[0.9rem]`}
                      aria-invalid={!!errors.name}
                    />
                    <FieldError message={errors.name} />
                  </div>

                  {/* Email */}
                  <div className="mb-5">
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`${styles.formInput} px-4 py-3 text-[0.9rem]`}
                      aria-invalid={!!errors.email}
                    />
                    <FieldError message={errors.email} />
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <FieldLabel htmlFor="message">Message</FieldLabel>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello..."
                      className={`${styles.formInput} px-4 py-3 text-[0.9rem] resize-y`}
                      rows={5}
                      aria-invalid={!!errors.message}
                    />
                    <FieldError message={errors.message} />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={clsx(
                      `${styles.btnPrimary} w-full py-[13px] text-[0.95rem] flex items-center justify-center gap-2`,
                      status === "loading" ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
                    )}
                  >
                    {status === "loading" ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  );
}