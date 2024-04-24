const { kafka } = require("./client");

CreateTopic = async function () {

  const admin = kafka.admin();
  await admin.connect();
  console.log("Admin connected");
  await admin.createTopics({
    topics: [
        {
        topic: "test",
        numPartitions: 2,
      },
    ],
   });
   console.log("Topic Created Success [test]");
   await admin.disconnect();
}

exports