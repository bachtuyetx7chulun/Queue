const Queue = require("bull");
const userQueue = new Queue("userJob");
userQueue.process((job) => {
  setTimeout(() => {
    console.log(job.data);
  }, 5000);
});

module.exports = {
  userQueue,
};
