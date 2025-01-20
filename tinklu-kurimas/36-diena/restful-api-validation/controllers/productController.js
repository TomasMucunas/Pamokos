const getProducts = (req, res) => {
    const { price, category } = req.query;
  
    // Simulated products (replace with DB or other data source)
    const products = [
      { id: 1, name: 'Product A', price: 10.99, category: 'electronics' },
      { id: 2, name: 'Product B', price: 19.99, category: 'books' },
    ];
  
    let filteredProducts = products;
  
    if (price) {
      filteredProducts = filteredProducts.filter((product) => product.price <= parseFloat(price));
    }
    if (category) {
      filteredProducts = filteredProducts.filter((product) => product.category === category);
    }
  
    res.status(200).json({ products: filteredProducts });
  };
  
  module.exports = { getProducts };
  