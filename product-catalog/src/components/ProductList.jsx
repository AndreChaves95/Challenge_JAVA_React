import { useEffect, useState } from 'react';
import API from '../services/api';
import ProductForm from './ProductForm';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [updateProduct, setUpdateProduct] = useState(null);

  const fetchProducts = async () => {
    const res = await API.get('/products');
    setProducts(res.data);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await API.delete(`/products/${productId}`);
      await fetchProducts();
    } catch (error) {
      console.error('Delete error:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductForm onSaved={fetchProducts} updateProduct={updateProduct} />
      <ul className="list-group mt-4">
        {products.map(product => (
          <li key={product.productId} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>Product: </strong> {product.name}
              <br />
              <strong>Price: </strong> {product.price}€
              <br />
              {product.description}
            </div>
            <div>
              <button onClick={() => setUpdateProduct(product)} className="btn btn-sm btn-info me-2">Update Product</button>
              <button onClick={() => handleDeleteProduct(product.productId)} className="btn btn-sm btn-danger">Delete Product</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
