import React, { Component } from 'react';
import Typist from 'react-typist';
import githubLogo from './github-icon.svg';
import linkedinLogo from './iconmonstr-linkedin-5.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typist
          cursor={{ show: false }}
          startDelay={750}
        >
          <h1 className="Name">Howell T</h1>
          <Typist.Backspace count={8} delay={750} />
          <h1 className="Name">Hiwel Tay</h1>
          <Typist.Backspace count={9} delay={750} />
          <h1 className="Name">F@*!?...</h1>
          <Typist.Backspace count={8} delay={1000} />
          <h1 className="Name">Hywel Taylor</h1>
          <h2 className="Job">Software Developer
          <Typist.Delay ms={500} />...?
          </h2>
          <Typist.Backspace count={4} delay={1000} />
        </Typist>

        <footer>
          <div class="logos">
            <a href="https://github.com/SuperBob5000">
              <img src={githubLogo} alt="Github" class="logos"/>
            </a>
          </div>
          <div class="logos">
            <a href="https://www.linkedin.com/in/hywel-taylor-505a3690/">
              <img src={linkedinLogo} alt="Linkedin" class="logos"/>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
