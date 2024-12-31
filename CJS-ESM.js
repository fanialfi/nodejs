// commanJS vs ES modules
// nodejs secara default menggunakan  commonjs sebagai module system default
// untuk menggunakan ES module, perlu mengganti type dari package.json dari commonjs ke module

import { spawn } from "node:child_process";

// eksekusi perintah ping
const ping = spawn("ping", ["www.google.com"]);

// event handler untuk handle data dari process
ping.stdout.on("data", (data) => {
  console.log(`stdout : ${data}`);
});

// event handler untuk handle data error dari process
ping.stderr.on("data", (data) => {
  console.error(`stderr : ${data}`);
});

// event ketika process selesai
ping.on("close", (code) => {
  console.log(`prosess selesai dengan code : ${code}`);
});
