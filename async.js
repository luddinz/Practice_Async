const fs = require("fs-extra");
const today = new Date();

// async
async function main() {
  await fs.outputFile("./data/async/async.txt", "async method to create this"),
    await fs.copy("./data/async/async.txt", "./data/async/async_backup.txt"),
    await fs.appendFile(
      "./data/async/async_backup.txt",
      `\n async method create this from backup ${today}`
    );

  const Practice = await fs.readFile("./data/async/async_backup.txt", "utf-8");
  console.log(Practice);

  const Practice_async = await fs.readFile(
    "./data/async/async_backup.txt",
    "utf-8"
  );
  console.log(Practice_async);
}

main();
