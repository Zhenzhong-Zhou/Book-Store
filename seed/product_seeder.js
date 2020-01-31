const Products = require("../models/products");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Book_Store", {useNewUrlParser: true});

const products = [
    new Products({
        imagePath: "/images/iPhone11_Pro.jpeg",
        title: "iPhone 11 Pro",
        description: "Awesome iPhone!!!!",
        price: 1200,
    }),
    new Products({
        imagePath: "/images/iPhone8.jpeg",
        title: "iPhone 8",
        description: "Awesome iPhone!!!!",
        price: 600
    }),
    new Products({
        imagePath: "/images/iPhone11.jpeg",
        title: "iPhone 11",
        description: "Awesome iPhone!!!!",
        price: 999,
    })
];

let done = 0;
for (let i = 0; i < products.length; i++) {
    products[i].save((err, result) => {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
