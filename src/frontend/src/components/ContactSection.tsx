import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContactForm } from "@/hooks/useQueries";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function ContactSection() {
  const { mutate, isPending, isSuccess, isError } = useSubmitContactForm();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    mutate(form);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Contact Us
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-base">
            Have questions about admissions or courses? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              Visit or Reach Us
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-brand-blue" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    Address
                  </div>
                  <div className="text-muted-foreground text-sm mt-0.5 leading-relaxed">
                    123, Education Hub, Sector 18
                    <br />
                    Connaught Place, New Delhi – 110001
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={18} className="text-brand-blue" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    Email
                  </div>
                  <a
                    href="mailto:info@c2s.edu.in"
                    className="text-brand-blue text-sm hover:underline mt-0.5 block"
                  >
                    info@c2s.edu.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={18} className="text-brand-blue" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    Phone
                  </div>
                  <a
                    href="tel:+919876543210"
                    className="text-brand-blue text-sm hover:underline mt-0.5 block"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="mt-8 rounded-xl overflow-hidden border border-border h-52 bg-section-bg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin size={32} className="mx-auto mb-2 text-brand-blue/40" />
                <p className="text-sm">123, Education Hub, New Delhi</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              data-ocid="contact.panel"
              className="bg-white rounded-2xl border border-border shadow-card p-8"
            >
              {isSuccess ? (
                <div
                  data-ocid="contact.success_state"
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <CheckCircle2 size={52} className="text-green-500" />
                  <h3 className="text-xl font-bold text-foreground">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Your enquiry has been received. Our team will get back to
                    you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setForm({ name: "", email: "", phone: "", message: "" })
                    }
                    className="mt-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-lg font-bold text-foreground mb-6">
                    Send Us a Message
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label
                        htmlFor="contact-name"
                        className="text-sm font-medium"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="contact-name"
                        data-ocid="contact.name.input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        className={`mt-1 ${errors.name ? "border-destructive" : ""}`}
                      />
                      {errors.name && (
                        <p
                          data-ocid="contact.name.error_state"
                          className="text-xs text-destructive mt-1"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label
                        htmlFor="contact-email"
                        className="text-sm font-medium"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="contact-email"
                        data-ocid="contact.email.input"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        className={`mt-1 ${errors.email ? "border-destructive" : ""}`}
                      />
                      {errors.email && (
                        <p
                          data-ocid="contact.email.error_state"
                          className="text-xs text-destructive mt-1"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label
                        htmlFor="contact-phone"
                        className="text-sm font-medium"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="contact-phone"
                        data-ocid="contact.phone.input"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, phone: e.target.value }))
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="contact-message"
                        className="text-sm font-medium"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="contact-message"
                        data-ocid="contact.message.textarea"
                        placeholder="Tell us about your goals or ask us anything..."
                        value={form.message}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, message: e.target.value }))
                        }
                        rows={4}
                        className={`mt-1 resize-none ${errors.message ? "border-destructive" : ""}`}
                      />
                      {errors.message && (
                        <p
                          data-ocid="contact.message.error_state"
                          className="text-xs text-destructive mt-1"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {isError && (
                      <p
                        data-ocid="contact.form.error_state"
                        className="text-xs text-destructive"
                      >
                        Something went wrong. Please try again or call us
                        directly.
                      </p>
                    )}

                    <Button
                      type="submit"
                      data-ocid="contact.form.submit_button"
                      disabled={isPending}
                      className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold mt-2"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
