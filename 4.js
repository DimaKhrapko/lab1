const array = [false, 'example', 42, -17, {}, true, 0, 'JavaScript', null, "", undefined];
const obj = {};
const sort = (array)=>{
for (const element of array){
    const type = typeof element;
    if(isNaN(obj[type])) obj[type] = 0
    obj[type]++
}
    return array
}
sort(array)
console.dir(obj)