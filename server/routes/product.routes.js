const ProductController = require("../controllers/product.controllers");

module.exports = (app) => {
    app.post("/api/products/new", ProductController.newProduct);
    app.get("/api/products/all", ProductController.allProducts);
    app.get("/api/products/:id", ProductController.productById);
    app.put("/api/products/update/:id", ProductController.updateProduct);
}