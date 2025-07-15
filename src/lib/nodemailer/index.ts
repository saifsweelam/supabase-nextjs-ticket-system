import nodemailer from "nodemailer";

export const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST!,
        port: parseInt(process.env.EMAIL_PORT || "54325"),
    });
}

export const sendEmail = async (to: string, subject: string, html: string) => {
    const transporter = createTransporter();
    const mailOptions = {
        from: process.env.EMAIL_FROM!,
        to,
        subject,
        html,
    };

    return await transporter.sendMail(mailOptions)
};
