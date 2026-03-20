import nodemailer from "nodemailer";

// Real SMTP transporter using credentials from environment variables.
// For Gmail: set SMTP_USER to your Gmail address and SMTP_PASS to an App Password.
// Generate an App Password at: https://myaccount.google.com/apppasswords
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true", // false for port 587 (STARTTLS)
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendVerificationEmail(email: string, code: string) {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_FROM || '"CTD Portal" <no-reply@ctd.thapar.edu>',
            to: email,
            subject: "Verify your CTD Portal Email Address",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; padding: 20px;">
                    <h2 style="color: #6d28d9;">CTD Account Verification</h2>
                    <p>Welcome to the Centre for Training & Development Portal!</p>
                    <p>Enter the following 6-digit code to complete your registration process:</p>
                    <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; text-align: center; margin: 24px 0;">
                        <span style="font-size: 32px; font-weight: bold; letter-spacing: 4px; color: #111;">${code}</span>
                    </div>
                    <p>If you did not request this email, please ignore it.</p>
                </div>
            `,
        });
        return true;
    } catch (err) {
        console.error("Mail Dispatch Failure [Verify]:", err);
        return false;
    }
}

export async function sendPasswordResetEmail(email: string, code: string) {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_FROM || '"CTD Portal" <no-reply@ctd.thapar.edu>',
            to: email,
            subject: "Reset your CTD Portal Password",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; padding: 20px;">
                    <h2 style="color: #6d28d9;">CTD Password Reset</h2>
                    <p>We received a request to securely reset your password.</p>
                    <p>Enter the following 6-digit code on the reset page to choose your new password. This code will expire in exactly 1 hour.</p>
                    <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; text-align: center; margin: 24px 0;">
                        <span style="font-size: 32px; font-weight: bold; letter-spacing: 4px; color: #111;">${code}</span>
                    </div>
                    <p>If you did not request this reset, simply ignore this email and your password will remain untouched.</p>
                </div>
            `,
        });
        return true;
    } catch (err) {
        console.error("Mail Dispatch Failure [Reset]:", err);
        return false;
    }
}
