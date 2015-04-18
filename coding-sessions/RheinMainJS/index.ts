/*
 * /usr/local/bin/iojs --use_strict --harmony --es_staging --harmony_modules --harmony_arrow_functions --harmony_classes --harmony_object_literals jax2015.js
 *
 * let, const
 * class, extends
 * types and fields
 * import
 * for..of
 * destructuring
 * Template Strings / String interpolation
 *
 * Links for versions
 * - http://blogs.msdn.com/b/typescript/archive/2014/11/12/announcing-typescript-1-3.aspx
 *   - protected
 * - http://blogs.msdn.com/b/typescript/archive/2015/01/16/announcing-typescript-1-4.aspx
 *   - union types
 *   - type aliases
 *   - const enums
 *   - let/const
 *   - template strings
 * - http://blogs.msdn.com/b/typescript/archive/2015/03/27/announcing-typescript-1-5-alpha.aspx
 *   - import
 *   - for..of
 *   - destructuring
 *   - ES7 Decorators
 */
'use strict';

import Programmer from './Programmer';

const programmer = new Programmer('Olli', 'JavaScript');
const programmers = [programmer, new Programmer('Oma', 'F#')];

for (let p of programmers) {
    let [name, language] = p.code();
    let message = `${name} codes in ${language}`;
    console.log(message);
}
