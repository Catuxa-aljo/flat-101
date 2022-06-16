

const ProductItem = ( { name, image, description, price, units, id}) => {
    return (
        <div>
            <div className="results__img">           
                <img src={image} alt={name} title={name} />
            </div>
            <h3>{name}</h3>
            <h4>{description}</h4>
            <h4>&pound; {price} / m<sup>2</sup></h4>
        </div>

    )
}

export default ProductItem