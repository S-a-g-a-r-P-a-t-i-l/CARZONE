import React from "react";
import ReactStars from 'react-rating-stars-component'
import logo from "../../images/logo.png"

const ReviewCard = ({review}) =>{
    const options = {
      value: review.rating,
      edit:false,
      color: "rgba(20,20,20,0.1)",
      activeColor: "tomato",
      size: window.innerWidth < 600 ? 20 : 25,
      readOnly: true,
      precision: 0.5,
    
    };

  return (
    <div className="reviewCard">
      <img src={logo} alt="User" />
      <p>{review.name}</p>
      <ReactStars {...options} />
      <span >{review.comment}</span>
    </div>
  );
};

export default ReviewCard;