import React, { Component } from 'react';
import Typist from 'react-typist';
import VTxt from '../components/Textvideo';

export default function HomeHero () {

  // Define Theme colors
  const BGcolor ="#000000";
  const TXTcolor ="#fff";
    
    return (
      <React.Fragment>
      <div id="home" className="intro route bg-image">

        <div className="overlay-itro"> </div>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">I'm a</h1>
              {/* <p c2> */}
                <Typist className="intro-subtitle">
                  <VTxt text="Developer" />
                  Developer, Maker, Gamer, Husband, Father
                
                </Typist>
                {/* <strong className="text-slider"> */}
              {/* </p> */}
              {/* <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`          
          .intro {
            height: 100vh;
            position: relative;
            color: ${TXTcolor};
          }
          
          /* .intro.route.bg-image{
            background-image: url(img/intro-bg.jpg)
          } */
          
          .intro .intro-content {
            text-align: center;
            position: absolute;
          }
          
          .intro .overlay-itro {
            background-color: ${BGcolor};
            position: absolute;
            top: 0;
            left: 0px;
            padding: 0;
            height: 100%;
            width: 100%;
            opacity: .9;
          }
          
          .intro .intro-title {
            color: ${TXTcolor};
            font-weight: 600;
            font-size: 3rem;
          }
          
          .intro .intro-subtitle {
            font-size: 1.5rem;
            font-weight: 300;
          }
          
          .intro .text-slider-items {
            display: none;
          }
          
          .intro-single {
            height: 350px;
          }
          
          .intro-single .intro-content {
            margin-top: 30px;
          }
          
          .intro-single .intro-title {
            text-transform: uppercase;
            font-size: 3rem;
          }

          
          @media (min-width: 768px) {
            .intro .intro-title {
              font-size: 4.5rem;
            }
          
            .intro .intro-subtitle {
              font-size: 2.5rem;
            }
          
            .intro-single .intro-title {
              font-size: 3.5rem;
            }
          }
          @media (max-width: 1024px) {
            .bg-image {
              background-attachment: scroll;
            }
          }
      `}</style>
      </React.Fragment>
    )
}
