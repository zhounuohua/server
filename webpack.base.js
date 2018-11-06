module.exports = {
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