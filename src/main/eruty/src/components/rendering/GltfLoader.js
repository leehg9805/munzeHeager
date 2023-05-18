import React, { useEffect, useRef } from "react";

const GltfLoader = () => {
  const canvasRef = useRef(null);
  const GltfRef = useRef(null);

  var element = document.getElementById("GltfLoader");
  useEffect(() => {
    const canvas = canvasRef.current;
    var renderer = new window.THREE.WebGLRenderer({
      alpha: true,
      antialiase: true,
    });
    renderer.setSize(GltfRef.current.clientWidth, GltfRef.current.clientHeight);
    canvas.appendChild(renderer.domElement);

    var scene = new window.THREE.Scene();

    var camera = new window.THREE.PerspectiveCamera(
      500,
      GltfRef.current.clientWidth / GltfRef.current.clientHeight,
      0.1,
      3000
    );

    camera.position.set(0, 1.5, 5);

    var light = new window.THREE.DirectionalLight(0xefefff, 3);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);
    var light = new window.THREE.DirectionalLight(0xffefef, 3);
    light.position.set(-1, -1, -1).normalize();
    scene.add(light);

    window.addEventListener("resize", function () {
      let width = GltfRef.current.clientWidth;
      let height = GltfRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    var loader = new window.THREE.GLTFLoader();
    var mixer;
    var model;
    loader.load(
      "/img/MASCOURT.glb",

      function (gltf) {
        model = gltf.scene;
        model.scale.set(0.35, 0.35, 0.35);
        scene.add(model);

        mixer = new window.THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[1]).play();
      }
    );

    const controls = new window.THREE.OrbitControls(
      camera,
      renderer.domElement
    );
    controls.target.set(0, 1.5, 0);
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 0.5;
    controls.panSpeed = 0.8;
    controls.minDistance = 5;
    controls.maxDistance = 100;

    var clock = new window.THREE.Clock();
    function render() {
      requestAnimationFrame(render);
      var delta = clock.getDelta();
      if (mixer != null) mixer.update(delta);
      renderer.render(scene, camera);
      controls.update();
    }

    render();
  }, []);

  return (
    <div style={{}} id="GltfLoader" ref={GltfRef}>
      <div ref={canvasRef} className="itm" />
    </div>
  );
};

export default GltfLoader;
