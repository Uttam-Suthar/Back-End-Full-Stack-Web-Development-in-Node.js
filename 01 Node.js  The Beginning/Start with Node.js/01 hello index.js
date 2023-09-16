console.log('Hello world!')
function add(a,b){
    return a+b
}
console.log(add(2,3))

console.log(process.argv);

var agrs= process.argv.slice(2);
console.log('Adding the number: ',add(parseInt(agrs[0]),parseInt(agrs[1])));