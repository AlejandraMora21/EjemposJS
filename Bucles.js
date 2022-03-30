
/* MAP 
   un arreglo de objetos
   [1,m,3,4,5]
   map 
*/
/*
    transforma cada numero multiplicado por 2
    [1,2,3,4,5]
*/
//[1,2,3,4,5].map(n => console.log(n*2));

// mas operaciones de dos lineas
/*[2,3,5,74,6,8,10].map((valor,index)=>{
    if((valor %2)=== 1){
        console.log(valor)
    }

});
*/
/********************************************************** */
/*Filter
*/
/*var res = [1,2,4,5,6,7,8,9,22,25,47].filter (valor=> valor%2 === 1)
console.log(res);*/

/*var res = [1,2,4,5,6,7,8,9,22,25,47].filter (n=>n<10);
console.log(res); */
/*
var res = [1,2,4,5,6,7,8,9,22,25,47].filter (n=>n !== 4 && n!== 5 && n!==6);
console.log(res);
*/
/* Find */
// encuentra el valor que buscas y devuelve ese valor que buscas

/*
var res = [1,2,4,5,6,7,8,9,22,25,47].find (n=>n != 5);
console.log(res);

var res = [1,2,4,5,6,7,8,9,22,25,47].findIndex(n=>n != 5);
console.log(res);
*/
var i = 0;
/*while(i < 10){
    console.log('Hola Mundo');
    i++;
    
}*/
/*for(i; i<10; i++){
    console.log('Hola Mundo');
}*/
[1,2,4,5,6,7,8,9,22,25,47].forEach((valor,index)=>{
    console.log(valor)

})
2
let  res =['1','',''].fill('2');
console.log(res);



