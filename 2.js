function inc (obj){
return obj.n++;
}
const obj = {
    n: 25,
    text: "lorem",
}
inc(obj);
console.dir(obj);
