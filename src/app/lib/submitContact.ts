type ContactSubmissionPayload = {
  source: "contact-page" | "chat-popup";
  name?: string;
  email: string;
  phone: string;
  service?: string;
  serviceLabel?: string;
  message: string;
};

/**
 * Submits the contact form data.
 *
 * The actual lead capture is handled by the GoHighLevel external tracking
 * script (loaded in index.html). This function simply pushes a "contact_form_submit"
 * event to the dataLayer so GTM / GHL can pick it up, then resolves successfully.
 */
export const submitContact = async (payload: ContactSubmissionPayload) => {
  // Push form data to dataLayer for GTM / GHL conversion tracking
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "contact_form_submit",
    formSource: payload.source,
    formName: payload.name || "",
    formEmail: payload.email,
    formPhone: payload.phone,
    formService: payload.serviceLabel || payload.service || "",
    formMessage: payload.message,
  });

  // Small delay to let tracking scripts process the event
  await new Promise((resolve) => setTimeout(resolve, 500));
};
