const path = require('path');/**引用path模块 */
const nodeExternals = require('webpack-node-externals');

module.exports = {
	target: 'node',
	mode: 'development',/** 打包开发环境代码 */
	entry: './src/index.js',	/* 入口 */
	output: {					/* 出口 */
		filename: 'bundle.js',	/* 出口文件名 */
		path: path.resolve(__dirname, 'build')/** path模块 */
	},
	externals: [nodeExternals()],
	module: {					/** 打包规则 */
		rules: [{
			test: /\.js?$/,		/** 检测文件类型 */
			loader: 'babel-loader', /** 语法编译器 */
			exclude: /node_modules/,/** 不编译文件夹中的文件 */
			options: {				/** 配置而外配置项 */	
				presets: ['react', 'stage-0', ['env', {/**安装依赖需要， 设置编译规则 */
					targets: {
						browsers: ['last 2 versions']/*兼容主流浏览器最新的两个版本*  */
					}
				}]]
			}
		}]
	}
}