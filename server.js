const sendEmail = require("./src/utils/mail.util");
const { userQueue } = require("./src/libs/bull");
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  userQueue.add({ user: "1232" });
  res.status(200).json({
    code: 200,
  });
});

app.get("/1", (req, res, next) => {
    userQueue.add({ user: "1232" });
    res.status(200).json({
      code: 200,
      message: "ahihi"
    });
  });

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
