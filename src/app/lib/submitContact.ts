type ContactSubmissionPayload = {
  source: "contact-page" | "chat-popup";
  name?: string;
  email: string;
  phone: string;
  service?: string;
  serviceLabel?: string;
  message: string;
};

const getContactApiCandidates = () => {
  const fromEnv = (import.meta.env.VITE_CONTACT_API_URL || "").trim();
  const normalized = fromEnv.replace(/\/$/, "");

  if (!normalized) {
    return ["/api/contact"];
  }

  if (/^https?:\/\//i.test(normalized)) {
    return [`${normalized}/api/contact`, "/api/contact"];
  }

  if (normalized.endsWith("/api/contact")) {
    return [normalized, "/api/contact"];
  }

  return [`${normalized}/api/contact`, "/api/contact"];
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
  const endpoints = getContactApiCandidates();

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        return;
      }
    } catch {
      // Try the next configured endpoint.
    }
  }

  if (import.meta.env.DEV) {
    console.info("Development Mode: Simulating successful contact form submission.", payload);
    await new Promise((resolve) => setTimeout(resolve, 800));
    return;
  }

  await submitToNetlify(payload);
};
