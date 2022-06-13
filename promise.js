const fs = require("fs-extra");
const today = new Date();

function main() {
  fs.outputFile("./data/promise/promise.txt", "promise method create this yooo")
    .then(() => {
      return fs.copy(
        "./data/promise/promise.txt",
        "./data/promise/promise_backup.txt"
      );
    })
    .then(() => {
      return fs.appendFile(
        "./data/promise/promise_backup.txt",
        `\np romise method create this at ${today}`
      );
    })
    .then(() => {
      return fs.readFile("./data/promise/promise_backup.txt", "utf-8");
    })
    .then((Practice) => {
      return console.log(Practice);
    })
    .then(() => {
      return fs.copy("./data/promise/promise.txt");
    })
    .then(() => {
      return fs.remove("./data");
    })
    .then(() => {
      return fs.readFile("./data/promise/promise_backup.txt", "utf-8");
    })
    .then((Practice_promise) => {
      return console.log(Practice_promise);
    });
}

main();
