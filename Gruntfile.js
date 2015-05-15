module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-sync');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.initConfig({
		concat: {
			dist: {
				src: [
					'dev/scripts/*.js'
				],
				dest: 'build/scripts/script.js'
			}
		},
		uglify: {
			dist: {
				options: {
					banner: '// <%= grunt.template.today("dd.mm.yyyy") %> by Korbinian Polk\n',
					sourceMap: true 
				},
				src: '<%= concat.dist.dest %>',
				dest: 'build/scripts/script.min.js'
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'build/styles/style.css': 'dev/styles/style.scss',

				}
			}
		},
		autoprefixer: {
			dist: {
				src: 'build/styles/style.css'
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src : 'build/styles/style.css'
				},
				options: {
					proxy: "localhost"
				}
			}
		},
		sync: {
			dist: {
				files: [{
					cwd: 'dev',
					src: [
						'*.html', 
						'images/**',
						'scripts/vendor/*.js'
					],
					dest: 'build',

				}]
			}
		},
		watch: {
			styles: {
				files: [
					'dev/styles/*.scss',
					'dev/styles/global/*.scss',
					'dev/styles/modules/*.scss',
					'dev/styles/pages/*.scss',
					'dev/styles/sections/*.scss',
					'dev/styles/vendor/*.scss',
				],
				tasks: ['sass', 'autoprefixer']
			},
			scripts: {
				files: ['dev/scripts/*.js'],
				tasks: ['concat', 'uglify']
			},
			sync: {
				files: ['dev/*.html'],
				tasks: ['sync']
			}
		}
	});

	grunt.registerTask('default', ['watch', 'browserSync']);
};