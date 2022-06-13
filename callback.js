const fs = require("fs-extra");
const today = new Date();

function main() {
  fs.outputFile(
    "./data/callback/callback.txt",
    "create this using callback",
    () => {
      fs.copy(
        "./data/callback/callback.txt",
        "./data/callback/callback_backup.txt",
        () => {
          fs.appendFile(
            "./data/callback/callback_backup.txt",
            `\n create this using callback backup ${today}`,
            () => {
              fs.readFile(
                "./data/callback/callback_backup.txt",
                "utf-8",
                (err, Practice) => {
                  console.log(Practice);
                  fs.copy("./data/callback/callback.txt", () => {
                    fs.remove("./data", () => {
                      fs.readFile(
                        "./data/callback/callback_backup.txt",
                        "utf-8",
                        (err, Practice_callback) => {
                          console.log(Practice_callback);
                        }
                      );
                    });
                  });
                }
              );
            }
          );
        }
      );
    }
  );
}

main();
