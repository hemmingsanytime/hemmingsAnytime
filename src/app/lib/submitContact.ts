type ContactSubmissionPayload = {
  source: "contact-page" | "chat-popup";
  name?: string;
  email: string;
  phone: string;
  service?: string;
  serviceLabel?: string;
  message: string;
};

const submitToNetlify = async (payload: ContactSubmissionPayload) => {
  const formBody = new URLSearchParams({
    "form-name": "contact",
    source: payload.source,
    name: payload.name || "",
    email: payload.email,
    phone: payload.phone,
    service: payload.serviceLabel || payload.service || "",
    message: payload.message,
  });

  const response = await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody.toString(),
  });

  if (!response.ok) {
    throw new Error("Netlify form submission failed.");
  }
};

export const submitContact = async (payload: ContactSubmissionPayload) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Vercel function submission failed.");
    }
  } catch {
    await submitToNetlify(payload);
  }
};
