"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const ThreeJSLogoScene = () => {
  const sceneRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // 1 for square aspect ratio
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    // Match the size of the container
    const container = sceneRef.current;
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // Adjust camera aspect ratio on resize
    const handleResize = () => {
      const { offsetWidth, offsetHeight } = container;
      camera.aspect = offsetWidth / offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(offsetWidth, offsetHeight);
    };

    window.addEventListener("resize", handleResize);

    // Add a blue wireframe torus
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100); // Fewer segments for less wireframes
    const material = new THREE.WireframeGeometry(geometry);
    const torus = new THREE.LineSegments(material, new THREE.LineBasicMaterial({ color: 0x0000ff }));
    scene.add(torus);

    // Position the camera
    camera.position.z = 30;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Scale transition
      const targetScale = 1 + Math.sin(Date.now() * 0.001) * 0.2; 
      setScale((prevScale) => prevScale + (targetScale - prevScale) * 0.01); 

      torus.scale.set(scale, scale, scale);
      torus.rotation.x += 0.008;
      torus.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="w-full h-full bg-black" // Ensures the scene is visible in its container
    />
  );
};

export default ThreeJSLogoScene;