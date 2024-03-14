import React, { useRef, useEffect, useState } from 'react';
import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from '../assets/3d/plane.glb';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const [loading, setLoading] = useState(true);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (actions && !loading) {
      if (isRotating) {
        actions["Take 001"].play();
      } else {
        actions["Take 001"].stop();
      }
    }
  }, [actions, isRotating, loading]);

  useEffect(() => {
    if (animations) {
      setLoading(false);
    }
  }, [animations]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
