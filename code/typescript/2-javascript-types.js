// JavaScript does have dynamic types

function eatThis(conf) {
    console.log("Type of name: " +
        typeof conf.name);
    console.log("Type of singleLine: " +
        typeof conf.singleLine);
}

eatThis({
   name: 'Olli',
    singleLine: true
});
