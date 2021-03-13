const jobs = require("../Jobs/index");
const redisConfig = require("../configs/redis");
const Queue = require("bull");
console.log(redisConfig);
const userQueue = new Queue("userJob", "redis://127.0.0.1:6379");

userQueue.process(async (job) => {
  const delay = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Delay ...`);
        resolve(true);
      }, 10000);
    });
  };

  // await delay();
  console.log(job.id);
  console.log(job.data);
});

userQueue.on("failed", (job, err) => {
  console.log(job.data);
  console.log(err);
});

module.exports = {
  userQueue,
};
