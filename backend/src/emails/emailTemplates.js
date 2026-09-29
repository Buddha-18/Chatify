export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Chatify</title>
  </head>

  <body style="margin:0; padding:0; background-color:#f4f7fb; font-family:Arial, Helvetica, sans-serif; color:#1f2937;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f7fb; padding:40px 15px;">
      <tr>
        <td align="center">

          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:620px; background:#ffffff; border-radius:20px; overflow:hidden; box-shadow:0 10px 35px rgba(15,23,42,0.08);">

            <tr>
              <td style="background:linear-gradient(135deg,#6366f1,#06b6d4); padding:45px 30px; text-align:center;">

                <div style="display:inline-block; background:rgba(255,255,255,0.15); padding:8px; border-radius:22px; margin-bottom:20px;">
                  <img
                    src="https://img.magnific.com/free-psd/3d-rendering-social-media-icon_23-2151413519.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Chatify Logo"
                    width="82"
                    height="82"
                    style="display:block; width:82px; height:82px; border-radius:18px; border:4px solid rgba(255,255,255,0.8);"
                  >
                </div>

                <h1 style="margin:0; color:#ffffff; font-size:32px; line-height:1.2; font-weight:700;">
                  Welcome to Chatify
                </h1>

                <p style="margin:12px 0 0; color:rgba(255,255,255,0.9); font-size:16px;">
                  Connect. Chat. Share. Anytime.
                </p>

              </td>
            </tr>

            <tr>
              <td style="padding:40px 38px;">

                <p style="margin:0 0 18px; font-size:20px; font-weight:700; color:#111827;">
                  Hey ${name} 👋
                </p>

                <p style="margin:0 0 18px; font-size:15px; line-height:1.8; color:#4b5563;">
                  We're excited to have you join <strong style="color:#6366f1;">Chatify</strong>.
                  Your new space for simple, fast, and real-time conversations with the people who matter.
                </p>

                <p style="margin:0 0 28px; font-size:15px; line-height:1.8; color:#4b5563;">
                  Whether you're catching up with friends, connecting with family,
                  or collaborating with teammates, Chatify makes staying connected easy.
                </p>

                <table width="100%" cellpadding="0" cellspacing="0" border="0"
                  style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:14px; margin-bottom:30px;">

                  <tr>
                    <td style="padding:25px 24px;">

                      <p style="margin:0 0 18px; font-size:17px; font-weight:700; color:#111827;">
                        Get started in a few simple steps
                      </p>

                      <p style="margin:0 0 12px; font-size:14px; color:#4b5563;">
                        <span style="display:inline-block; width:24px; height:24px; line-height:24px; text-align:center; background:#eef2ff; color:#6366f1; border-radius:50%; font-weight:bold; margin-right:8px;">1</span>
                        Set up your profile
                      </p>

                      <p style="margin:0 0 12px; font-size:14px; color:#4b5563;">
                        <span style="display:inline-block; width:24px; height:24px; line-height:24px; text-align:center; background:#ecfeff; color:#0891b2; border-radius:50%; font-weight:bold; margin-right:8px;">2</span>
                        Find and connect with your contacts
                      </p>

                      <p style="margin:0 0 12px; font-size:14px; color:#4b5563;">
                        <span style="display:inline-block; width:24px; height:24px; line-height:24px; text-align:center; background:#eef2ff; color:#6366f1; border-radius:50%; font-weight:bold; margin-right:8px;">3</span>
                        Start your first conversation
                      </p>

                      <p style="margin:0; font-size:14px; color:#4b5563;">
                        <span style="display:inline-block; width:24px; height:24px; line-height:24px; text-align:center; background:#ecfeff; color:#0891b2; border-radius:50%; font-weight:bold; margin-right:8px;">4</span>
                        Share messages, photos, videos, and more
                      </p>

                    </td>
                  </tr>
                </table>

                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center" style="padding-bottom:30px;">

                      <a
                        href="${clientURL}"
                        style="display:inline-block; background:linear-gradient(135deg,#6366f1,#06b6d4); color:#ffffff; text-decoration:none; padding:14px 34px; border-radius:10px; font-size:15px; font-weight:700; box-shadow:0 6px 18px rgba(99,102,241,0.25);"
                      >
                        Open Chatify →
                      </a>

                    </td>
                  </tr>
                </table>

                <div style="height:1px; background:#e5e7eb; margin:0 0 25px;"></div>

                <p style="margin:0 0 10px; font-size:14px; line-height:1.7; color:#4b5563;">
                  Need help? We're always here to assist you.
                </p>

                <p style="margin:0 0 25px; font-size:14px; line-height:1.7; color:#4b5563;">
                  Have a great time connecting!
                </p>

                <p style="margin:0; font-size:14px; line-height:1.6; color:#374151;">
                  Best regards,<br>
                  <strong style="color:#6366f1;">The Chatify Team</strong>
                </p>

              </td>
            </tr>

          </table>

          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;">
            <tr>
              <td align="center" style="padding:25px 15px 10px;">

                <p style="margin:0 0 10px; font-size:12px; color:#9ca3af;">
                  © 2026 Chatify. All rights reserved.
                </p>

                <p style="margin:0; font-size:12px;">
                  <a href="#" style="color:#6366f1; text-decoration:none; margin:0 8px;">Privacy</a>
                  <a href="#" style="color:#6366f1; text-decoration:none; margin:0 8px;">Terms</a>
                  <a href="#" style="color:#6366f1; text-decoration:none; margin:0 8px;">Contact</a>
                </p>

              </td>
            </tr>
          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
}
