require("dotenv").config()
const newman = require("newman");

newman.run(
  {
    collection: require("./tests/ambianic-functions-collection.postman_collection.json"),
    reporters: "cli",
    globalVar: [{ key: "url", value: process.env.MOCK_ENDPOINT || "https://33743be6-3197-4dd4-8471-50b3640320c9.mock.pstmn.io"}],
  },
  function (err) {
    if (err) {
      throw err;
    }
  }
);