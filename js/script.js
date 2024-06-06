import { cardComponent } from "../components/cardComponent.js"
let renderArea = document.querySelector("#card-area");
const BASE_URL = "http://127.0.0.1:5500/data/products.json";

// products.map((product) => {
//     renderArea.innerHTML += cardComponent(product);
// })
fetch(BASE_URL).then((res) => res.json())
.then((data) => {
    data.map((product)=> {
        renderArea.innerHTML += cardComponent(product)
    })
});