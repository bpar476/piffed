import * as webpack from 'webpack'
import * as path from 'path'

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  externals: {
    react: 'react',
    'styled-components': 'styled-components',
    'next/link': 'next/link',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'piffed.js',
    library: '@bpar476/piffed',
    libraryTarget: 'amd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /.yarn/,
      },
      {
        test: /\.(png|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}

export default config
