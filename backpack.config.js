const path = require('path');

module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = [
      './src/index.ts'
    ]

    config.resolve = {
      extensions: [".ts", ".js", ".json"]
    };

    config.module.rules.push(
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    );

    // config.output = {
    //   path: path.resolve(__dirname, 'dist')
    // }

    return config
  }
}