const { kafka } = require("./client");
const {createTopic} = require("./client")
async function ListTopics() {
  const admin = kafka.admin();
  await admin.connect();
  console.log("Admin connected");
  console.log("Topics are:");
  await admin.listTopics();
  await admin.disconnect();
  console.log("Admin disconnected");
}

async function ProduceMessage() {
  const producer = kafka.producer({
    allowAutoTopicCreation: false,
    transactionTimeout: 30000,
  });

  await producer.connect();
  await producer.send({
    topic: "test",
    messages: [
      { key: "name", value: "shivam" },
      { key: "name", value: "rathi" },
    ],
  });
  await producer.disconnect();
}
createTopic()
ListTopics();
ProduceMessage();
