import React from 'react';
import './MainPage.css';
import logo from './assets/logo.png'; // Ensure this path is correct
import mid1 from './assets/mid1.png'; // Ensure this path is correct
import mid2 from './assets/mid2.png'; // Ensure this path is correct
import mid3 from './assets/mid3.png'; // Ensure this path is correct
import mid4 from './assets/mid4.png'; // Ensure this path is correct
import mid_button from './assets/mid_button.png'; // Ensure this path is correct

function MainPage() {
  console.log("MainPage is rendering"); // Check if this logs when expected
  return (
    <div className="main-container">
      <div className="top-pane">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="middle-space">
        <p className="travel-label">Ваши путешествия</p>
        <div className="image-row">
            <div className="image-container">
              <img src={mid1} alt="Image 1" className="middle-image" />
              <button className="image-button"><img src={mid_button} alt="Button" /></button>
            </div>
            <div className="image-container">
              <img src={mid2} alt="Image 2" className="middle-image" />
              <button className="image-button"><img src={mid_button} alt="Button" /></button>
            </div>
            <div className="image-container">
              <img src={mid3} alt="Image 3" className="middle-image" />
              <button className="image-button"><img src={mid_button} alt="Button" /></button>
            </div>
            <div className="image-container">
              <img src={mid4} alt="Image 4" className="middle-image" />
              <button className="image-button"><img src={mid_button} alt="Button" /></button>
            </div>
        </div>
      </div>
      <div className="bottom-pane">
        <p>Так же вы просматривали:</p>
        <div className="recently-viewed">
          <button>Хатынь</button>
          <button>Брест: Экскурсия</button>
          <button>Мирский Замок</button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;