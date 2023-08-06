import { useParams } from "react-router-dom";
import "./category.styles.scss";
import { Fragment, useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/ProductCard/product-card.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategories);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return <Fragment>
        <h2 className="category-title">{category.toUpperCase()}</h2>
        <div className="category-container">
            {products &&
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    </Fragment>
}

export default Category;