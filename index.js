const  factorial=(n) =>
{ 
if (n === 0)
{return 1;}
return n * factorial(n-1);}
console.log(factorial(5));


  

const array = (array) =>{
 let sum=0;
for(let i=0;i<array.length;i++)
{sum += array[i]}
return (sum/array.length)}
console.log(array([1,2,3,4,5]))



