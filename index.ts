import * as THREE from 'three';

class DipokalScene {
    scene: THREE.Scene
    camera: THREE.Camera
    renderer: THREE.WebGLRenderer

    constructor() {
        this.init()
    }

    private init() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0x000000 );
        this.scene.fog = new THREE.Fog( 0xa0a0a0, 10, 50 );
    
        this.camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.01, 100 );
        this.camera.position.set( 0, 3, 7 );
        this.scene.add(this.camera);
    
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.shadowMap.enabled = true
        this.renderer.xr.enabled = true;

        document.querySelector("#screen").appendChild( this.renderer.domElement );

        const dirLight = new THREE.DirectionalLight( 0xffffff );
        dirLight.position.set( -40, 400, -70 );
        dirLight.shadow.camera.top = 150;
        dirLight.shadow.camera.right = 150;
        dirLight.shadow.camera.bottom = -150;
        dirLight.shadow.camera.left = -150;
        dirLight.castShadow = true;
        this.scene.add(dirLight);
        
        this.animate();
    }
  
    public geekMode() {
      console.log("이건 긱모드.")
    }

    private animate() {
        requestAnimationFrame( this.animate.bind(this) );
        this.geekMode()
        this.renderer.render( this.scene, this.camera );
    } 
}

export { DipokalScene }
