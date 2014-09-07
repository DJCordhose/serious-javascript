// run using jshint --verbose -c code/jshint/.jshintrc code/jshint/buggy.js
/*global locallyDeclaredAsGlobalRW: true, locallyDeclaredAsGlobalR: false */

function olli() {
    console.log("aha")
    declaredAsGlobal();
    notDeclaredAsGlobal();
    locallyDeclaredAsGlobalRW = 10;
    locallyDeclaredAsGlobalR = 10;
    10 == "10";
    /* jshint -W116 */
    if (true) console.log('Switched off curly by using code W116');
}
