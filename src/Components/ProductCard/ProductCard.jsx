import "./ProductCard.css";

export default function ProductCard({ product }) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={product.imgSrc} alt={product.title} />
            </div>
            <div>
                <div className="card-title">
                    <h4>{product.title}</h4>
                </div>
                <div>
                    <i className="fas fa-rupee-sign"></i>
                    <span>{product.price}</span>
                </div>
            </div>
            <div>
                Size:
                {product.sizes.map((size) => (
                    <span key={size}>{size} </span>
                ))}
            </div>
        </div>
    );
}
