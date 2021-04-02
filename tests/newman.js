require("dotenv").config()
const newman = require("newman");

newman.run(
  {
    collection: require("./postman/ambianic-functions-collection.postman_collection.json"),
    reporters: "cli",
    globalVar: [{ key: "FUNCTION_ENDPOINT", value: process.env.ENDPOINT || "https://localhost:5050"}],
  },
  function (err) {
    if (err) {
      throw err;
    }
  }
);
