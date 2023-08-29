import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './styleProductForm.css'
import { fetchCreateProduct } from "../../store/productsReducer";


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
      category,
      quantity,
      description,
      name,
      price
    };
    // console.log("what product is in the productForm==============", product);

    // console.log("1. user input", product);
    if (formType === "Update") {
      // && !Object.values(errors).length
      // const editedproduct = await dispatch(
      //   updateProductThunk(product)
      // );
      // product = editedproduct;
    } else if (formType === "Create") {
      // && !Object.values(errors).length
      // const newproduct = await dispatch(
      //   fetchCreateProduct(product)
      // );
      // console.log("3. back to form", newproduct);
      // product = newproduct;
      const newProduct = await dispatch(fetchCreateProduct(product))

      history.replace(`/products/${newProduct.singleProduct.id}`)
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
    // history.push(`/products/${product.id}`);
  }

  return (
    <div className="center-container">
      <div>Create a Product</div>
      <div>Add a photo and details about your item. Fill out what you can for now — you will be able to edit this later.</div>
      <form onSubmit={handleSubmit}>
        <section className="productImage lightgray">
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
        <section className="productDetail lightgray">
          <div>Product details</div>
          <div>Tell the world all about your item and why they will love it.</div>


          <div id='title-div-ProductForm'>

            <div id='left-title-div-ProductForm'>

                <div id='name-ProductForm'>Product Name</div>
                <div id='name-desc-ProductForm'>Include keywords that buyers would use to search for your item.</div>


            </div>

            <div id='right-title-div-ProductForm'>


                <label >
                  <input id='title-input-ProductForm'
                    type="text"
                    placeholder=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <div className="errors">
                  {hasSubmitted && errors.name && `${errors.name}`}
                </div>
            </div>
          </div>


          <div id='category-div-ProductForm'>


            <div id='left-category-div-ProductForm'>

                <div id='category-ProductForm'>Category</div>
                <div id='category-desc-ProductForm'>Choose a category that will help more shoppers find your item.</div>


            </div>


            <div id='right-category-div-ProductForm'>

                <label>
                  <input id='category-input-ProductForm'
                    type="text"
                    placeholder=""
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </label>
                <div className="errors">
                  {hasSubmitted && errors.category && `${errors.category}`}
                </div>


            </div>



          </div>


          <div id='desc-div-ProductForm'>

            <div id='left-desc-div-ProductForm'>

                <div id='desc-ProductForm'>Description</div>
                <div id='desc-desc-ProductForm'>Start with a brief overview that describes your item’s finest features. Shoppers will only see the first few lines of your description at first, so make it count!</div>
                <div id='desc-desc2-ProductForm'>Not sure what else to say? Shoppers also like hearing about your process, and the story behind this item.</div>

            </div>


            <div id='left-desc-div-ProductForm'>


              <label>
                <textarea id='desc-input-ProductForm'
                  placeholder="Please write at least 30 characters"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
              <div className="errors">
                {hasSubmitted && errors.description && `${errors.description}`}
              </div>



            </div>


          </div>




        </section>








        <section className="InventoryandPricing lightgray">
        <div>Inventory and Pricing</div>
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
        <button className="black-button" type="submit">
          {formType}
        </button>
      </form>
    </div>
  );
};
