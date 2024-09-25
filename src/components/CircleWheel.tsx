import React from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(MotionPathPlugin);

const CircleWheel: React.FC = () => {

  useGSAP(() => {
    const orbitPath = MotionPathPlugin.convertToPath("#orbit", false)[0];
    orbitPath.id = "circlePath";
    document.querySelector("svg")?.prepend(orbitPath);

    gsap.defaults({
      ease: "none",
      repeat: -1
    })

    gsap.to('#element1', {
      duration: 3,
      motionPath: {
        path: orbitPath,
        align: orbitPath,
        alignOrigin: [0.5, 0.5]
      }
    });

    gsap.to('#element2', {
      duration: 3,
      delay: -0.5,
      motionPath: {
        path: orbitPath,
        align: orbitPath,
        alignOrigin: [0.5, 0.5]
      }
    });

    gsap.to('#element3', {
      duration: 3,
      delay: -1,
      motionPath: {
        path: orbitPath,
        align: orbitPath,
        alignOrigin: [0.5, 0.5]
      }
    });

    gsap.to('#element4', {
      duration: 3,
      delay: -1.5,
      motionPath: {
        path: orbitPath,
        align: orbitPath,
        alignOrigin: [0.5, 0.5]
      }
    });

    gsap.to('#element5', {
      duration: 3,
      delay: -2,
      motionPath: {
        path: orbitPath,
        align: orbitPath,
        alignOrigin: [0.5, 0.5]
      }
    });

    gsap.to('#element6', {
      duration: 3,
      delay: -2.5,
      motionPath: {
        path: orbitPath,
        align: orbitPath,
        alignOrigin: [0.5, 0.5]
      }
    });

    
  }, []);

  return (
    <div className="main-container">
        <svg width="530" height="530" viewBox="0 0 530 530" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle id="orbit" opacity="0.2" cx="265" cy="265" r="264.5" stroke="#42567A"/>
        </svg>
        <button id="element1" className="orbit-element">1</button>
        <button id="element2" className="orbit-element">2</button>
        <button id="element3" className="orbit-element">3</button>
        <button id="element4" className="orbit-element">4</button>
        <button id="element5" className="orbit-element">5</button>
        <button id="element6" className="orbit-element">6</button>
    </div>
  );
};

export default CircleWheel;
