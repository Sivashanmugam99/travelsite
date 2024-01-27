import React from 'react'
import ReactPlayer from 'react-player';

import './header.css'

/*
const Header = () => {
  return (
    <div className='container header__container'>
      <div className="image">
        
        <img src={Img1} alt=''/>
      </div>
      
      <div className='logo'>WayWeGo</div>

      <div className="ad">
      <p className="amazing-place">
        <span className="text-wrapper">Amazing </span>
        <span className="span">Place</span>
      </p>
    </div>
      
        <div className='spydt'>Start planning Your Dream Trip</div>
        <p className='ttw'>Travel the world with WayWeGo, where every destination shapes your unique story.</p>
        <div className='header__container__searchbar'>
          <input type='text' placeholder='Search' />
        </div>
      
      <a href='btn'>Book now</a>

      <article className='find__here'>
        <div className='find__your'>find your holidays</div>
          <div className='searching__container__box__items'>
            <div className='item__content'>
              <div> <input type='no' placeholder='mm/dd/yy' />mm/dd/yyyy</div>
              <div><input type='text' placeholder='Destination' /> Destination</div>
              <div> <input type="text" placeholder='Travel type' /> Travel Type</div>
              <a href='btn'>Seach Now</a>
            </div>
          </div>
        
      </article>
    </div>
  );
};

export default Header;
*/


/*
const Header = () => {
    return (
        <div className="travel-website-page">
            <div className="div">
                <div className="overlap">
                   
                  
                    <div className="web__logo">WayWeGO</div>
                    <p className="start-planning-your">
                        <span className="text-wrapper-13">Start</span>
                        <span className="text-wrapper-14">&nbsp;</span>
                        <span className="span">Planning</span>
                        <span className="text-wrapper-14"> Your Dream </span>
                        <span className="text-wrapper-13">Trip</span>
                    </p>
                    <p className="amazing-place">
                        <span className="text-wrapper-14">Amazing </span>
                        <span className="span">Place</span>
                    </p>  
                    
                    <p className="travel-the-world">
                        <span className="span">
                            Travel the world with WayWeGo, where every destination <br />
                            shapes your unique story
                        </span>
                        
                    </p>


                    <div className="overlap-group">
                        <div className="text-wrapper-15">book now</div>
                    </div>
                    <div className="overlap-2">
                        <div className="text-wrapper-16">Search</div>
                        <div className="group">
                            <div className="overlap-group-2">
                                <div className="ellipse" />
                                <img className="line-3" alt="Line" src="line-4.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="overlap-3">
                        <div className="rectangle-2" />
                        <div className="rectangle-3" />
                        <div className="find-your-holidays">
                            find your
                            <br />
                            holidays
                        </div>
                        <div className="rectangle-4" />
                        <div className="rectangle-5" />
                        <div className="rectangle-6" />
                        <div className="rectangle-7" />
                        <div className="text-wrapper-17">Search Now</div>
                        <div className="text-wrapper-18">Destination</div>
                        <div className="text-wrapper-19">Travel Type</div>
                        <img className="arrow" alt="Arrow" src="arrow-1.svg" />
                        <img className="arrow-2" alt="Arrow" src="arrow-2.svg" />
                        <img className="arrow-3" alt="Arrow" src="arrow-3.svg" />
                        <div className="text-wrapper-20">mm/dd/yyyy</div>
                    </div>
                </div>
                <div className="rectangle-8" />
            </div>
        </div>
    );
    
};
export default Header;


*/









const Header = () => {
  return (
    <section id='Header'>
      <div className=" travel-website">
          <div className="div">
              <div className="website-logo">WayWeGO</div> 
              
             
              
              <div className="travel-text">
                  <p className="travel-the-world">
                      <span className="span">
                          Travel the world with WayWeGo, where every destination <br />
                          shapes your unique story
                      </span>
                      <span className="text-wrapper-6">.</span>
                  </p>
                  <p className="start-planning-your">
                      <span className="text-wrapper-7">Start</span>
                      <span className="text-wrapper-8">&nbsp;</span>
                      <span className="span">Planning</span>
                      <span className="text-wrapper-8"> Your Dream </span>
                      <span className="text-wrapper-7">Trip</span>
                  </p>
                  <p className="amazing-place">
                      <span className="text-wrapper-8">Amazing </span>
                      <span className="span">Place</span>
                  </p>
              </div>
              <div className="btn-booknow">
                  
                      <a href='#book now' className="btn ">book now</a>
                  
              </div>


              <div className="find-your-holidays">
                  <div className="overlap-group">
                  <div className="fyh" />
                      <div className="fyh-box" />
                      <div className="search-btn-fyh">
                          
                           <a href='#search' className="btn ">Search</a>
                          
                      </div>
                      <div className="travel-type-btn"> 
                      
                          <div className="overlap-2">
                            
                             <a href='#MM/DD/YYYY' className="btn ">MM/DD/YYYY</a>
                          </div>
                      </div>
                      <div className="m-d-y-btn">
                          <div className="overlap-3">
                              <a href='#ravel Type' className="btn ">travel Type</a>
                          </div>
                      </div>
                      <div className="destination-btn">
                          <div className="overlap-4">
                              <a href='#estination' className="btn ">Destination</a>
                          </div>
                      </div>
                     <div className="find-your-holidays-2">
                          Find Your
                          <br />
                          Holidays
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </section>
  );
}
export default Header;
























