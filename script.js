"use strict";

const murlock = {
    damage: 3,
    health: 2,
    fastDamage: function(){
        console.log("наносит 3 единицы урона");
    }
};

for (let key in murlock){
    console.log(`Ключ ${key} содержит ${murlock[key]}`);
}

murlock.fastDamage();
