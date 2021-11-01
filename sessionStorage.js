
const obj1={
    value: 1,
    names: "Daniel"
};
sessionStorage.setItem('key', JSON.stringify(obj1));


let data=sessionStorage.getItem('key');
console.log(JSON.parse(data));
