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
					'dev/scripts/*.js',
					'!dev/scripts/script.js',
					'!dev/scripts/script.min.js'
				],
				dest: 'dev/scripts/script.js'
			}
		},
		uglify: {
			dist: {
				options: {
					banner: '// <%= grunt.template.today("dd.mm.yyyy") %> by Korbinian Polk\n',
					sourceMap: true 
				},
				src: '<%= concat.dist.dest %>',
				dest: 'dev/scripts/script.min.js'
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'dev/styles/style.css': 'dev/styles/style.scss',

				}
			}
		},
		autoprefixer: {
			dist: {
				src: 'dev/styles/style.css'
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

	grunt.registerTask('default', ['watch']);
};