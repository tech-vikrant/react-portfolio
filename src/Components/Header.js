import React, { Component } from "react";
import Typical from "react-typical";

class Header extends Component {

   constructor(props) {
      super(props)
   
      this.state = {
         animated_text_step: []
      }
   }

   static getDerivedStateFromProps(props, state) {
      if (props.data) {
         return {animated_text_step: props.data.animatedtext}
      } else {
         return { animated_text_step : []}
      }
   }
   
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var networks = this.props.data.social.map(network=> {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h3 className="sub-title">Hello,This is me!</h3>
            <h1 className="responsive-headline">{name}</h1>
            {this.state.animated_text_step && (
               <Typical
                  className="animated-text"
                  steps={this.state.animated_text_step}
                  loop={Infinity}
                  wrapper="h2"
               />
            )}
           
            {/* <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3> */}
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
