import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
  
    
     const handlenavigation = () => {
      navigate('/menu')
     }
    return (
      <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            
            <div className="carousel-item active">
              <img
                src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/01/Charcuterie_Darina-Kopcok.jpg?fit=750%2C558&ssl=1"
                className="d-block w-100"
                alt="food plate"
              />
            </div>
  
            
            <div className="carousel-item">
              <img
                src="https://3.bp.blogspot.com/-DYDzOymPQSA/XIW4TsE7ZQI/AAAAAAAAHzw/mulRYiNTrvov-gN7Eu-45K4UDBltRvmsQCHMYCw/s1600/italian-food-images-pizza-pie-hd-wallpaper-and-background-photos.jpg"
                className="d-block w-100"
                alt="food"
              />
            </div>
  
           <div className="carousel-item">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/111/444/15/food-chocolate-cinnamon-star-anise-wallpaper-preview.jpg"
                className="d-block w-100"
                alt="tasty"
              />
            </div>
  
            
            <div className="carousel-item">
              <img
                src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/04/food-photography-blogs-spread.jpg"
                className="d-block w-100"
                alt="tasty"
              />
            </div>
        </div>
  
  
    
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
           
            borderRadius: '5px',
            padding: '20px',
         
          }}
        >
          <h2
  
            style={{
              fontSize: '4.5rem',
              fontWeight: 'bold',
              color: 'white',
              marginTop:"-300px",
              textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)',
              position:"static !important"
            }}
          >
            Welcome to Omolo's Dishees!
          </h2>
          <p
            style={{
              fontSize: '2.5rem',
              lineHeight: '1.6',
              textAlign: 'center',
              color: '#ADD8E6',
              textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
              marginBottom: '30px',
            }}
          >
            Explore our delicious menu and place your order today!
          </p>
  
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                className="btn "
                onClick={handlenavigation}
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 'bold',
                  backgroundColor: '#547043', 
                  color: 'white', 
                  padding: '12px 24px', 
                  borderRadius: '8px', 
                  cursor: 'pointer', 
                }}
              >
                Place Order
              </button>
            </div>
             
          </div>
        </div>
      </div>
        )
        }
   
   export default Home;
  
  
  
  