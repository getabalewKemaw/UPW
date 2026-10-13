// EmailJS Configuration
// Credentials read directly from environment variables (.env / .env.local):
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_1dhnxqb",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_7n3b4og",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "uDZZcup1XUokQjBBb",
};

export const isEmailJSConfigured = (): boolean => {
  return Boolean(
    EMAILJS_CONFIG.serviceId &&
      EMAILJS_CONFIG.templateId &&
      EMAILJS_CONFIG.publicKey
  );
};

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export async function sendContactEmail(
  data: ContactFormData
): Promise<{ success: boolean; error?: string; notConfigured?: boolean }> {
  if (!isEmailJSConfigured()) {
    return {
      success: false,
      notConfigured: true,
      error: "EmailJS credentials not configured.",
    };
  }

  // Combined message so that even default EmailJS templates with only {{message}} display the service & details
  const formattedMessage = `Service / Plan: ${data.service}\nFrom: ${data.name} (${data.email})\n\nMessage:\n${data.message}`;

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: EMAILJS_CONFIG.serviceId,
        template_id: EMAILJS_CONFIG.templateId,
        user_id: EMAILJS_CONFIG.publicKey,
        template_params: {
          // Name variations
          from_name: data.name,
          name: data.name,
          user_name: data.name,

          // Email variations
          reply_to: data.email,
          email: data.email,
          from_email: data.email,
          user_email: data.email,

          // Service / Plan / Category variations
          service_category: data.service,
          serviceCategory: data.service,
          service: data.service,
          service_plan: data.service,
          service_type: data.service,
          serviceType: data.service,
          category: data.service,
          plan: data.service,
          inquiry_type: data.service,

          // Message variations
          message: formattedMessage,
          user_message: data.message,
          raw_message: data.message,
          notes: data.message,

          // Subject
          subject: `[Inquiry: ${data.service}] from ${data.name}`,
        },
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return {
        success: false,
        error: errText || "Failed to send message via EmailJS.",
      };
    }

    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Network error occurred.";
    return {
      success: false,
      error: message,
    };
  }
}
