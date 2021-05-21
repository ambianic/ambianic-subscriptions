require("dotenv").config()
const newman = require("newman");

console.log(`Running tests against : ${process.env.ENDPOINT}`)

newman.run(
  {
    collection: require("./tests/ambianic-functions-collection.postman_collection.json"),
    reporters: "cli",
    globalVar: [{ key: "FUNCTION_ENDPOINT", value: process.env.ENDPOINT || "https://localhost:5050"}],
  },
  function (err) {
    if (err) {
      throw err;
    }
  }
);
