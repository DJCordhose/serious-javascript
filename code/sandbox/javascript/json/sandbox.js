"use strict";

var json = '{ \
    "principle": 199990.00,\
    "total": 503409.60,\
    "payments": 360,\
    "monthly": 1398.36\
}';
console.log(json);

var obj = JSON.parse(json);
console.log(obj);

var jsonString = JSON.stringify(obj);
console.log(jsonString);

