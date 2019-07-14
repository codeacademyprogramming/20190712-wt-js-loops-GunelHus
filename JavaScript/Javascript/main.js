"use strict"

// Task 2
function minus(x, y) {
    if (x < 0 && y < 0) {
        x == -x; y == -y;
    }

    else if (x < 0 && y > 0 || x > 0 && y < 0) {
        x = x + 0.5; y = y + 0.5;
    }
    else {
        if (!((x > 0.5 && x < 2.0) && (y > 0.5 && y < 0.5))) {
            x = x / 10; y = y / 10;
        }

    }
    alert (x + " "+ y)
}
minus ( 0.1, 3);
minus (-5, 3);
minus (5, -3);

// Task 3

function calculate (num1, num2){
    let total = 0; 
    if(num2 > num1){
       while(num1 <= num2){
           if(num1%2==0){
                total = total + num1;
           }
           num1++;
       }
       return total;
   }else {
       return num1 + " boyukdur " + num2 + " daxil edilmish ededleri deyishin";
   }
}
let netice1 = calculate (num1 = 5, num2 = 10);
let netice2 = calculate (num1 = 15, num2 = 10);
console.log  ("netice1: " + netice1);
console.log ("netice2: " + netice2);
