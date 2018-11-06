const path = require('path');/**引用path模块 */
const merge = require('webpack-merge');
const config = require('./webpack.base.js');

const clientConfig = {
	mode: 'development',/** 打包开发环境代码 */
	entry: './src/client/index.js',	/* 入口 */
	output: {					/* 出口 */
		filename: 'index.js',	/* 出口文件名 */
		path: path.resolve(__dirname, 'public')/** path模块 */
	}
}

module.exports = merge(config,clientConfig);