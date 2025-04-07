import { useEffect, useState } from 'react';
import API from '../services/api';

export default function ProductForm({ onSaved, updateProduct }) {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    if (updateProduct) {
      setProduct(updateProduct);
    } else {
      setProduct({ name: '', price: '', description: '' });
    }
    setError('');
  }, [updateProduct]);

  const handleUpdateProduct = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    if (!product.name.trim()) {
      setError('Product name is required!');
      return;
    }

    if (!product.price) {
      setError('Product price is required!');
      return;
    }

    try {
      if (product.id) {
        await API.put(`/products/${product.id}`, product);
      } else {
        await API.post('/products', product);
      }

      setProduct({ name: '', price: '', description: '' });
      setError('');
      onSaved();
    } catch (err) {
      console.error('Error saving product:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmitProduct} className="mt-3">
      {error && <div className="alert alert-danger">{error}</div>}
      <input name="name" placeholder="Product Name" value={product.name} onChange={handleUpdateProduct} className="form-control mb-2" />
      <input name="price" placeholder="Product Price" value={product.price} onChange={handleUpdateProduct} className="form-control mb-2" />
      <input name="description" placeholder="Product Description" value={product.description} onChange={handleUpdateProduct} className="form-control mb-2" />
      <button type="submit" className="btn btn-success">
        Create/Update Product
      </button>
    </form>
  );
}
