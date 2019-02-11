module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'assets/css/style.css' : 'assets/sass/style.scss'
				}
			}
		},
		cssmin: {
			minify: {
				src: 'assets/css/style.css',
				dest: 'dist/style.min.css'
			}
		},
		uglify : {
			options : {
				banner : "/*! script.min.js file */\n"
			},
			build : {
				src : ['assets/js/script.js'],
				dest : 'dist/script.min.js'
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'dist/style.min.css',
						'*.html'
					]
				},
				options: {
					watchTask: true,
					server: './'
				}
			}
		},
		watch: {
			css: {
				files: 'assets/sass/style.scss',
				tasks: ['sass','cssmin']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.registerTask('default',['browserSync','uglify','watch']);
}