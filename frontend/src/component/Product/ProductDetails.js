import React, { Fragment,useEffect, useState } from 'react';
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import {useSelector, useDispatch} from "react-redux"
import {clearErrors, getProductDetails} from "../../actions/productAction";
import ReactStars from 'react-rating-stars-component'
import ReviewCard from "./ReviewCard.js"
import Loader from '../layout/Loader/Loader';
import {useAlert} from 'react-alert'
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartAction";

const ProductDetails = ({match}) => {
   const dispatch = useDispatch();
   const alert = useAlert();
   const {product,loading,error} = useSelector(state => state.productDetails)
   useEffect(() => {
       if(error){
        dispatch(clearErrors())
       }
       dispatch(getProductDetails(match.params.id));
   }, [dispatch,match.params.id,error,alert]);

   const options = {
    edit:false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
};
const [quantity, setQuantity] = useState(1);
const [open, setOpen] = useState(false);
const [rating, setRating] = useState(0);
const [comment, setComment] = useState("");

const increaseQuantity = () => {
  if (product.Stock <= quantity) return;

  const qty = quantity + 1;
  setQuantity(qty);
};


//  const increaseQuantity = () => {
//    if (product.Stock <= quantity)

//    const qty = quantity + 1;
//    setQuantity(qty);
//  };
 
 const decreaseQuantity = () => {
  if (1 >= quantity) return;

  const qty = quantity - 1;
  setQuantity(qty);
};

const addToCartHandler = () => {
  dispatch(addItemsToCart(match.params.id, quantity));
  alert.success("Item Added To Cart");
};

// const submitReviewToggle = () => {
//   open ? setOpen(false) : setOpen(true);
// };

const reviewSubmitHandler = () => {
  const myForm = new FormData();

  myForm.set("rating", rating);
  myForm.set("comment", comment);
  myForm.set("productId", match.params.id);

 // dispatch(newReview(myForm));

  setOpen(false);
};

useEffect(() => {
  if (error) {
    alert.error(error);
    dispatch(clearErrors());
  }

 /* if (reviewError) {
    alert.error(reviewError);
    dispatch(clearErrors());
  }

  if (success) {
    alert.success("Review Submitted Successfully");
    dispatch({ type: NEW_REVIEW_RESET });
  }*/
  dispatch(getProductDetails(match.params.id));
}, [dispatch, match.params.id, error, alert]);

    return (
      <Fragment>
          {loading? <Loader/> :(
            
            <Fragment>
            <MetaData title={`${product.name} -- CARZONE`} />
    <div className="ProductDetails">
       <div>
           <Carousel>
               {product.images &&
               product.images.map((item, i)=>(
                   <img
                   className="CarouselImage"
                       key={item.url}
                       src={item.url}
                       alt={`${i} Slide`}
                   />
               ))}
           </Carousel>
      
        </div>
     <div>
        <div className="detailsBlock-1">
         <h2>{product.name}</h2>
         <p>Product # {product._id}</p>
         </div>
         <div className="detailsBlock-2">
          <ReactStars{...options}/>
          <span>({product.numOfReviews} Reviews)</span>
         </div>
        <div className="detailsBlock-3">
            <h1>{`₹${product.price}`}</h1>
            <div className="detailsBlock-3-1">
               <button onClick ={ addToCartHandler}>Add to Cart</button>
            </div>
            <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
        </div>
        <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>
    <button className="submitReview">Submit Review</button>
    </div>
    </div>
    <h3 className="reviewsHeading">REVIEWS</h3>
    {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => 
                  <ReviewCard  review={review} />
                )}
            </div>
    ):(
        <p className="noReviews">No Reviews Yet</p>
    )}
        </Fragment> 
          )}
      </Fragment>
    );
};

export default ProductDetails