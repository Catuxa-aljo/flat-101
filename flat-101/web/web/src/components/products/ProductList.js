import productService from '../../services/products.service'
import { useState, useEffect } from 'react'
import ProductItem from './ProductItem';
import NewProduct from './ProductCreate';

const ProductList = () => {

    const [ products, setProducts ] = useState([]);
    const [isLoading, setLoading ] = useState(true);

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = () => {
        productService.list()
            .then(products => {
                setProducts(products)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)})
    }

    return (
       
        <>
        {isLoading && 
            <div className="loading">
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        }
        {!isLoading &&
            <section className="results">
             {products.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map(product => 
                    <ProductItem key={product.id} {...product}/>
                )}
            </section>
        }
        </>
    )
}

export default ProductList