import buble from "rollup-plugin-buble";

export default {
  entry: "src/main.js",
  dest: "output/main.js",
  format: "es",
  plugins: [
    buble()
  ]
};