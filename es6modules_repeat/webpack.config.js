module.exports = {
  devtool: "source-map", // для дебага
  // watch: true,
  entry: {
    // точка входа
    filename: "./app.js",
  },
  output: {
    //точка выхода - после того как прошла сборка
    filename: "bundle.js",
  },
};
// module: {
//   rules: [
//     {
//       test: /\.m?js$/,
//       exclude: /node_modules/,
//       use: {
//         loader: 'babel-loader',
//         options: {
//           presets: [
//             ['@babel/preset-env', { targets: "defaults" }]
//           ],
//           plugins: ['@babel/plugin-proposal-class-properties']
//         }
//       }
//     }
//   ]
// },