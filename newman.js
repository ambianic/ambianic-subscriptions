require("dotenv").config()
const newman = require("newman");

newman.run(
  {
    collection: require("./tests/ambianic-functions-collection.postman_collection.json"),
    reporters: "cli",
    globalVar: [{ key: "FUNCTION_URL", value: process.env.MOCK_ENDPOINT || "http://127.0.0.1:4010"}],
  },
  function (err) {
    if (err) {
      throw err;
    }
  }
);