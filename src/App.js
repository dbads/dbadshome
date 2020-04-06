import React from 'react';
// import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import {
  faGithubAlt,
  faQuora,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAddressBook,
} from '@fortawesome/free-regular-svg-icons'
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="box">
      <img src="img/deepak_kheerganga_rock.jpeg" alt="" className="box-img box_pic" />
      <h1>
        Deepak Bharti
        <span className="dbads"> </span>
      </h1>
      <h5>
        Software Engineer @collegedunia
      </h5>
      <p>
        Recently, single handedly created APIs from scratch for <a href="https://prepp.in/">Prepp</a>, 
        Automated the onboarding process @collegedunia, it's on clicks now.
      </p>
      <ul>
        <li className="social_links resume">
          <a href="img/DeepakBharti.pdf">
            <FontAwesomeIcon icon={faAddressBook} />
          </a>
        </li> 
        <li className="social_links github">
          <a href="https://github.com/dbads/">
          <FontAwesomeIcon icon={faGithubAlt} />
          </a>
        </li>
        <li className="social_links linkedin">
          <a href="https://www.linkedin.com/in/dbads/">
          <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li className="social_links twitter">
          <a href="https://twitter.com/_dbads">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="social_links quora">
          <a href="https://www.quora.com/profile/Deepak-Bharti-16">
          <FontAwesomeIcon icon={faQuora} />
          </a>
        </li>
      </ul>
    </div>

  );
}

export default App;
