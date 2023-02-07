// basic summation (1 - 5)

function sum(i){
    if(i==1){
        return i;
    }

    return i + sum(i-1);
}

let res =  sum(5);

console.log(res);