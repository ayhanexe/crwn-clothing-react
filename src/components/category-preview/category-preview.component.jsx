import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
    return <div className="category-preview-container">
        <h2>
            <Link to={title} className="title">{title.toUpperCase()}</Link>
        </h2>
        <div className="preview">
            {
                products[0].items
                    .filter((_, idx) => idx < 4)
                    .map((product) => <ProductCard key={product.id} product={product} />)
            }
        </div>
    </div>
}

export default CategoryPreview;