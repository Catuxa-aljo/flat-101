import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import productService from '../../services/products.service'

const validations = {
    name: (value) => {
        let message;
        if(!value) {
            message = 'Insert a name for the product'
        }
        return message
    },
    price: (value) => {
        let message;
        if(!value) {
            message = 'Please insert a price for the item'
        } else if (typeof value !== 'number') {
            message = 'Please insert a valid number'
        }
        return message
    }
}

const NewProduct = () => {
    const navigate = useNavigate()
    const id = useParams()

    const [ product, setProduct ] = useState({
        name: '',        
        image:'',
        description: '',
        price:'',
        units: 1,
    })

    const [errors, setErrors] = useState({
        name: validations.name('') ,
        price: validations.price(''),
    })

    const [touched, setTouched] = useState({})

    const handleChange = (event) =>{
        let { name, value, files } = event.target;

        if ( files ) {
            value = files[0]
        }

        setProduct({
            ...product,
            [name]: value
        })
        setErrors({
            ...errors,
            [name] : validations[name] ? validations[name](value) : undefined
        })
    }

    const handleBlur = (event) => {
        const { name } = event.target
        setTouched({
            ...touched,
            [name]: true
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        productService.create(product)
            .then(product => {
                navigate(`/`)} 
                )
            .catch(error  => {
                const { errors, message} = error.response?.data || error;
                const touched =  Object.keys(errors || {}).reduce((touched, key) => {
                    touched[key] = true;
                    return touched;
                }, {});           
                setErrors({...errors,
                        name : errors ? undefined : message,
                        price : errors ? undefined : message,
                })
                setTouched({... touched,
                        name: errors ? false : true,
                        price: errors ? false : true,
                })
            })
    }

    return(
        <section className="product-form">
            <h1>Create a new product</h1>
            <h2>Fill the form and create a new product for the shop</h2>
            <form onSubmit={handleSubmit}>
                    <div className="input-group flex-nowrap mb-3 mt-3">
                        <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-store"></i></span>
                        <input  name="name" 
                                type="text" 
                                className="form-control"
                                value={product.name} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Product Name" 
                                aria-label="Name" 
                                aria-describedby="Add Product Name"/>
                    </div>
                    {touched.name && <h6><i className={errors.name ? "fas fa-exclamation-triangle" : "fas fa-check" }></i> {errors.name ? errors.name : 'All good!'}</h6>}

                    <div className="form-floating mb-3 mt-3">
                        <textarea 
                                name="description"
                                value={product.description} 
                                onChange={handleChange}
                                className="form-control" 
                                placeholder="Product description" 
                                id="floatingTextarea2"
                                >
                                
                        </textarea>
                        <label htmlFor="floatingTextarea2">Description</label>
                    </div>
                    <div>
                        <h3>Upload your product image</h3>
                        <div className="input-group flex-nowrap mb-3 mt-3">
                            <span className="input-group-text" id="addon-wrapping"><i className="far fa-image"></i></span>
                            <input  name="image" 
                                    type="file" 
                                    onChange={handleChange}
                                    className="form-control" 
                                    placeholder="Add a cover for your travel" 
                                    aria-label="Cover" 
                                    aria-describedby="Add a cover for your travel"/>
                        </div>
                    </div>
                
                    <div className="product-form__quantities">
                        <div className="mb-3 mt-3">
                            <h3>Price</h3>
                            <div className="input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping"><i className="fas fa-coins"></i></span>
                                <input  name="price" 
                                        type="number" 
                                        className="form-control"
                                        value={product.price}
                                        onChange={handleChange}
                                        placeholder="Set item price" 
                                        aria-label="price" 
                                        aria-describedby="Set item price"/>
                            </div>
                            {touched.price && <h6><i className={errors.price ? "fas fa-exclamation-triangle" : "fas fa-check" }></i> {errors.price ? errors.price : 'All good!'}</h6>}

                        </div>
                        <div>
                            <h3>Units avalaible</h3>
                            <div className="input-group flex-nowrap">
                                <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-boxes-stacked"></i></span>
                                <input  name="units" 
                                        type="number" 
                                        className="form-control"
                                        value={product.units}
                                        onChange={handleChange}
                                        placeholder="Product units" 
                                        aria-label="units" 
                                        aria-describedby="Product units"/>
                            </div>
                        </div>   
                    </div>
                    <div className="product-form__send-button">
                        <button type="submit"> Create a new product </button>
                    </div>
                </form>
            </section>
    )
}

export default NewProduct