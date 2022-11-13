import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "../Button/Button";
import css from "./Card.module.css";
import { useDrag } from "@use-gesture/react";
import useCertificate from "../hooks/useCertificate";
// import { FiPlus, FiPlusCircle } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { nanoid } from "nanoid";

function Card({
  title,
  price,
  img,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
}) {
  const [show, setShown] = useState(false);
  const { saveInfo } = useCertificate();

  const props3 = useSpring({
    transform: show ? "scale(1.02)" : "scale(1)",
    boxShadow: show
      ? "0 25px 35px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 4));

  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }

  const translateYoffset =
    2 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));

  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  const [props, set] = useSpring(() => ({
    to: {
      transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
      top: `${
        offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
      }%`,
      opacity: `${distanceFactor === 1 ? 1 : distanceFactor * 0.4}`,
    },
    config: {
      animationConfig,
    },
  }));

  set({
    to: {
      transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
      top: `${
        offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
      }%`,
      opacity: `${distanceFactor === 1 ? 1 : distanceFactor * 0.4}`,
    },
    config: { animationConfig },
  });

  const clamp = (val, min, max) => {
    return val > max ? max : val < min ? min : val;
  };

  const bind = useDrag(({ down, delta }) => {
    translateY = clamp(translateY, -110, -30);
    if (offsetFromMiddle === 0 && down) {
      translateY += delta[1] / (offsetRadius + 1);
      if (translateY > -40) {
        moveSlide(-1);
      }
      if (translateY < -100) {
        moveSlide(1);
      }
    }
  });

  const handleSelect = (e) => {
    e.stopPropagation();

    const cardId = nanoid(10);

    saveInfo({
      id: cardId,
      title,
      price,
      check: true,
    });
  };

  return (
    <animated.div
      {...bind()}
      style={{
        ...props,
        zIndex: Math.abs(Math.abs(offsetFromMiddle) - 10),
        position: "absolute",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: `${distanceFactor !== 1 ? "blur(3px)" : "blur(0)"}`,
        boxShadow: `${
          distanceFactor === 1 ? "rgb(226 214 214 / 15%) 0px 2px 8px" : "0"
        }`,
      }}
    >
      <animated.div
        className={css.card}
        style={props3}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
        onClick={() => moveSlide(offsetFromMiddle)}
      >
        <img src={img} alt={title} className={css.cardImg} />

        <div className={css.cardBtn}>
          {distanceFactor === 1 ? (
            <Button
              type="button"
              icon={<FiPlus className={css.cardButtonIcon} />}
              // text="Вибрати"
              onClick={(e) => handleSelect(e)}
            />
          ) : (
            <></>
          )}
        </div>
      </animated.div>
    </animated.div>
  );
}

export default Card;
