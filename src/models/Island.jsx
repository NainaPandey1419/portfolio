import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import coffee_bag from "../../assets/3d/coffee_bag.glb";

export function CoffeeBagModel() {
  const coffeeRef = useRef();
  const { scene } = useGLTF(coffee_bag);
  const [isDragging, setIsDragging] = useState(false);
  const [previousX, setPreviousX] = useState(0);
  const [rotationVelocity, setRotationVelocity] = useState(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    velocityRef.current = rotationVelocity;
  }, [rotationVelocity]);

  useFrame(() => {
    if (!isDragging && Math.abs(velocityRef.current) > 0.0001) {
      coffeeRef.current.rotation.y += velocityRef.current;
      setRotationVelocity(velocityRef.current * 0.95); // Decay factor
    }
  });

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setPreviousX(e.clientX);
    setRotationVelocity(0);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e) => {
    if (isDragging && coffeeRef.current) {
      const deltaX = e.clientX - previousX;
      const newVelocity = deltaX * 0.01;
      coffeeRef.current.rotation.y += newVelocity;
      setRotationVelocity(newVelocity);
      setPreviousX(e.clientX);
    }
  };

  return React.createElement(
    "mesh",
    {
      ref: coffeeRef,
      position: [0, -11, -8],
      rotation: [-0.2, 0, 0.1],
      scale: [0.5, 0.46, 0.3],
    },
    React.createElement("primitive", { object: scene })
  );
}

export function CoffeeBag() {
  const [isDragging, setIsDragging] = useState(false);
  const [previousX, setPreviousX] = useState(0);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setPreviousX(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return React.createElement(
    "div",
    {
      style: { height: "520px" },
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp,
      onPointerLeave: handlePointerUp,
    },
    React.createElement(
      Canvas,
      { 
        camera: { position: [0, 4, 10], fov: 40 },
      },
      React.createElement("ambientLight", { intensity: 0.5 }),
      React.createElement("directionalLight", { position: [10, 10, 5], intensity: 1 }),
      React.createElement(CoffeeBagModel, null)
    )
  );
}

export default CoffeeBag;