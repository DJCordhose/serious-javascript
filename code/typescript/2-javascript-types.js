// JavaScript does have dynamic types

function eatThis(conf) {
    console.log(typeof conf.name);
    // => string
    console.log(typeof conf.singleLine);
    // => boolean
}

eatThis({
    name: 'Olli',
    singleLine: true
});
