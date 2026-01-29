// convert-all.js
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const inputDir = "public/Inn";
const outputDir = "public/out";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const files = fs.readdirSync(inputDir).filter((file) => file.endsWith(".glb"));

files.forEach((file) => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file.replace(".glb", ".glb"));
  const command = `npx gltf-transform optimize "${inputPath}" "${outputPath}" --compress draco`;
  console.log("Compressing:", file);
  execSync(command, { stdio: "inherit" });
});
