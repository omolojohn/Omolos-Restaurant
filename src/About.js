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
        Welcome Food Lovers.
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
     
      <p className="lead" style={{ marginLeft: "10px", fontSize: "20px" }}>
        Experience the joy of exploring new flavors and expanding your culinary
        repertoire. Our intuitive search and filtering options make it easy to
        find recipes based on dietary preferences, ingredients, or cultural
        origins. Discover vegetarian delights, gluten-free options, and recipes
        suitable for special occasions or quick weekday meals.
      </p>
      <p className="lead" style={{ marginLeft: "10px", fontSize: "20px" }}>
        Stay organized and create your personalized recipe collections for easy
        access. Plan your meals with our meal planner feature, and never run out
        of exciting ideas for breakfast, lunch, dinner, or even festive
        gatherings.For 25 years of experience...you can trust us as your 
        restaurant of choice.
      </p>
      <p className="lead" style={{ marginLeft: "10px", fontSize: "20px" }}>
        Omolo's Restaurant is more than just a food app; it's an immersive cultural
        experience that celebrates the diversity of global cuisines. Join our
        vibrant community of food enthusiasts, share your own recipes, and
        connect with like-minded individuals who share a passion for cooking and
        cultural exploration.
      </p>
      </div>


 <div className="d-flex justify-content-center">
      <form
        onSubmit={handleSubmit}
        style={{ width: "1000px" }}
        className="mt-5 rounded p-4 shadow-lg">
        <p> <b style={{ fontSize: "30px" }}>FEEDBACK FORM</b> </p>

        <div className="mb-3 form-group">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label"
            style={{ fontSize: "25px" }}
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            required
          />
          <small id="emailHelp" className="form-text">
            (We'll never share your email with anyone else).
          </small>
        </div>
        <div className="mb-9 form-group">
          <label
            htmlFor="exampleInputName"
            className="form-label"
            style={{ fontSize: "25px" }}
          >
             Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputName"
            name="name"
          />
          <small id="nameHelp" className="form-text text-muted">
            (Optional)
          </small>
        </div>
        <div className="mb-9 form-group">
          <label
            htmlFor="exampleInputLocation"
            className="form-label"
            style={{ fontSize: "25px" }}
          >
            Location Visited
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputLocation"
            name="location"
          />
          <div id="LocationHelp" className="form-text"></div>
        </div>

        <p>Did you:</p>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            name="dineIn"
          />
          <label
            className="form-check-label"
            htmlFor="exampleCheck1"
            style={{ fontSize: "25px" }}
          >
            Dine in
          </label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck2"
            name="dineOut"
          />
          <label
            className="form-check-label"
            htmlFor="exampleCheck2"
            style={{ fontSize: "25px" }}
          >
            Dine out
          </label>
        </div>

        <button
          type="submit"
          className="btn "
          style={{
            backgroundColor: "#547043",
            color: "white",
            fontSize: "23px",
            padding: "10px 25px",
            borderRadius: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
  hyu


export default About;
