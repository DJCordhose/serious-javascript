// JavaScript does not have declared types

function eatThis(conf) {
    console.log(conf.name);
    if (conf.singleLine) {
        console.log('----');
    }
}

eatThis({
   name: 'Olli',
   singleLine: true
});
