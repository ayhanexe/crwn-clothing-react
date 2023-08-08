import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

export default function CategoriesPreview() {
  const categories = useSelector((state) => state.categories.categories);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.values(categories).map(({ title }) => {
          const products = categories.filter(
            (category) => category.title === title
          );

          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
}
