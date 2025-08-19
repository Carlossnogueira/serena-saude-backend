import nodemailer from "nodemailer";
import { env } from "../lib/envconfig.js";

/*
  interface EmailOptions {
    to: string;
    subject: string;
    html: string;
  }
*/

 class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: false,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    });
  }

  async sendVerificationEmail(email: string, token: string) {
    try {
      const html = `<!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
          <title>Verificação de E-mail - Serena Saúde</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background-color: #f4f6f8;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background-color: #ffffff;
              border-radius: 10px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1);
              padding: 30px;
              text-align: center;
            }
            h1 {
              color: #2a9d8f;
            }
            p {
              font-size: 16px;
              color: #333333;
            }
            .code {
              display: inline-block;
              margin: 20px 0;
              padding: 15px 25px;
              font-size: 32px;
              font-weight: bold;
              color: #ffffff;
              background-color: #2a9d8f;
              border-radius: 8px;
              letter-spacing: 5px;
            }
            .footer {
              font-size: 12px;
              color: #888888;
              margin-top: 30px;
            }
            a.button {
              display: inline-block;
              margin-top: 20px;
              padding: 12px 25px;
              background-color: #264653;
              color: #ffffff;
              text-decoration: none;
              border-radius: 6px;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Serena Saúde</h1>
            <p>Olá! Para confirmar seu cadastro, use o código de verificação abaixo:</p>
            <div class="code">${token}</div>
            <p>Insira este código no app ou site para ativar sua conta.</p>
            <a href="#" class="button">Acessar Serena Saúde</a>
            <div class="footer">
              Se você não solicitou esse e-mail, ignore esta mensagem.
            </div>
          </div>
        </body>
        </html>
        `;

      await this.transporter.sendMail({
        to: email,
        subject: "Bem vindo a Serena Saúde! Confira o código de verificação.",
        html,
      });
    } catch (error) {
      console.log("🔴 Error to send email");
    }
  }
}

export default  EmailService 
