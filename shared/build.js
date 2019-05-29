const fs = require("fs");
const execSync = require("child_process").execSync;
const path = require("path");

const exec = (command, extraEnv) =>
    execSync(command, {
        stdio: "inherit",
        env: Object.assign({}, process.env, extraEnv)
    });

let tsc = `${__dirname}/../node_modules/.bin/tsc`;

console.log("\nBuilding ES modules ...");
exec(`${tsc}`);

console.log("\nCopy css file ...");
fs.copyFileSync(path.join(process.cwd(), 'src/styles.css'), path.join(process.cwd(), 'lib/styles.css'));
