import React, { Component } from "react";
import css from "./VerticalCarousel.module.css";
import Card from "../Card/Card";

function mod(a, b) {
  return ((a % b) + b) % b;
}

class VerticalCarousel extends Component {
  state = {
    index: 0,
    goToSlide: null,
    prevPropsGoToSlide: 0,
    newSlide: false,
  };

  componentDidMount = () => {
    document.addEventListener("keydown", (event) => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      if (event.keyCode === 38) {
        this.moveSlide(-1);
      }
      if (event.keyCode === 40) {
        this.moveSlide(1);
      }
    });
  };

  static defaultProps = {
    offsetRadius: 2,
    animationConfig: { tension: 170, friction: 26 },
  };

  modBySlidesLength = (index) => {
    return mod(index, this.props.cards.length);
  };

  moveSlide = (direction) => {
    this.setState({
      index: this.modBySlidesLength(this.state.index + direction),
      goToSlide: null,
    });
  };

  clampOffsetRadius(offsetRadius) {
    const { cards } = this.props;
    const upperBound = Math.floor((cards.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  }

  getPresentableSlides() {
    const { cards } = this.props;
    const { index } = this.state;
    let { offsetRadius } = this.props;
    offsetRadius = this.clampOffsetRadius(offsetRadius);
    const presentableSlides = [];

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(cards[this.modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  }

  render() {
    const { animationConfig, offsetRadius } = this.props;

    return (
      <div className={css.Wrapper}>
        {this.getPresentableSlides().map((card, presentableIndex) => (
          <Card
            key={card.key}
            title={card.content.title}
            price={card.content.price}
            img={card.content.img}
            moveSlide={this.moveSlide}
            offsetRadius={this.clampOffsetRadius(offsetRadius)}
            index={presentableIndex}
            animationConfig={animationConfig}
          />
        ))}
      </div>
    );
  }
}

export default VerticalCarousel;
