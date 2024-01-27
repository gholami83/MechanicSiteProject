import React from 'react';
import './style.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const About = () => {
 return (
    <div className="who-we">
      <div className="wel-info text-center" style={{position: 'relative', backgroundImage: `url(${require('../assets/images/slide.jpg')})`, backgroundSize: 'cover', height: '500px'}}>
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#ffffff', textShadow: '2px 2px 4px #000000'}}>
          <h2>Who We Are?</h2>
          <span className="brk"></span>
          <p>We are the founder of mechanic site project and you can contact us on our social app </p>
        </div>
        </div>




      <div className="cards-row">
        <div className="container">
          <div className="row">
            {/* Repeat the following block for each team member */}
            <div className="col-sm-5 col-md-3">
              <div className="thumbnail">
                <img src={require('../assets/images/Programmer-Flat-Icon-Graphics-13376618-1-1-580x387.jpg')} alt="Description" />
                <img className='team-pic' src={require('../assets/images/developer.png')} alt="Description" />

                <div className="caption">
                 <h3>Yasin ShamsZadeh</h3>
                 <p className="card-description"> CEO, Front-end developer</p>
                 <p className="social">
                  <a href="https://www.facebook.com/paribesh"><FontAwesomeIcon icon={faFacebook} color="#3b5998" /></a> 
                  <a href="https://twitter.com/bronepeace"><FontAwesomeIcon icon={faTwitter} color="#1DA1F2" /></a> 
                  <a href="https://www.linkedin.com/in/ranabhat/"><FontAwesomeIcon icon={faLinkedin} color="#0077B5" /></a> 
                  <a href="https://github.com/ranabhat/"><FontAwesomeIcon icon={faGithub} color="#171515" /></a>
                  </p>

                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3">
              <div className="thumbnail">
                <img src={require('../assets/images/Programmer-Flat-Icon-Graphics-13376618-1-1-580x387.jpg')} alt="Description" />
                <img className='team-pic' src={require('../assets/images/developer.png')} alt="Description" />

                <div className="caption">
                 <h3>Hosein Qolami</h3>
                 <p className="card-description">Front-end & back-end developer</p>
                 <p className="social">
                  <a href="https://www.facebook.com/paribesh"><FontAwesomeIcon icon={faFacebook} color="#3b5998" /></a> 
                  <a href="https://twitter.com/bronepeace"><FontAwesomeIcon icon={faTwitter} color="#1DA1F2" /></a> 
                  <a href="https://www.linkedin.com/in/ranabhat/"><FontAwesomeIcon icon={faLinkedin} color="#0077B5" /></a> 
                  <a href="https://github.com/ranabhat/"><FontAwesomeIcon icon={faGithub} color="#171515" /></a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3">
              <div className="thumbnail">
                <img src={require('../assets/images/Programmer-Flat-Icon-Graphics-13376618-1-1-580x387.jpg')} alt="Description" />
                <img className='team-pic' src={require('../assets/images/developer.png')} alt="Description" />

                <div className="caption">
                 <h3>Hosein KazemZadeh</h3>
                 <p className="card-description"> Backend-end developer</p>
                 <p className="social">
                  <a href="https://www.facebook.com/paribesh"><FontAwesomeIcon icon={faFacebook} color="#3b5998" /></a> 
                  <a href="https://twitter.com/bronepeace"><FontAwesomeIcon icon={faTwitter} color="#1DA1F2" /></a> 
                  <a href="https://www.linkedin.com/in/ranabhat/"><FontAwesomeIcon icon={faLinkedin} color="#0077B5" /></a> 
                  <a href="https://github.com/ranabhat/"><FontAwesomeIcon icon={faGithub} color="#171515" /></a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3">
              <div className="thumbnail">
                <img src={require('../assets/images/Programmer-Flat-Icon-Graphics-13376618-1-1-580x387.jpg')} alt="Description" />
                <img className='team-pic' src={require('../assets/images/developer.png')} alt="Description" />

                <div className="caption">
                 <h3>Arman QoliZadeh</h3>
                 <p className="card-description">Front-end developer</p>
                 <p className="social">
                  <a href="https://www.facebook.com/paribesh"><FontAwesomeIcon icon={faFacebook} color="#3b5998" /></a> 
                  <a href="https://twitter.com/bronepeace"><FontAwesomeIcon icon={faTwitter} color="#1DA1F2" /></a> 
                  <a href="https://www.linkedin.com/in/ranabhat/"><FontAwesomeIcon icon={faLinkedin} color="#0077B5" /></a> 
                  <a href="https://github.com/ranabhat/"><FontAwesomeIcon icon={faGithub} color="#171515" /></a>
                  </p>

                </div>
              </div>
            </div>
            {/* End of block */}
          </div>
        </div>
      </div>
    </div>
 );
};



export default function AboutComponent(){
    return (
        <>
        <About />
        </>
    )
}