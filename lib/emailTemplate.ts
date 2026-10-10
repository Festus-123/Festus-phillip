const escapeHtml = (value: string): string =>
  value.replace(/[&<>"']/g, (character: string): string => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });

type ContactEmailTemplateInput = {
  name: string;
  email: string;
  message: string;
};

type ContactEmailTemplateResult = {
  html: string;
  text: string;
};

export function createContactEmailTemplate({
  name,
  email,
  message,
}: ContactEmailTemplateInput): ContactEmailTemplateResult {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  return {
    html: `
      <div style="background-color:#f3f5f2;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#202822;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:0 auto;background-color:#ffffff;border:1px solid #dce3dc;border-radius:8px;">
          <tr>
            <td style="padding:28px 32px;background-color:#183c32;border-radius:8px 8px 0 0;">
              <p style="margin:0 0 8px;color:#c6dbc9;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Portfolio contact</p>
              <h1 style="margin:0;color:#ffffff;font-size:24px;line-height:1.3;font-weight:600;">New message received</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px 12px;">
              <p style="margin:0 0 20px;color:#536158;font-size:15px;line-height:1.6;">Someone has reached out through your website.</p>
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 0;border-top:1px solid #e8ece8;color:#738077;font-size:12px;font-weight:700;text-transform:uppercase;">Name</td>
                  <td style="padding:12px 0;border-top:1px solid #e8ece8;color:#202822;font-size:15px;text-align:right;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-top:1px solid #e8ece8;color:#738077;font-size:12px;font-weight:700;text-transform:uppercase;">Email</td>
                  <td style="padding:12px 0;border-top:1px solid #e8ece8;color:#202822;font-size:15px;text-align:right;">${safeEmail}</td>
                </tr>
              </table>
              <h2 style="margin:20px 0 10px;color:#183c32;font-size:14px;font-weight:700;">Message</h2>
              <div style="padding:16px;background-color:#f3f5f2;border-left:3px solid #54836d;border-radius:4px;color:#202822;font-size:15px;line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;">${safeMessage}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 24px;color:#738077;font-size:12px;line-height:1.5;">
              Sent from the contact form on your portfolio website.
            </td>
          </tr>
        </table>
      </div>
    `,
    text: `New message received\nPortfolio contact\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from the contact form on your portfolio website.`,
  };
}
