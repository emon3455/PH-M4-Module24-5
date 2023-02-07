const products = [

    {id:101, name: "I Phone 14 Pro Max", prize: 75000},
    {id:102, name: "HP Laptop", prize: 85000},
    {id:103, name: "Realme M24 phone", prize: 25000},
    {id:104, name: "Lava X14 Laptop", prize: 65000},
    {id:105, name: "Lenovo M24 Pro Laptop", prize: 95000},
    {id:106, name: "I Phone 13 Pro Max", prize: 65000}
    
];

// console.log(products);

// matching products:
function matchProducts(products , searchkey){

    let match= [];
    for (const product of products) {
        if( product.name.toLowerCase().includes( searchkey.toLowerCase() ) === true){
            match.push(product);
        }
    }
    return match;

}

let res = matchProducts(products, "laptop");
console.log(res);