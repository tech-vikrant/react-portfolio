import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map((testimonials) => {
        return (
          <div key={testimonials.user}>
            <img src={testimonials.image} alt="user" />
            <div className="myCarousel">
              <h3>{testimonials.user}</h3>
              <h4>{testimonials.role}</h4>
              <p>{testimonials.text}</p>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={3000}
            >
              {testimonials}
            </Carousel>
          </div>
        </div>
      </section>
    );
  }
}
