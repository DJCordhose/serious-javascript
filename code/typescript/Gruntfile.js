module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        ts: {
            options: {                    // use to override the default options, See : http://gruntjs.com/configuring-tasks#options
                target: 'es5',            // es3 (default) / or es5
                module: 'commonjs',       // amd , commonjs (default)
                sourcemap: true,          // true  (default) | false
                declaration: true,       // true | false  (default)
                nolib: false,             // true | false (default)
                comments: true           // true | false (default)
            },
            dev: {                        // a particular target
                src: ["7-typescript-type-inference.ts"],               // The source typescript files, http://gruntjs.com/configuring-tasks#files
//                watch: 'app',                       // If specified, watches this directory for changes, and re-runs the current target
                reference: 'dist/reference.ts',      // If specified, generate this file that you can use for your reference management
                out: 'dist/out.js',                  // If specified, generate an out.js file which is the merged js file
                options: {                          // use to override the default options, http://gruntjs.com/configuring-tasks#options
                    module: 'commonjs'
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts")
    grunt.registerTask("default", ["ts:dev"]);
};