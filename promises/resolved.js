const resolvedPromise = Promise.resolve(10)
console.log(resolvedPromise instanceof Promise)
const resolvedPromise2 = promise.then((x) => x * 2)
console.log(resolvedPromise2 instanceof Promise)
