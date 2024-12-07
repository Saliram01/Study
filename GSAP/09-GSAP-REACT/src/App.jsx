import "./App.css";
import { useGSAP } from "@gsap/react";
import {gsap} from 'gsap'
import { useRef, useState } from "react";
import ContextSafe from "./components/ContextSafe";

function App() {
  const randomX = gsap.utils.random(-500,500,100);
  const rotateX = gsap.utils.random(-360,360,30);
  const randomY = gsap.utils.random(-500,500,100);

const [xValue, setXValue] = useState(0);
const [yValue, setYValue] = useState(0);
const [roti, setRoti] = useState(0);
const imageRef = useRef();


useGSAP(() => {
  gsap.to(imageRef.current,{
    x: xValue,
    y:yValue,
    duration:1,
    rotate:roti,

  })
},{scope:'main', dependencies:[xValue,roti,yValue]})

  return (
    <>
      <main>
      {/* <ContextSafe/>     */}
          <img
          onClick={() => {
            setXValue(randomX);
            setRoti(rotateX);
            setXValue(randomY)
          }}
          ref={imageRef} src="https://images.vexels.com/content/242241/preview/side-fly-geometric-color-stroke-123fa9.png" alt="" />
      </main>
    </>
  );
}

export default App;
