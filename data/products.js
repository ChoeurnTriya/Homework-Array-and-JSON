// Assignment operator
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a++);
console.log(--b);
console.log(b**3);

// nullish coalescing handle null or undifined
let var1 = null;
var1 ??= "Default value";
console.log(var1);



// Falsy value: false, 0, "", null, undifined, NaN
if (false) {
    console.log("show something");
}

// handle falsy value
let var2 = 0;
let result = var2 || "hanle falsy value";
console.log(result);


// object
// normal access object property
let product = {
    name: "iphone",
    price: 1000,
    details: {
        model: "xs",
        color: "gold"
    }
}
console.log(product.details.color);

// object
// destructuring
let product2 = {
    name: "samsung",
    price: 900,
    details: {
        model: "s20",
        color: "black"
    }
}
let {name: product_name, price, details: {model, color}} = product2;
console.log(product_name, price, model, color);