import nodemailer from "nodemailer";

type ContactPayload = {
  source?: string;
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  serviceLabel?: string;
  message?: string;
};

type VercelRequestLike = {
  method?: string;
  body?: ContactPayload;
};

type VercelResponseLike = {
  status: (code: number) => VercelResponseLike;
  json: (body: unknown) => void;
};

const getServiceName = (payload: ContactPayload) => payload.serviceLabel || payload.service || "N/A";

const toOwnerTextBlock = (payload: ContactPayload) => {
  return [
    `Source: ${payload.source || "unknown"}`,
    `Name: ${payload.name || "N/A"}`,
    `Email: ${payload.email || "N/A"}`,
    `Phone: ${payload.phone || "N/A"}`,
    `Service: ${getServiceName(payload)}`,
    "",
    "Message:",
    payload.message || "N/A",
  ].join("\n");
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const ownerEmailHtml = (payload: ContactPayload) => {
  const message = escapeHtml(payload.message || "N/A").replaceAll("\n", "<br/>");

  return `
    <div style="background:#f6f8fb;padding:24px;font-family:Arial,sans-serif;color:#0f172a;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;">
        <div style="padding:20px 24px;background:#0f172a;color:#ffffff;">
          <h1 style="margin:0;font-size:20px;line-height:1.3;">New enquiry received</h1>
          <p style="margin:8px 0 0;font-size:14px;opacity:0.9;">A contact request was submitted from ${escapeHtml(payload.source || "website")}.</p>
        </div>
        <div style="padding:20px 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;line-height:1.6;">
            <tr><td style="padding:8px 0;color:#64748b;width:130px;">Name</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(payload.name || "N/A")}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(payload.email || "")}" style="color:#0f172a;">${escapeHtml(payload.email || "N/A")}</a></td></tr>
            <tr><td style="padding:8px 0;color:#64748b;">Phone</td><td style="padding:8px 0;"><a href="tel:${escapeHtml(payload.phone || "")}" style="color:#0f172a;">${escapeHtml(payload.phone || "N/A")}</a></td></tr>
            <tr><td style="padding:8px 0;color:#64748b;">Service</td><td style="padding:8px 0;">${escapeHtml(getServiceName(payload))}</td></tr>
          </table>
          <div style="margin-top:16px;padding:14px;border-radius:10px;background:#f8fafc;border:1px solid #e2e8f0;">
            <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#64748b;">Message</p>
            <p style="margin:0;font-size:14px;line-height:1.7;">${message}</p>
          </div>
        </div>
      </div>
    </div>
  `;
};

const clientEmailHtml = (payload: ContactPayload) => {
  const safeName = escapeHtml(payload.name || "there");
  const safeService = escapeHtml(getServiceName(payload));

  return `
    <div style="background:#f6f8fb;padding:24px;font-family:Arial,sans-serif;color:#0f172a;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;">
        <div style="padding:20px 24px;background:#0f172a;color:#ffffff;">
          <h1 style="margin:0;font-size:20px;line-height:1.3;">We received your enquiry</h1>
          <p style="margin:8px 0 0;font-size:14px;opacity:0.9;">Thanks for contacting Hemmings Anytime.</p>
        </div>
        <div style="padding:20px 24px;">
          <p style="margin:0 0 14px;font-size:15px;line-height:1.7;">Hi ${safeName}, thanks for reaching out. We will review your request and get back to you shortly.</p>
          <div style="padding:14px;border-radius:10px;background:#f8fafc;border:1px solid #e2e8f0;">
            <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#64748b;">Request summary</p>
            <p style="margin:0;font-size:14px;line-height:1.7;">
              <strong>Service:</strong> ${safeService}<br/>
              <strong>Phone:</strong> ${escapeHtml(payload.phone || "N/A")}
            </p>
          </div>
          <p style="margin:16px 0 0;font-size:14px;color:#334155;line-height:1.7;">
            If you need to add details, reply to this email and we will include it in your request.
          </p>
        </div>
      </div>
    </div>
  `;
};

const clientTextBlock = (payload: ContactPayload) => {
  return [
    `Hi ${payload.name || "there"},`,
    "",
    "Thanks for contacting Hemmings Anytime. We received your enquiry and will get back to you shortly.",
    "",
    `Service: ${getServiceName(payload)}`,
    `Phone: ${payload.phone || "N/A"}`,
    "",
    "If you need to add details, reply to this email.",
  ].join("\n");
};

const createTransporter = async () => {
  const smtpUser = process.env.GMAIL_SMTP_USER;
  const smtpPass = process.env.GMAIL_SMTP_PASS;
  const localMode = process.env.LOCAL_EMAIL_MODE || "";

  if (smtpUser && smtpPass) {
    return nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
  }

  if (process.env.NODE_ENV === "development" || localMode === "ethereal") {
    const testAccount = await nodemailer.createTestAccount();
    return nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }

  throw new Error("Missing SMTP configuration. Set Gmail SMTP credentials or enable LOCAL_EMAIL_MODE=ethereal.");
};

const sendWithSmtp = async (payload: ContactPayload) => {
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!fromEmail || !toEmail) {
    throw new Error("Missing CONTACT_FROM_EMAIL or CONTACT_TO_EMAIL.");
  }

  const transporter = await createTransporter();

  const ownerInfo = await transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    replyTo: payload.email,
    subject: `New enquiry from ${payload.source || "website"}`,
    text: toOwnerTextBlock(payload),
    html: ownerEmailHtml(payload),
  });

  const clientInfo = await transporter.sendMail({
    from: fromEmail,
    to: payload.email,
    subject: "We received your enquiry - Hemmings Anytime",
    text: clientTextBlock(payload),
    html: clientEmailHtml(payload),
  });

  const ownerPreview = nodemailer.getTestMessageUrl(ownerInfo);
  const clientPreview = nodemailer.getTestMessageUrl(clientInfo);

  if (ownerPreview) {
    console.info("Owner email preview URL:", ownerPreview);
  }
  if (clientPreview) {
    console.info("Client email preview URL:", clientPreview);
  }
};

export default async function handler(req: VercelRequestLike, res: VercelResponseLike) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const payload = req.body || {};

  if (!payload.email || !payload.phone || !payload.message) {
    return res.status(400).json({ ok: false, error: "Missing required fields." });
  }

  try {
    await sendWithSmtp(payload);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact function failed:", error);
    return res.status(500).json({ ok: false, error: "Failed to send email." });
  }
}
