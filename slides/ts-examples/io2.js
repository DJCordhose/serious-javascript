/**
* Typescript-based variant of Olli Zeigermann's Game Engine
* Nils Hartmann (nils@nilshartmann.net)
*/
/// <reference path="../../game-ts/ext/waa.d.ts" />
var eighties;
(function (eighties) {
    (function (lib) {
        (function (io) {
            // Public object
            io.canvas;

            var SoundManager = (function () {
                function SoundManager(loudness) {
                    this.loudness = loudness;
                    this.audioContext = SoundManager.createContext();
                }
                // Public Method
                SoundManager.prototype.play = function () {
                };

                // Static
                SoundManager.createContext = function () {
                    return new AudioContext();
                };
                return SoundManager;
            })();
            io.SoundManager = SoundManager;

            // Instantiate
            var soundManager = new SoundManager(100);

            // Change loudness
            soundManager.loudness = 200;

            // Call a method
            soundManager.play();

            // Access to private member forbidden
            soundManager.audioContext = null;

            // Internal class
            var KeyboardObserver = (function () {
                function KeyboardObserver() {
                }
                return KeyboardObserver;
            })();

            // Internal object
            var keyboardObserver = new KeyboardObserver();
        })(lib.io || (lib.io = {}));
        var io = lib.io;
    })(eighties.lib || (eighties.lib = {}));
    var lib = eighties.lib;
})(eighties || (eighties = {}));
//# sourceMappingURL=io2.js.map
