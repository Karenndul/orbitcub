
       import * as THREE from '../src/three.module.js';
       import {OrbitControls} from '../src/OrbitControls.js';

        //creating scene
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2a3b4c);

        //add camera
        var camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth/window.innerHeight
        );

        //renderer
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        //add geometry
        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
        var cube = new THREE.Mesh(geometry, material);

        scene.add(cube);

        camera.position.z = 7;
        var controls = new OrbitControls(camera, renderer.domElement);

        controls.minDistance = 4;
        controls.maxDistance = 10;

        //controls.enableZoom = false;
        //controls.enableRotate = false; //rotar cubo

        controls.enableDamping = true;
        controls.dampingFactor = 0.5;

        controls.maxPolarAngle = Math.PI / 8; //angulo de rotar del cubo


      
        //animation
        var animate = function(){
            requestAnimationFrame(animate);

            //cube.rotation.x += 0.01;
            //cube.rotation.y += 0.01;

            renderer.render(scene, camera);

        }

        animate();

  