import React, { Component } from 'react';
import Typist from 'react-typist';
import githubLogo from './github-icon.svg';
import linkedinLogo from './iconmonstr-linkedin-5.svg';
import emailLogo from './iconmonstr-email-11.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeP1: false,
      activeP2: false,
      activeP3: false,
      activeP4: false,
      activeP5: false,
      activeP6: false,
      activeP7: false,
      activeFooter: false
    };
    this.onHeaderTyped = this.onHeaderTyped.bind(this);
    this.handleOnAnimationEnd = this.handleOnAnimationEnd.bind(this);
  }

  onHeaderTyped() {
    this.setState({ activeP1: true });
    document.getElementById("about1");
  }

  handleOnAnimationEnd(e){

    if(e.target.id === "about1"){
      this.setState({activeP2: true});
    }

    if(e.target.id === "about2"){
      this.setState({activeP3: true});
    }

    if(e.target.id === "about3"){
      this.setState({activeP4: true});
    }

    if(e.target.id === "about4"){
      this.setState({activeP5: true});
    }

    if(e.target.id === "about5"){
      this.setState({activeP6: true});
    }

    if(e.target.id === "about6"){
      this.setState({activeP7: true});
    }

    if(e.target.id === "about7"){
      this.setState({activeFooter: true});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="site-content">
        <Typist
          cursor={{ show: false }}
          startDelay={750}
          onTypingDone={this.onHeaderTyped}
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
          <Typist.Delay ms={500} />
        </Typist>

        <div className="main">
          <p id="about1" onAnimationEnd={this.handleOnAnimationEnd} className={this.state.activeP1 ? 'fadeinText': 'invisible'}>
          A regular guy from South Wales that likes to mountain bike, play games,
          drink beer and travel like those instagram girls. I need money to do those things.
          So, I develop software.
          </p>
          <p id="about2" onAnimationEnd={this.handleOnAnimationEnd} className={this.state.activeP2 ? 'fadeinText': 'invisible'}>
          I liked maths in school. I got a bachelors in mathematics. I like computers. I got a masters in computer science.
          </p>
          <p id="about3" onAnimationEnd={this.handleOnAnimationEnd} className={this.state.activeP3 ? 'fadeinText': 'invisible'}>
          I worked as a developer for 3 1/2 years before I decided to travel. Im back now to freelance.
          </p>
          <p id="about4" onAnimationEnd={this.handleOnAnimationEnd} className={this.state.activeP4 ? 'fadeinText': 'invisible'}>
          I worked for a start-up before I joined a great company called<a href="http://www.olmsystems.com/"> OLM </a> working on an array of software such as financial and recording web applications.
          </p>
          <p id="about5" onAnimationEnd={this.handleOnAnimationEnd} className={this.state.activeP5 ? 'fadeinText': 'invisible'}>
          I specialise in server side such as CRUD operations and APIs using tools like Java, Maven, spring, Node.JS, GRAPHQL and most databases.
          </p>
          <p id="about6" onAnimationEnd={this.handleOnAnimationEnd} className={this.state.activeP6 ? 'fadeinText': 'invisible'}>
          I can also code client side using tools like Javascript, react, html and css.
          </p>
          <p id="about7" onAnimationEnd={this.handleOnAnimationEnd} className={this.state.activeP7 ? 'fadeinText': 'invisible'}>
          Check out the links below for more info and demos.
          </p>
        </div>
        </div>

        <div className="footer">
          <div className="githubLogo">
            <a href="https://github.com/SuperBob5000">
              <img onAnimationEnd={this.handleOnAnimationEnd} src={githubLogo} alt="Github" className={this.state.activeFooter ? "github": "invisible"}/>
            </a>
          </div>
          <div className="linkedinLogo">
            <a href="https://www.linkedin.com/in/hywel-taylor-505a3690/">
              <img onAnimationEnd={this.handleOnAnimationEnd} src={linkedinLogo} alt="Linkedin" className={this.state.activeFooter ? "linkedin": "invisible"}/>
            </a>
          </div>
          <div className="emailLogo">
            <a href="mailto:htaylor3005@gmail.com">
              <img onAnimationEnd={this.handleOnAnimationEnd} src={emailLogo} alt="E-Mail" className={this.state.activeFooter ? "email": "invisible"}/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
