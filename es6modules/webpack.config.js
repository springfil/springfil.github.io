module.exports = {
  devtool: "source-map", // для дебага
  watch: true,
  entry: {
    // точка входа
    filename: "./app.js",
  },
  output: {
    //точка выхода - после того как прошла сборка
    filename: "bundle.js",
  },
};
