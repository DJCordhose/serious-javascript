// You can check for the right type in JavaScript dynamically

function eatThis(conf) {
    if (typeof conf.name !== 'string') {
        throw new Error("Config object needs name of type string");
    }
    if (typeof conf.singleLine !== 'boolean') {
        throw new Error("Config object needs singleLine of type boolean");
    }
    console.log(conf.name);
    if (conf.singleLine) {
        console.log('----');
    }

}

eatThis({
    name: 'Olli',
    singleLine: true
});

eatThis({
   name: 'Olli',
    singleLine: 10
});
