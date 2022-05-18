const ProductController = require("../controllers/product.controller")

module.exports = (app) =>{
    app.get("/api/test", ProductController.testAPI)
    app.get("/api/products", ProductController.allProducts)
    app.post("/api/products", ProductController.createProduct)
}