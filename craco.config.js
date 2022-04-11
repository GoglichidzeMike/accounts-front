const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@views': path.resolve(__dirname, 'src/views'),
		},
	},
};
