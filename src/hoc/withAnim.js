import React from "react";
import TextyAnim from "rc-texty";

const WithAnim = ({ content, animDuration, delayTime }) => (
  <TextyAnim
    mode="smooth"
    delay={delayTime}
    duration={e => {
      if (e.index === 0) {
        return 1000;
      }
      return animDuration;
    }}
  >
    {content}
  </TextyAnim>
);

export default WithAnim;
