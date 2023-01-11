'use strict';
const restourant = {
    name: ' Classico Italiano',
    location: 'nguyen xa 13, dong hung, Thai Binh',
    categories:['Italian', 'pizzeria', 'Vegetarian','Origanic'],
    starterMenu:['Focaccia','Bruschetta','GarlicBread','Caprese Salad'],
    mainMenu:['Pizza', 'Pasta', 'Risotto'],
    order:function(starterIndex,mainIndex){
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};
const arr= [2,3,4];
const a= arr[0];
const b=arr[1];
const c= arr[2];

const [x,y,z] = arr;
console.log(x,y,z);
console.loh(arr);

let [main, , secondary] = restourant.categories;
console.log(main,secondary);

/*const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);*/

[main, secondary] = [secondary,main];
console.log(main,secondary);
//nhan 2 gia tri tra ve 1 ham

 const [starter, mainCourse ]= restourant.order(2, 0);
 console.log(starter,mainCourse);

 //cấu trúc lồng nhau
 const nested = [2, 4, [5, 6]];
 //const[i, , j] = nested;
 //console.log(i, j);
 const[i, , [j,k]] = nested;
 console.log(i, j, k);
 //đây là các giá trị mặc định 
 const[p, q,r] =[8, 9];
 console.log(p, q, r);
 


