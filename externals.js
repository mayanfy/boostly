const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const merge = require('webpack-merge');

const externals = merge([
    {
        plugins: [
        	new HtmlWebpackExternalsPlugin({
        		externals: [
        			{
        				module: 'bootstrap',
        				entry: {
        					path: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
        					type: 'js'
        				}
        			}
        		]
        	}),
        	new HtmlWebpackExternalsPlugin({
	            externals: [
	                {
	                    module: 'popper',
	                    entry: {
	                        path: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
	                        attributes: {
	                            integrity: 'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q',
	                            crossorigin: 'anonymous'
	                        }
	                    },
	                    global: 'Popper',
	                },
	            ],
        	}),
        	new HtmlWebpackExternalsPlugin({
	            externals: [
	                {
	                    module: 'jquery',
	                    entry: {
	                        path: 'https://code.jquery.com/jquery-3.3.1.min.js',
	                        attributes: {
	                            integrity: 'sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=',
	                            crossorigin: 'anonymous'
	                        }
	                    },
	                    global: 'jQuery',
	                },
	            ],
        	})
        ]
    }
]);

module.exports = externals;