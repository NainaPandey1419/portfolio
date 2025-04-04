import { a } from "@react-spring/three";
import { useEffect, useRef, useCallback } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import islandScene from "../assets/3d/island.glb";

export function Island({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) {
  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    lastX.current = clientX;
  }, [setIsRotating]);

  const handlePointerUp = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  }, [setIsRotating]);

  const handlePointerMove = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating && islandRef.current) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }, [isRotating, viewport.width]);

  const handleKeyDown = useCallback(
    (event) => {
      if (!islandRef.current) return;
      if (event.key === "ArrowLeft") {
        if (!isRotating) setIsRotating(true);
        islandRef.current.rotation.y += 0.005 * Math.PI;
        rotationSpeed.current = 0.0125;
      } else if (event.key === "ArrowRight") {
        if (!isRotating) setIsRotating(true);
        islandRef.current.rotation.y -= 0.005 * Math.PI;
        rotationSpeed.current = -0.0125;
      }
    },
    [isRotating, setIsRotating]
  );

  const handleKeyUp = useCallback(
    (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setIsRotating(false);
      }
    },
    [setIsRotating]
  );

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp]);

  useFrame(() => {
    if (!islandRef.current) return;

    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.0001) {
        rotationSpeed.current = 0;
      }
      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;
      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    <a.group ref={islandRef} {...props}>
      <mesh geometry={nodes.polySurface944_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface945_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface946_tree2_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface947_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface948_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface949_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.pCube11_rocks1_0.geometry} material={materials.PaletteMaterial001} />
    </a.group>
  );
}

export default Island;
