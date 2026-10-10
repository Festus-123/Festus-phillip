import { Resend } from "resend";
import { createContactEmailTemplate } from "@/lib/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, name, message } = await req.json();

  try {
    const template = createContactEmailTemplate({ name, email, message });
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // later change to your domain
      to: "st.festus4cruise@gmail.com", // YOUR EMAIL
      subject: `New message from ${name}`,
      html: template.html,
      text: template.text,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
