import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './styleProductForm.css'
import { fetchCreateProduct } from "../../store/productsReducer";
import { fetchUpdateProduct } from "../../store/productsReducer";


export const ProductForm = ({ product, formType }) => {
  // all the inputs
  console.log("tetete", formType);
  const [productImage, setProductImage] = useState(product.product_image? product.product_image[0] : "");
  const [name, setName] = useState(product?.name);
  const [category, setCategory] = useState(product?.category);
  const [description, setDescription] = useState(product?.description);
  const [price, setPrice] = useState(product?.price);
  const [quantity, setQuantity] = useState(product?.quantity);

  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  // const sessionUser = useSelector((state) => state.session.user);

  // useEffect(() => {
  //   const errors = {};
  //   if (!productImage) errors.productImage = "Product Image is required";
  //   if (!name) errors.name = "Product title is required";
  //   if (!name.length >= 100)
  //     errors.name = "Name must be less than 100 characters";
  //   if (!category) errors.category = "Category is required";
  //   if (!description) errors.description = "Description is required";
  //   if (description.length >= 1000)
  //     errors.name = "Description must be less than 1000 characters";
  //   if (!price) errors.price = "Price  is required";
  //   if (!quantity) errors.quantity = "Quantity is required";
  //   setErrors(errors);
  // }, [productImage, category, quantity, description, name, price]);

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
      price,
      url: productImage
    };
    // console.log("what product is in the productForm==============", product);
      console.log('how about here', product);
    // console.log("1. user input", product);
    if (formType === "Update") {
      // && !Object.values(errors).length
      // const editedproduct = await dispatch(
      //   updateProductThunk(product)
      // );
      // product = editedproduct;
      console.log('dododododod', product);
      const updatedProduct = await dispatch(fetchUpdateProduct(product))

      console.log('popp', updatedProduct);

      history.replace(`/products/${updatedProduct.singleProduct.id}`)

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

      <div id='entire-page-form'>

        <div id='form-holder-form'>

          <div>

       <div id='create-ProductForm'>Create a Product</div>
       <div>Add a photo and details about your item. Fill out what you can for now — you will be able to edit this later.</div>

          </div>

         <form onSubmit={handleSubmit}>

         <div id='image-div-ProductForm'>
          <div>
           <div id='image-ProductForm'>Photo</div>
           <div id='image-desc-ProductForm'>Image URL must start with "http" and end in .png /or .jpeg /or .jpg</div>
        </div>

        <div id='right-image-div-ProductForm'>

         <label>
             <input id="image-input-ProductForm"
              type="text"
              placeholder="Product Image URL ending with .png .jpeg or .jpg"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
              pattern='^http.*\.(png|jpg|jpeg)$'
              required
            />
          </label>
          <div>
            {hasSubmitted && errors.productImage && `${errors.productImage}`}
          </div>


        </div>

        </div>
        <div id='details-section-ProductForm'>
          <div id='product-ProductForm'>Product details</div>
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
                    required
                  />
                </label>
                <div>
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
                  <select id='category-input-ProductForm'
                    type="text"
                    placeholder=""
                    value={category}
                    required
                    onChange={(e) => setCategory(e.target.value)}>
                      <option value=''>Choose a Category:</option>
                      <option value='Jewelry'>Jewelry & Accessories</option>
                      <option value='Clothing'>Clothing & Shoes</option>
                      <option value='Home'>Home & Living</option>
                      <option value='Wedding'>Wedding & Party</option>
                      <option value='Toys'>Toys & Entertainment</option>
                      <option value='Art'>Art & Collectibles</option>
                      <option value='Craft'>Craft Supplies</option>
                      <option value='Gifts'>Gifts & Gift Cards</option>
                  </select>
                </label>
                <div>
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
                  required
                />
              </label>
              <div className="errors">
                {hasSubmitted && errors.description && `${errors.description}`}
              </div>



            </div>


          </div>




        </div>








        <div id='inventory-section-ProductForm'>
                          <div id='inventory-ProductForm'>Inventory and Pricing</div>

                        <div id='price-div-ProductForm'>
                            <div id='left-price-div-ProductForm'>
                              <div id='price-ProductForm'>Price</div>
                              <div id='price-desc-ProductForm'>
                              Remember to factor in the costs of materials, labor, and other business expenses. If you offer free shipping, make sure to include the cost of shipping so it doesn't eat into your profits.
                              </div>
                            </div>

                            <div id='right-price-div-ProductForm'>

                            <label>
                              {/* <i className="fa-solid fa-dollar-sign"></i>
                              {"  "} */}
                              <input id='price-input-ProductForm'
                                className="price"
                                type="number"
                                placeholder="USD $0"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                              />
                            </label>
                            <div className="errors">
                              {hasSubmitted && errors.price && `${errors.price}`}
                            </div>



                            </div>


                        </div>


                        <div id='quantity-div-ProductForm'>

                              <div id='left-quantity-div-ProductForm'>

                                <div id='quantity-ProductForm'>Quantity</div>
                                <div id='quantity-desc-ProductForm'>
                                For quantities greater than one, this listing will renew automatically until it sells out.
                                </div>

                              </div>

                                <div id='right-quantity-div-ProductForm'>


                            <label>
                              <input id='quantity-input-ProductForm'
                                className="quantity"
                                type="number"
                                placeholder="1"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                required
                              />
                            </label>
                            <div className="errors">
                              {hasSubmitted && errors.quantity && `${errors.quantity}`}
                            </div>




                                </div>





                        </div>

                          </div>




                          <button id='submit-butt-ProductForm' className="black-button" type="submit">
                            {formType}
                          </button>

      </form>




        </div>






      </div>







    // <div id="center-container-form">




    //   <div>Create a Product</div>
    //   <div>Add a photo and details about your item. Fill out what you can for now — you will be able to edit this later.</div>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <div>Photo</div>
    //       <label>
    //         <input
    //           type="url"
    //           placeholder="Product Image URL"
    //           value={productImage}
    //           onChange={(e) => setProductImage(e.target.value)}
    //         />
    //       </label>
    //       <div>
    //         {hasSubmitted && errors.productImage && `${errors.productImage}`}
    //       </div>
    //     </div>
    //     <div>
    //       <div>Product details</div>
    //       <div>Tell the world all about your item and why they will love it.</div>


    //       <div id='title-div-ProductForm'>

    //         <div id='left-title-div-ProductForm'>

    //             <div id='name-ProductForm'>Product Name</div>
    //             <div id='name-desc-ProductForm'>Include keywords that buyers would use to search for your item.</div>


    //         </div>

    //         <div id='right-title-div-ProductForm'>


    //             <label >
    //               <input id='title-input-ProductForm'
    //                 type="text"
    //                 placeholder=""
    //                 value={name}
    //                 onChange={(e) => setName(e.target.value)}
    //               />
    //             </label>
    //             <div>
    //               {hasSubmitted && errors.name && `${errors.name}`}
    //             </div>
    //         </div>
    //       </div>


    //       <div id='category-div-ProductForm'>


    //         <div id='left-category-div-ProductForm'>

    //             <div id='category-ProductForm'>Category</div>
    //             <div id='category-desc-ProductForm'>Choose a category that will help more shoppers find your item.</div>


    //         </div>


    //         <div id='right-category-div-ProductForm'>

    //             <label>
    //               <select id='category-input-ProductForm'
    //                 type="text"
    //                 placeholder=""
    //                 value={category}
    //                 onChange={(e) => setCategory(e.target.value)}>
    //                   <option value=''>Choose a Category:</option>
    //                   <option value='Jewelry'>Jewelry & Accessories</option>
    //                   <option value='Clothing'>Clothing & Shoes</option>
    //                   <option value='Home'>Home & Living</option>
    //                   <option value='Wedding'>Wedding & Party</option>
    //                   <option value='Toys'>Toys & Entertainment</option>
    //                   <option value='Art'>Art & Collectibles</option>
    //                   <option value='Craft'>Craft Supplies</option>
    //                   <option value='Gifts'>Gifts & Gift Cards</option>
    //               </select>
    //             </label>
    //             <div>
    //               {hasSubmitted && errors.category && `${errors.category}`}
    //             </div>


    //         </div>



    //       </div>


    //       <div id='desc-div-ProductForm'>

    //         <div id='left-desc-div-ProductForm'>

    //             <div id='desc-ProductForm'>Description</div>
    //             <div id='desc-desc-ProductForm'>Start with a brief overview that describes your item’s finest features. Shoppers will only see the first few lines of your description at first, so make it count!</div>
    //             <div id='desc-desc2-ProductForm'>Not sure what else to say? Shoppers also like hearing about your process, and the story behind this item.</div>

    //         </div>


    //         <div id='left-desc-div-ProductForm'>


    //           <label>
    //             <textarea id='desc-input-ProductForm'
    //               placeholder="Please write at least 30 characters"
    //               value={description}
    //               onChange={(e) => setDescription(e.target.value)}
    //             />
    //           </label>
    //           <div className="errors">
    //             {hasSubmitted && errors.description && `${errors.description}`}
    //           </div>



    //         </div>


    //       </div>




    //     </div>








    //                       <div id="inventory section">
    //                       <div>Inventory and Pricing</div>
    //                         <label>
    //                           <i className="fa-solid fa-dollar-sign"></i>
    //                           {"  "}
    //                           <input
    //                             className="price"
    //                             type="number"
    //                             placeholder="USD $0"
    //                             value={price}
    //                             onChange={(e) => setPrice(e.target.value)}
    //                           />
    //                         </label>
    //                         <div className="errors">
    //                           {hasSubmitted && errors.price && `${errors.price}`}
    //                         </div>
    //                         <label>
    //                           <input
    //                             className="quantity"
    //                             type="number"
    //                             placeholder="1"
    //                             value={quantity}
    //                             onChange={(e) => setQuantity(e.target.value)}
    //                           />
    //                         </label>
    //                         <div className="errors">
    //                           {hasSubmitted && errors.quantity && `${errors.quantity}`}
    //                         </div>
    //                       </div>




    //                       <button className="black-button" type="submit">
    //                         {formType}
    //                       </button>

    //   </form>


    // </div>
  );
};
