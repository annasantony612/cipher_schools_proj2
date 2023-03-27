import React from 'react';
import social from '../assets/social.png';
import github from '../assets/github.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram2 from '../assets/instagram2.png';
import www from '../assets/www.png';
const Web = () => {
  return (
    <div>
        <h1 className="thin-line"></h1>

        <div className="container-Abt">
            <div className="left-flex">
              <p>On The Web</p>
            </div>
            <div className="right-flex">
              <button>Edit</button>
            </div>
            
          </div>
          <div className="web">
                 <div className="web-left">
                            <div className='social'>
                                Linkedin
                            </div>
                            <div className='social-area'>
                                <ul>
                                    <li><img  src={social}/></li>
                                    <li>Linkdin</li>
                                </ul>
                            

                            </div>
                </div>

                <div className="web-right">
                            <div className='social'>
                                Github
                            </div>
                            <div className='social-area'>
                                <ul>
                                    <li><img  src={github}/></li>
                                    <li>Github</li>
                                </ul>
                            </div>
                </div>
         
          </div>
          <br/>
          <div className="web">
                 <div className="web-left">
                            <div className='social'>
                                Facebook
                            </div>
                            <div className='social-area'>
                                <ul>
                                    <li><img  src={facebook}/></li>
                                    <li>Facebook</li>
                                </ul>
                            

                            </div>
                </div>

                <div className="web-right">
                            <div className='social'>
                                Twitter
                            </div>
                            <div className='social-area'>
                                <ul>
                                    <li><img  src={twitter}/></li>
                                    <li>Twitter</li>
                                </ul>
                            </div>
                </div>
         
          </div>
          <br />
          <div className="web">
                 <div className="web-left">
                            <div className='social'>
                               Instagram
                            </div>
                            <div className='social-area'>
                                <ul>
                                    <li><img  src={instagram2}/></li>
                                    <li>Instagram</li>
                                </ul>
                            

                            </div>
                </div>

                <div className="web-right">
                            <div className='social'>
                                Website
                            </div>
                            <div className='social-area'>
                                <ul>
                                    <li><img  src={social}/></li>
                                    <li>Your Website</li>
                                </ul>
                            </div>
                </div>
         
          </div>
    </div>
  )
}

export default Web