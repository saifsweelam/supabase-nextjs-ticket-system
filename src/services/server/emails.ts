import { sendEmail } from "@/lib/nodemailer"

export const sendMagicLinkEmail = async (email: string, magicLink: string) => {
    return await sendEmail(email, "Your Magic Link", `
        <h1>Login to Your Account</h1>
        <p>Click the link below to log in:</p>
        <a href="${magicLink}">${magicLink}</a>
    `);
};
