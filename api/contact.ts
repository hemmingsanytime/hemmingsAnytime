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

const toTextBlock = (payload: ContactPayload) => {
  return [
    `Source: ${payload.source || "unknown"}`,
    `Name: ${payload.name || "N/A"}`,
    `Email: ${payload.email || "N/A"}`,
    `Phone: ${payload.phone || "N/A"}`,
    `Service: ${payload.serviceLabel || payload.service || "N/A"}`,
    "",
    "Message:",
    payload.message || "N/A",
  ].join("\n");
};

const sendWithGmailSmtp = async (payload: ContactPayload) => {
  const smtpUser = process.env.GMAIL_SMTP_USER;
  const smtpPass = process.env.GMAIL_SMTP_PASS;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!smtpUser || !smtpPass || !fromEmail || !toEmail) {
    throw new Error("Missing email env vars.");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    replyTo: payload.email,
    subject: `New enquiry from ${payload.source || "website"}`,
    text: toTextBlock(payload),
  });
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
    await sendWithGmailSmtp(payload);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact function failed:", error);
    return res.status(500).json({ ok: false, error: "Failed to send email." });
  }
}
