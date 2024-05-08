import React from "react";

function About() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("Thankyou For Your Feedback!");
    
    window.location.reload(); 
  }};
  return (
    <div>
      
      
      <div className="container text-center mt-5">
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Welcome Everyone
      </h1>
      <p className="lead" style={{ marginLeft: "10px", fontSize: "20px", marginTop: "25px" }}>
        Embark on a culinary adventure like no other with Omolo's Restaurant, a
        beautifully designed and user-friendly app that brings you an extensive
        collection of recipes from diverse cultures around the world. Discover
        the rich flavors, vibrant spices, and unique cooking techniques that
        define each culture's cuisine. From sizzling Indian curries to
        comforting Italian pasta dishes, fiery Mexican salsas to delicate
        Japanese sushi rolls, Tasty Dishes has it all.
      </p>
      <p className="lead" style={{ marginLeft: "10px", fontSize: "20px" }}>
        With a vast selection of recipes carefully curated by seasoned chefs and
        culinary experts, you'll find inspiration for every occasion and taste
        preference. Whether you're a novice cook or a seasoned food enthusiast,
        our step-by-step instructions and handy tips will guide you towards
        creating authentic and mouthwatering dishes.
      </p>
     
