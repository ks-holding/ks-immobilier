import { useState } from "react";
import { useSpring, config, animated } from "react-spring";

export default function Number(props) {
  const { destination, delay } = props;
  const [flip, set] = useState(false);
  const { number } = useSpring({
    reset: false,
    reverse: false,
    from: { number: 1 },
    number: destination,
    delay: delay,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return <animated.div>{number.to(n => n.toFixed(0))}</animated.div>;
}
