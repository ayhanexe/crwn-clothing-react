import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";

export default function CategoriesPreview() {
  const categories = useSelector(state => state.categories.categories);

  return (
    <Fragment>
      {
        Object.values(categories).map(({title}) => {
          const products = categories.filter(category => category.title === title);

          return (
            <CategoryPreview key={title} title={title} products={products} />
          )
        })
      }
    </Fragment>
  );
}
