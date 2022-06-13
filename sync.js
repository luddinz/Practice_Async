const fs = require("fs-extra");
const today = new Date();

function main() {
  fs.outputFileSync("./data/sync/sync.txt", "sync create this");
  fs.copySync("./data/sync/sync.txt", "./data/sync/sync_backup.txt");
  fs.appendFileSync(
    "./data/sync/sync_backup.txt",
    `\n manually create backup sync file ${today}`
  );

  const Practice = fs.readFileSync("./data/sync/sync_backup.txt", "utf-8");
  console.log(Practice);

  fs.copySync("./data/sync/sync.txt");

  const Practice_sync = fs.readFileSync("./data/sync/sync_backup.txt", "utf-8");
  console.log(Practice_sync);
}

main();
