const nodemailer = require("nodemailer");
const { emailBody, emailConfig } = require("../utils/mail.util");

module.exports = {
  workerName: "mail_job",
  workerHandle: async () => {
    let transporter = nodemailer.createTransport(emailConfig);
    await transporter.sendMail(emailBody);
  },
};
