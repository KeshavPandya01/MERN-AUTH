import { transporter, sender } from "./mail.config.js";
import {
  WELCOME_EMAIL_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplate.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const mailOptions = {
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
    };

    const response = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending verification email`, error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    const mailOptions = {
      from: `${sender.name} <${sender.email}>`,
      to: email,
      subject: "Welcome to Our Service",
      html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
    };

    const response = await transporter.sendMail(mailOptions);
    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error(`Error sending welcome email to ${email}`, error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async(email, resetURL)=>{

     try {
       const mailOptions = {
         from: `${sender.name} <${sender.email}>`,
         to: email,
         subject: "Reset your Password",
         html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
       };

       const response = await transporter.sendMail(mailOptions);
       console.log("Password Reset Mail Sent Successfully", response);
     } catch (error) {
       console.error(`Error sending password reset email to ${email}`, error);
       throw new Error(`Error sending password reset email: ${error}`);
     }
}

export const sendResetSuccessEmail = async(email)=>{
    try {
      const mailOptions = {
        from: `${sender.name} <${sender.email}>`,
        to: email,
        subject: "Password Reset Successful",
        html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      };

      const response = await transporter.sendMail(mailOptions);
      console.log("Password reset email sent successfully", response);
      
    } catch (error) {
      console.error(`Error sending Password reset email to ${email}`, error);
      throw new Error(`Error sending Password reset email: ${error}`);
    }
}