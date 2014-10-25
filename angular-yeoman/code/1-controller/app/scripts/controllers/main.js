/* global calculateMortgage */

'use strict';

(function () {
    var MainCtrl = function () {
        // not really needed
        this.price = null;
        this.down = null;
        this.interest = null;
        this.term = null;
    };

    MainCtrl.prototype.calc = function () {
        this.result = calculateMortgage(this.price,
            this.down, this.interest, this.term);
    };

    angular.module('baseApp')
        .controller('MainCtrl', MainCtrl);

})();
