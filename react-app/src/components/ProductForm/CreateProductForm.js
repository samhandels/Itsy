import { ProductForm } from "../ProductForm/index"

export const CreateProductForm = () => {
 let product = {
};

  return (
    <div className="components-border">
      <ProductForm  product={product} formType="Create" />
    </div>
  );
};

