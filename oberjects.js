'use strict';
const restourant = {
    name: ' Classico Italiano',
    location: 'nguyen xa 13, dong hung, Thai Binh',
    categories:['Italian', 'pizzeria', 'Vegetarian','Origanic'],
    starterMenu:['Focaccia','Bruschetta','GarlicBread','Caprese Salad'],
    mainMenu:['Pizza', 'Pasta', 'Risotto'],
    openingHours:{
        thu:{
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0, //ôpen 24hours
            close:24,
        },
    },
    order:function(starterIndex,mainIndex){
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};
const {name, openHours, categories} = restourant;
console.log(name, openHours, categories);

const {name: restourantName,
     openHours: hours,
     categories: tag,
    } =restourant;
    console.log(restaurantName, hours, tags);
    const {menu = [], starterMenu: starters = []}=restourant;
    console.log(menu, starters);

