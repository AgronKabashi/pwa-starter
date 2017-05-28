import buble from "rollup-plugin-buble";

export default {
  entry: "src/service-worker.js",
  dest: "output/service-worker.js",
  format: "es",
  context: "this",
  plugins: [
    buble()
  ]
};