import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { createProductThunk } from "../../../store/products";
// import { updateProductThunk } from "../../../store/products";
//! need to create thunks

//!need to create 2 components, one for create, one for update
export const ProductForm = ({ product, formType }) => {
  // all the inputs
  const [productImage, setProductImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    const errors = {};
    if (!productImage) errors.productImage = "Product Image is required";
    if (!name) errors.name = "Product title is required";
    if (name.length >= 100)
      errors.name = "Name must be less than 100 characters";
    if (!category) errors.category = "Category is required";
    if (!description) errors.description = "Description is required";
    if (description.length >= 1000)
      errors.name = "Description must be less than 1000 characters";
    if (!price) errors.price = "Price  is required";
    if (!quantity) errors.quantity = "Quantity is required";
    setErrors(errors);
  }, [productImage, category, quantity, description, name, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    // setErrors({});
    product = {
      ...product,
      productImage,
      category,
      quantity,
      description,
      name,
      price,
      Owner: { ...sessionUser },
    };
    // console.log("what product is in the productForm==============", product);

    // console.log("1. user input", product);
    if (formType === "Update product") {
      // && !Object.values(errors).length
      // const editedproduct = await dispatch(
      //   updateProductThunk(product)
      // );
      // product = editedproduct;
    } else if (formType === "Create product") {
      // && !Object.values(errors).length
      // const newproduct = await dispatch(
      //   createProductThunk(product)
      // );
      // console.log("3. back to form", newproduct);
      // product = newproduct;
    }
  };

  //! need to figure out error handling
  const backendErrors = product.errors;
  // console.log(
  //   "************ in the create productForm component, getting the backend  errors",
  //   backendErrors
  // );
  if (backendErrors) {
    setErrors({ ...backendErrors, ...errors });
    //   console.log(
    //     "************ in the create productForm component, getting the backend + frontend errors",
    //     errors
    //   );
  } else {
    history.push(`/products/${product.id}`);
  }

  return (
    <div className="center-container">
      <div>Create a Product</div>
      <form onSubmit={handleSubmit}>
        <section className="productImage">
          <div>Photo</div>
          <label>
            <input
              type="url"
              placeholder="Product Image URL"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
            />
          </label>
          <div className="errors">
            {hasSubmitted && errors.productImage && `${errors.productImage}`}
          </div>
        </section>
        <section className="productDetail">
          <div>Product details</div>
          <div>Tell the world all about your item and why they’ll love it.</div>
          <label>
            <input
              type="text"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <div className="errors">
            {hasSubmitted && errors.name && `${errors.name}`}
          </div>
          <label>
            <i className="fa-solid fa-dollar-sign"></i>
            {"  "}
            <input
              type="text"
              placeholder="Small GrandPa Whale, Tiny Tooth Fairy Letter"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <div className="errors">
            {hasSubmitted && errors.category && `${errors.category}`}
          </div>
          <label>
            <textarea
              placeholder="Please write at least 30 characters"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <div className="errors">
            {hasSubmitted && errors.description && `${errors.description}`}
          </div>
        </section>
        <section className="InventoryandPricing">
          <label>
            <i className="fa-solid fa-dollar-sign"></i>
            {"  "}
            <input
              className="price"
              type="number"
              placeholder="USD $0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <div className="errors">
            {hasSubmitted && errors.price && `${errors.price}`}
          </div>
          <label>
            <input
              className="quantity"
              type="number"
              placeholder="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
          <div className="errors">
            {hasSubmitted && errors.quantity && `${errors.quantity}`}
          </div>
        </section>
      </form>
    </div>
  );
};
