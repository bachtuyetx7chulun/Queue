let emailConfig = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "truongtrung.hieu0812@gmail.com",
    pass: "ssrthplvjaywmuet",
  },
};

let emailBody = {
  from: '"Fred Foo 👻" <foo@example.com>',
  to: "hoaixenhgai@gmail.com",
  subject: "Hello ✔", // Subject line
  html: "<b>Hello world?</b>", // html body
};

module.exports = {
  emailBody,
  emailConfig,
};
