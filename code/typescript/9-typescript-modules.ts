// Modules the way node wants them

import eaterModule = require("./9-typescript-eater");

var eater = new eaterModule.Eater('Olli');

eater.eatThis({
    singleLine: true
});

