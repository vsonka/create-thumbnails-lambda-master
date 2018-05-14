var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
	lambda_invoke: {
    	default: {
        	options: {
            	file_name: 'CreateThumbnail.js'
        	}
    	}
	},
	lambda_deploy: {
    	default: {
    		arn: 'arn:aws:lambda:us-east-1:845068533700:function:CreateThumbnail'
    	}
    },
	lambda_package: {
    	default: {
    		
    	}
	}
});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy'])
