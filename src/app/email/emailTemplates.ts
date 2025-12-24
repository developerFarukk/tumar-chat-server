

export interface TSenderEmailTemplateParams {
  name: string;
  clientURL: string;
}



export function createWelcomeEmailTemplate(name: string, clientURL: string) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Messenger</title>
  </head>
  <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
    <div style="background: linear-gradient(to right, #36D1DC, #5B86E5); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
      <img src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg?t=st=1741295028~exp=1741298628~hmac=0d076f885d7095f0b5bc8d34136cd6d64749455f8cb5f29a924281bafc11b96c&w=1480" alt="Messenger Logo" style="width: 80px; height: 80px; margin-bottom: 20px; border-radius: 50%; background-color: white; padding: 10px;">
      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 500;">Welcome to Messenger!</h1>
    </div>
    <div style="background-color: #ffffff; padding: 35px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
      <p style="font-size: 18px; color: #5B86E5;"><strong>Hello ${name},</strong></p>
      <p>We're excited to have you join our messaging platform! Messenger connects you with friends, family, and colleagues in real-time, no matter where they are.</p>
      
      <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #36D1DC;">
        <p style="font-size: 16px; margin: 0 0 15px 0;"><strong>Get started in just a few steps:</strong></p>
        <ul style="padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 10px;">Set up your profile picture</li>
          <li style="margin-bottom: 10px;">Find and add your contacts</li>
          <li style="margin-bottom: 10px;">Start a conversation</li>
          <li style="margin-bottom: 0;">Share photos, videos, and more</li>
        </ul>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href=${clientURL} style="background: linear-gradient(to right, #36D1DC, #5B86E5); color: white; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: 500; display: inline-block;">Open Messenger</a>
      </div>
      
      <p style="margin-bottom: 5px;">If you need any help or have questions, we're always here to assist you.</p>
      <p style="margin-top: 0;">Happy messaging!</p>
      
      <p style="margin-top: 25px; margin-bottom: 0;">Best regards,<br>The Messenger Team</p>
    </div>
    
    <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
      <p>© 2025 Messenger. All rights reserved.</p>
      <p>
        <a href="#" style="color: #5B86E5; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
        <a href="#" style="color: #5B86E5; text-decoration: none; margin: 0 10px;">Terms of Service</a>
        <a href="#" style="color: #5B86E5; text-decoration: none; margin: 0 10px;">Contact Us</a>
      </p>
    </div>
  </body>
  </html>
  `;
}


// export function createWelcomeEmailTemplate(name: string, clientURL: string): string {
//   // Color schemes for light and dark modes
//   const lightColors = {
//     primary: '#5B86E5',
//     secondary: '#36D1DC',
//     background: '#ffffff',
//     text: '#333333',
//     cardBackground: '#f8f9fa',
//     border: '#e9ecef',
//     mutedText: '#6c757d',
//     gradient: 'linear-gradient(to right, #36D1DC, #5B86E5)'
//   };

//   const darkColors = {
//     primary: '#6d9eff',
//     secondary: '#3de1ed',
//     background: '#1a1a1a',
//     text: '#f8f9fa',
//     cardBackground: '#2d2d2d',
//     border: '#404040',
//     mutedText: '#adb5bd',
//     gradient: 'linear-gradient(to right, #36D1DC, #5B86E5)'
//   };

//   return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="x-apple-disable-message-reformatting">
//     <title>Welcome to Messenger</title>
//     <style>
//         /* Reset for email clients */
//         * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//         }
        
//         body {
//             margin: 0;
//             padding: 0;
//             -webkit-text-size-adjust: 100%;
//             -ms-text-size-adjust: 100%;
//             font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
//         }
        
//         table {
//             border-collapse: collapse;
//             mso-table-lspace: 0pt;
//             mso-table-rspace: 0pt;
//         }
        
//         img {
//             border: 0;
//             height: auto;
//             line-height: 100%;
//             outline: none;
//             text-decoration: none;
//             -ms-interpolation-mode: bicubic;
//         }
        
//         a {
//             text-decoration: none;
//         }
        
//         /* Dark/Light mode handling */
//         @media (prefers-color-scheme: dark) {
//             .dark-mode-visible {
//                 display: block !important;
//                 width: auto !important;
//                 overflow: visible !important;
//                 float: none !important;
//                 max-height: inherit !important;
//                 max-width: inherit !important;
//                 line-height: auto !important;
//                 margin-top: 0px !important;
//                 visibility: visible !important;
//             }
//             .light-mode-visible {
//                 display: none !important;
//                 display: none;
//                 mso-hide: all;
//                 overflow: hidden;
//                 max-height: 0;
//                 font-size: 0;
//                 width: 0;
//                 line-height: 0;
//             }
//         }
        
//         @media (prefers-color-scheme: light) {
//             .light-mode-visible {
//                 display: block !important;
//                 width: auto !important;
//                 overflow: visible !important;
//                 float: none !important;
//                 max-height: inherit !important;
//                 max-width: inherit !important;
//                 line-height: auto !important;
//                 margin-top: 0px !important;
//                 visibility: visible !important;
//             }
//             .dark-mode-visible {
//                 display: none !important;
//                 display: none;
//                 mso-hide: all;
//                 overflow: hidden;
//                 max-height: 0;
//                 font-size: 0;
//                 width: 0;
//                 line-height: 0;
//             }
//         }
        
//         /* Base container */
//         .email-container {
//             width: 100%;
//             max-width: 600px;
//             margin: 0 auto;
//             padding: 0;
//         }
        
//         /* Header styles */
//         .header {
//             background: ${lightColors.gradient};
//             padding: 30px 20px;
//             text-align: center;
//             border-radius: 12px 12px 0 0;
//         }
        
//         .dark-header {
//             background: ${darkColors.gradient};
//             padding: 30px 20px;
//             text-align: center;
//             border-radius: 12px 12px 0 0;
//         }
        
//         .logo {
//             width: 80px;
//             height: 80px;
//             margin: 0 auto 20px auto;
//             border-radius: 50%;
//             background-color: white;
//             padding: 12px;
//             display: block;
//         }
        
//         .dark-logo {
//             width: 80px;
//             height: 80px;
//             margin: 0 auto 20px auto;
//             border-radius: 50%;
//             background-color: white;
//             padding: 12px;
//             display: block;
//             box-shadow: 0 4px 20px rgba(0,0,0,0.3);
//         }
        
//         .title {
//             color: white;
//             font-size: 28px;
//             font-weight: 700;
//             line-height: 1.2;
//             margin: 0;
//             padding: 0 10px;
//         }
        
//         .dark-title {
//             color: white;
//             font-size: 28px;
//             font-weight: 700;
//             line-height: 1.2;
//             margin: 0;
//             padding: 0 10px;
//             text-shadow: 0 2px 10px rgba(0,0,0,0.2);
//         }
        
//         /* Content area */
//         .content {
//             padding: 40px 30px;
//             border-radius: 0 0 12px 12px;
//             background-color: ${lightColors.background};
//         }
        
//         .dark-content {
//             padding: 40px 30px;
//             border-radius: 0 0 12px 12px;
//             background-color: ${darkColors.background};
//             box-shadow: 0 10px 40px rgba(0,0,0,0.4);
//         }
        
//         /* Greeting */
//         .greeting {
//             font-size: 20px;
//             font-weight: 600;
//             color: ${lightColors.primary};
//             margin-bottom: 20px;
//             line-height: 1.4;
//         }
        
//         .dark-greeting {
//             font-size: 20px;
//             font-weight: 600;
//             color: ${darkColors.secondary};
//             margin-bottom: 20px;
//             line-height: 1.4;
//         }
        
//         /* Message text */
//         .message {
//             font-size: 16px;
//             line-height: 1.6;
//             color: ${lightColors.text};
//             margin-bottom: 20px;
//         }
        
//         .dark-message {
//             font-size: 16px;
//             line-height: 1.6;
//             color: ${darkColors.text};
//             margin-bottom: 20px;
//         }
        
//         /* Features box */
//         .features-box {
//             background-color: ${lightColors.cardBackground};
//             padding: 25px;
//             border-radius: 10px;
//             margin: 25px 0;
//             border-left: 4px solid ${lightColors.secondary};
//         }
        
//         .dark-features-box {
//             background-color: ${darkColors.cardBackground};
//             padding: 25px;
//             border-radius: 10px;
//             margin: 25px 0;
//             border-left: 4px solid ${darkColors.secondary};
//             box-shadow: inset 0 2px 10px rgba(0,0,0,0.1);
//         }
        
//         .features-title {
//             font-size: 18px;
//             font-weight: 600;
//             color: ${lightColors.primary};
//             margin-bottom: 15px;
//         }
        
//         .dark-features-title {
//             font-size: 18px;
//             font-weight: 600;
//             color: ${darkColors.secondary};
//             margin-bottom: 15px;
//         }
        
//         .features-list {
//             padding-left: 20px;
//             margin: 0;
//         }
        
//         .features-list li {
//             font-size: 15px;
//             line-height: 1.5;
//             color: ${lightColors.text};
//             margin-bottom: 10px;
//             padding-left: 5px;
//         }
        
//         .dark-features-list li {
//             font-size: 15px;
//             line-height: 1.5;
//             color: ${darkColors.text};
//             margin-bottom: 10px;
//             padding-left: 5px;
//         }
        
//         /* CTA Button */
//         .cta-container {
//             text-align: center;
//             margin: 30px 0;
//             padding: 0 10px;
//         }
        
//         .cta-button {
//             display: inline-block;
//             background: ${lightColors.gradient};
//             color: white;
//             text-decoration: none;
//             padding: 16px 40px;
//             border-radius: 50px;
//             font-weight: 600;
//             font-size: 16px;
//             line-height: 1.5;
//             transition: all 0.3s ease;
//             border: none;
//             cursor: pointer;
//         }
        
//         .dark-cta-button {
//             display: inline-block;
//             background: ${darkColors.gradient};
//             color: white;
//             text-decoration: none;
//             padding: 16px 40px;
//             border-radius: 50px;
//             font-weight: 600;
//             font-size: 16px;
//             line-height: 1.5;
//             transition: all 0.3s ease;
//             border: none;
//             cursor: pointer;
//             box-shadow: 0 4px 20px rgba(54, 209, 220, 0.4), 0 0 0 1px rgba(255,255,255,0.1);
//         }
        
//         /* Links in text */
//         .inline-link {
//             color: ${lightColors.primary};
//             text-decoration: none;
//             font-weight: 500;
//         }
        
//         .dark-inline-link {
//             color: ${darkColors.secondary};
//             text-decoration: none;
//             font-weight: 500;
//         }
        
//         /* Signature */
//         .signature {
//             margin-top: 30px;
//             font-size: 16px;
//             color: ${lightColors.text};
//             line-height: 1.6;
//         }
        
//         .dark-signature {
//             margin-top: 30px;
//             font-size: 16px;
//             color: ${darkColors.text};
//             line-height: 1.6;
//         }
        
//         .team-name {
//             color: ${lightColors.primary};
//             font-weight: 600;
//         }
        
//         .dark-team-name {
//             color: ${darkColors.secondary};
//             font-weight: 600;
//         }
        
//         /* Footer */
//         .footer {
//             text-align: center;
//             padding: 25px 20px;
//             font-size: 13px;
//             color: ${lightColors.mutedText};
//             line-height: 1.5;
//         }
        
//         .dark-footer {
//             text-align: center;
//             padding: 25px 20px;
//             font-size: 13px;
//             color: ${darkColors.mutedText};
//             line-height: 1.5;
//             border-top: 1px solid ${darkColors.border};
//         }
        
//         .footer-links {
//             margin-top: 15px;
//         }
        
//         .footer-link {
//             display: inline-block;
//             color: ${lightColors.primary};
//             text-decoration: none;
//             margin: 0 12px;
//             font-size: 12px;
//             transition: opacity 0.3s ease;
//         }
        
//         .dark-footer-link {
//             display: inline-block;
//             color: ${darkColors.secondary};
//             text-decoration: none;
//             margin: 0 12px;
//             font-size: 12px;
//             transition: opacity 0.3s ease;
//         }
        
//         /* Responsive styles */
//         @media only screen and (max-width: 640px) {
//             .email-container {
//                 width: 100% !important;
//                 padding: 0 10px !important;
//             }
            
//             .header, .dark-header {
//                 padding: 25px 15px !important;
//                 border-radius: 8px 8px 0 0 !important;
//             }
            
//             .logo, .dark-logo {
//                 width: 70px !important;
//                 height: 70px !important;
//                 margin-bottom: 15px !important;
//                 padding: 10px !important;
//             }
            
//             .title, .dark-title {
//                 font-size: 24px !important;
//                 padding: 0 5px !important;
//             }
            
//             .content, .dark-content {
//                 padding: 30px 20px !important;
//                 border-radius: 0 0 8px 8px !important;
//             }
            
//             .greeting, .dark-greeting {
//                 font-size: 18px !important;
//                 margin-bottom: 15px !important;
//             }
            
//             .message, .dark-message {
//                 font-size: 15px !important;
//                 line-height: 1.5 !important;
//             }
            
//             .features-box, .dark-features-box {
//                 padding: 20px 15px !important;
//                 margin: 20px 0 !important;
//             }
            
//             .features-title, .dark-features-title {
//                 font-size: 16px !important;
//                 margin-bottom: 12px !important;
//             }
            
//             .features-list li, .dark-features-list li {
//                 font-size: 14px !important;
//                 margin-bottom: 8px !important;
//             }
            
//             .cta-button, .dark-cta-button {
//                 padding: 14px 32px !important;
//                 font-size: 15px !important;
//                 width: 100% !important;
//                 max-width: 280px !important;
//             }
            
//             .cta-container {
//                 margin: 25px 0 !important;
//             }
            
//             .signature, .dark-signature {
//                 margin-top: 25px !important;
//                 font-size: 15px !important;
//             }
            
//             .footer, .dark-footer {
//                 padding: 20px 15px !important;
//                 font-size: 12px !important;
//             }
            
//             .footer-link, .dark-footer-link {
//                 display: block !important;
//                 margin: 8px 0 !important;
//             }
            
//             .footer-links {
//                 margin-top: 10px !important;
//             }
//         }
        
//         @media only screen and (max-width: 480px) {
//             .header, .dark-header {
//                 padding: 20px 10px !important;
//             }
            
//             .logo, .dark-logo {
//                 width: 60px !important;
//                 height: 60px !important;
//                 margin-bottom: 12px !important;
//             }
            
//             .title, .dark-title {
//                 font-size: 22px !important;
//             }
            
//             .content, .dark-content {
//                 padding: 25px 15px !important;
//             }
            
//             .features-box, .dark-features-box {
//                 padding: 18px 12px !important;
//             }
            
//             .cta-button, .dark-cta-button {
//                 padding: 12px 28px !important;
//                 font-size: 14px !important;
//                 max-width: 250px !important;
//             }
            
//             .footer-link, .dark-footer-link {
//                 font-size: 11px !important;
//             }
//         }
        
//         @media only screen and (max-width: 320px) {
//             .title, .dark-title {
//                 font-size: 20px !important;
//             }
            
//             .greeting, .dark-greeting {
//                 font-size: 17px !important;
//             }
            
//             .cta-button, .dark-cta-button {
//                 padding: 10px 24px !important;
//                 font-size: 13px !important;
//                 max-width: 220px !important;
//             }
//         }
        
//         /* Fallback for Outlook and older email clients */
//         .fallback-font {
//             font-family: Arial, Helvetica, sans-serif;
//         }
        
//         /* Prevent auto-zoom on iOS */
//         @media screen and (max-device-width: 480px) {
//             * {
//                 -webkit-text-size-adjust: none;
//             }
//         }
//     </style>
// </head>
// <body style="margin: 0; padding: 0; background-color: #f7f9fc;" class="fallback-font">
//     <!-- Fallback for email clients that don't support media queries -->
//     <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; opacity: 0; overflow: hidden;">
//         Welcome to Messenger! We're excited to have you join our platform.
//     </div>
    
//     <!--[if mso]>
//     <style type="text/css">
//         .fallback-container {
//             width: 600px;
//             margin: 0 auto;
//             background: #ffffff;
//         }
//         .mso-hide {
//             display: none !important;
//         }
//     </style>
//     <![endif]-->
    
//     <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
//         <tr>
//             <td align="center" style="padding: 20px;">
//                 <!-- Light Mode Container -->
//                 <table class="light-mode-visible" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 600px;">
//                     <tr>
//                         <td align="center">
//                             <!-- Header -->
//                             <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
//                                 <tr>
//                                     <td class="header" align="center">
//                                         <img src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg?t=st=1741295028~exp=1741298628~hmac=0d076f885d7095f0b5bc8d34136cd6d64749455f8cb5f29a924281bafc11b96c&w=1480" 
//                                              alt="Messenger Logo" 
//                                              class="logo">
//                                         <h1 class="title">Welcome to Messenger!</h1>
//                                     </td>
//                                 </tr>
//                             </table>
                            
//                             <!-- Content -->
//                             <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="${lightColors.background}">
//                                 <tr>
//                                     <td class="content">
//                                         <p class="greeting">Hello ${name},</p>
                                        
//                                         <p class="message">
//                                             We're thrilled to welcome you to our messaging platform! Messenger connects you with friends, 
//                                             family, and colleagues in real-time with seamless communication and rich features.
//                                         </p>
                                        
//                                         <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
//                                             <tr>
//                                                 <td class="features-box">
//                                                     <p class="features-title">Get started in minutes:</p>
//                                                     <ul class="features-list">
//                                                         <li>✨ Customize your profile with photos and status</li>
//                                                         <li>👥 Connect with friends using quick search</li>
//                                                         <li>💬 Start conversations with text, voice, and video</li>
//                                                         <li>📎 Share files, photos, and documents securely</li>
//                                                         <li>🔔 Set custom notifications for important chats</li>
//                                                     </ul>
//                                                 </td>
//                                             </tr>
//                                         </table>
                                        
//                                         <p class="message">
//                                             Your account is ready to use. Click the button below to start messaging:
//                                         </p>
                                        
//                                         <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
//                                             <tr>
//                                                 <td class="cta-container">
//                                                     <a href="${clientURL}" class="cta-button">
//                                                         Launch Messenger
//                                                     </a>
//                                                 </td>
//                                             </tr>
//                                         </table>
                                        
//                                         <p class="message">
//                                             Need help getting started? Check out our 
//                                             <a href="#" class="inline-link">getting started guide</a> 
//                                             or contact our support team anytime.
//                                         </p>
                                        
//                                         <p class="message">
//                                             We're committed to providing you with the best messaging experience.
//                                         </p>
                                        
//                                         <p class="signature">
//                                             Best regards,<br>
//                                             <span class="team-name">The Messenger Team</span>
//                                         </p>
//                                     </td>
//                                 </tr>
//                             </table>
                            
//                             <!-- Footer -->
//                             <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
//                                 <tr>
//                                     <td class="footer">
//                                         <p>© 2025 Messenger. All rights reserved.</p>
//                                         <div class="footer-links">
//                                             <a href="#" class="footer-link">Privacy Policy</a>
//                                             <a href="#" class="footer-link">Terms of Service</a>
//                                             <a href="#" class="footer-link">Help Center</a>
//                                             <a href="#" class="footer-link">Unsubscribe</a>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             </table>
//                         </td>
//                     </tr>
//                 </table>
                
//                 <!-- Dark Mode Container -->
//                 <table class="dark-mode-visible" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 600px;">
//                     <tr>
//                         <td align="center">
//                             <!-- Header -->
//                             <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
//                                 <tr>
//                                     <td class="dark-header" align="center">
//                                         <img src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg?t=st=1741295028~exp=1741298628~hmac=0d076f885d7095f0b5bc8d34136cd6d64749455f8cb5f29a924281bafc11b96c&w=1480" 
//                                              alt="Messenger Logo" 
//                                              class="dark-logo">
//                                         <h1 class="dark-title">Welcome to Messenger!</h1>
//                                     </td>
//                                 </tr>
//                             </table>
                            
//                             <!-- Content -->
//                             <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="${darkColors.background}">
//                                 <tr>
//                                     <td class="dark-content">
//                                         <p class="dark-greeting">Hello ${name},</p>
                                        
//                                         <p class="dark-message">
//                                             We're thrilled to welcome you to our messaging platform! Messenger connects you with friends, 
//                                             family, and colleagues in real-time with seamless communication and rich features.
//                                         </p>
                                        
//                                         <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
//                                             <tr>
//                                                 <td class="dark-features-box">
//                                                     <p class="dark-features-title">Get started in minutes:</p>
//                                                     <ul class="features-list dark-features-list">
//                                                         <li>✨ Customize your profile with photos and status</li>
//                                                         <li>👥 Connect with friends using quick search</li>
//                                                         <li>💬 Start conversations with text, voice, and video</li>
//                                                         <li>📎 Share files, photos, and documents securely</li>
//                                                         <li>🔔 Set custom notifications for important chats</li>
//                                                     </ul>
//                                                 </td>
//                                             </tr>
//                                         </table>
                                        
//                                         <p class="dark-message">
//                                             Your account is ready to use. Click the button below to start messaging:
//                                         </p>
                                        
//                                         <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
//                                             <tr>
//                                                 <td class="cta-container">
//                                                     <a href="${clientURL}" class="dark-cta-button">
//                                                         Launch Messenger
//                                                     </a>
//                                                 </td>
//                                             </tr>
//                                         </table>
                                        
//                                         <p class="dark-message">
//                                             Need help getting started? Check out our 
//                                             <a href="#" class="dark-inline-link">getting started guide</a> 
//                                             or contact our support team anytime.
//                                         </p>
                                        
//                                         <p class="dark-message">
//                                             We're committed to providing you with the best messaging experience.
//                                         </p>
                                        
//                                         <p class="dark-signature">
//                                             Best regards,<br>
//                                             <span class="dark-team-name">The Messenger Team</span>
//                                         </p>
//                                     </td>
//                                 </tr>
//                             </table>
                            
//                             <!-- Footer -->
//                             <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
//                                 <tr>
//                                     <td class="dark-footer">
//                                         <p>© 2025 Messenger. All rights reserved.</p>
//                                         <div class="footer-links">
//                                             <a href="#" class="dark-footer-link">Privacy Policy</a>
//                                             <a href="#" class="dark-footer-link">Terms of Service</a>
//                                             <a href="#" class="dark-footer-link">Help Center</a>
//                                             <a href="#" class="dark-footer-link">Unsubscribe</a>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             </table>
//                         </td>
//                     </tr>
//                 </table>
//             </td>
//         </tr>
//     </table>
    
//     <!-- Fallback for very old email clients -->
//     <div style="display: none; max-height: 0; overflow: hidden;">
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//     </div>
// </body>
// </html>
// `;
// }