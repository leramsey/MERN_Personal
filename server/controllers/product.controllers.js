const Product = require("../models/product.models")

module.exports = {
    newProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json({ product: newProduct }))
            .then(console.log("New Product Added"))
            .catch(err => res.json({ error: err }))
    },
    allProducts: (req, res) => {
        Product.find()
            .then(products => res.json({ products: products }))
            .catch(err => res.json({ error: err }))
    },
    productById: (req, res) => {
        const id = req.params.id;
        Product.find({ _id: id })
            .then(product => res.json({ product: product }))
            .catch(err => res.json({ error: err }))
    },
    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(updatedProduct => res.json({product: updatedProduct}))
            .catch(err => res.json({ error: err }))
    }
}