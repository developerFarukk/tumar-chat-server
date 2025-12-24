/* eslint-disable no-console */
import { resendClient, sender } from "../lib/resend";
import { createWelcomeEmailTemplate } from "./emailTemplates";


// emailService
export const sendWelcomeEmail = async (email: string, name: string, clientURL: string) => {
  
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Welcome to Amar Chat App!",
    html: createWelcomeEmailTemplate(name, clientURL),
  });

  if (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }

  console.log("Welcome Email sent successfully", data);
  return data;
};