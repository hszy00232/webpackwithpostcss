var autoprefixer = require('autoprefixer');
var cssnext = require('postcss-cssnext');
var precss = require('precss');
var queries = require('postcss-quantity-queries');
var shorter = require('postcss-short');
// 处理器数组
var processorsArray = [
	autoprefixer({ browsers: ['last 2 versions'] }),
	cssnext,
	precss,
	queries,
	shorter
]
module.exports = {
 entry : "./entry.js",
 output:{
   path:__dirname,
   filename:"bundle.js"
 },
 module:{
  loaders:[
	 {
		test:/\.css$/,
		loader:"style!css!postcss-loader"
	 }
  ]
 },
 postcss:function(){
 	return processorsArray;
 },
}
