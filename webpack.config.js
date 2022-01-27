const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  output: {
    /*
  	  Put the built files in `dist`. Note that when running
      `npm run dev`/`webpack serve`, it doesnt do this -- it puts
      the built files into a hidden place inside node_modules/webpack-dev-server
	  */
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    /*
  	  This is just so that the <script> tag of the bundled code
  	  gets inserted into the index.html file
	  */
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  devServer: {
    static: {
      /*
        So that we can reference files like css and images from
        the index.html.
      */
      directory: path.join(__dirname, "public"),
    },
  },
  mode: "development",
};
