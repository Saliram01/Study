import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      className="box"

      drag

      dragConstraints={{
        top: 100,
        left:50,
        right: 1200,
        bottom:400,
      }}

      dragDirectionLock="true"

      whileHover={{
        backgroundColor: 'greenyellow'
      }}

      whileDrag={{
        scale: 0.5,
      }}

      whileTap={{
        scale: 0.9,
      }}

      // initial={{
      //   x:100,
      //   y:100,
      // }}
      // animate={{
      //   x: 1200,
      //   y: 450,
      //   rotate: 360,
      // }}
      // transition={{
      //   duration: 2,
      //   delay:1,
      //   ease: 'anticipate',
      //   repeat: Infinity,
      // }}
    ></motion.div>
  );
}

export default App;
