const path = require('path');/**引用path模块 */
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.base.js');

const serverConfig = {
	target: 'node',
	mode: 'development',/** 打包开发环境代码 */
	entry: './src/server/index.js',	/* 入口 */
	output: {					/* 出口 */
		filename: 'bundle.js',	/* 出口文件名 */
		path: path.resolve(__dirname, 'build')/** path模块 */
	},
	externals: [nodeExternals()]
}

module.exports = merge(config,serverConfig)