var base1Forma = new THREE.CylinderGeometry(5,5,1,20,1,false);
var base2Forma = new THREE.CylinderGeometry(4,4,1,20,1,false);
var base3Forma = new THREE.CylinderGeometry(2,4,10,20,10,false);
var troncoForma = new THREE.CylinderGeometry(2,2,4,20,4,false);
var detalle1Forma = new THREE.CylinderGeometry(4,4,.5,20,.5,false);
var detalle2Forma = new THREE.CylinderGeometry(3,3,.3,20,.3,false);
var detalle3Forma = new THREE.CylinderGeometry(3,3,.3,20,.3,false);
var cubierta1Forma = new THREE.CylinderGeometry(2.5,2.5,1.9,20,1.9,false);
var cubierta2Forma = new THREE.CylinderGeometry(4,2.5,3,20,3,false);
var cabeza1Forma = new THREE.SphereGeometry(1);

var arco1 = new THREE.Shape();
arco1.moveTo(0, 0);
arco1.arc(0, 0, 4, .52, -.52, true);
arco1.lineTo(3.46, -2);
var pico1 = new THREE.ExtrudeGeometry( arco1, {amount: 1, bevelEnabled: false});
pico1.rotateX(Math.PI/2);

var arco2 = new THREE.Shape();
arco2.moveTo(0, 0);
arco2.arc(0, 0, 4, .52, -.52, true);
arco2.lineTo(3.46, -2);
var pico2 = new THREE.ExtrudeGeometry( arco2, {amount: 1, bevelEnabled: false});
pico2.rotateX(Math.PI/2);
pico2.rotateY(Math.PI/2);

var arco3 = new THREE.Shape();
arco3.moveTo(0, 0);
arco3.arc(0, 0, 4, .52, -.52, true);
arco3.lineTo(3.46, -2);
var pico3 = new THREE.ExtrudeGeometry( arco3, {amount: 1, bevelEnabled: false});
pico3.rotateX(Math.PI/2);
pico3.rotateY(Math.PI);

var arco4 = new THREE.Shape();
arco4.moveTo(0, 0);
arco4.arc(0, 0, 4, .52, -.52, true);
arco4.lineTo(3.46, -2);
var pico4 = new THREE.ExtrudeGeometry( arco4, {amount: 1, bevelEnabled: false});
pico4.rotateX(Math.PI/2);
pico4.rotateY(Math.PI*3/2);

base2Forma.translate(0,1,0);
base3Forma.translate(0,6,0);
troncoForma.translate(0,12,0);
detalle2Forma.translate(0,14,0);
detalle1Forma.translate(0,14.3,0);
detalle3Forma.translate(0,14.8,0);
cubierta1Forma.translate(0,15.1,0);
cubierta2Forma.translate(0,17,0);
pico1.translate(0,19.5,0);
pico2.translate(0,19.5,0);
pico3.translate(0,19.5,0);
pico4.translate(0,19.5,0);
cabeza1Forma.translate(0,19.5,0);

var base1Malla = new THREE.Mesh(base1Forma);
var base2Malla= new THREE.Mesh(base2Forma);
var base3Malla= new THREE.Mesh(base3Forma);
var toncoMalla= new THREE.Mesh(troncoForma);
var detalle1Malla= new THREE.Mesh(detalle1Forma);
var detalle2Malla= new THREE.Mesh(detalle2Forma);
var detalle3Malla= new THREE.Mesh(detalle3Forma);
var cubierta1Malla= new THREE.Mesh(cubierta1Forma);
var cubierta2Malla= new THREE.Mesh(cubierta2Forma);
var pico1Malla= new THREE.Mesh(pico1);
var pico2Malla= new THREE.Mesh(pico2);
var pico3Malla= new THREE.Mesh(pico3);
var pico4Malla= new THREE.Mesh(pico4);
var cabeza1Malla= new THREE.Mesh(cabeza1Forma);

var reinaForma = new THREE.Geometry();
reinaForma.merge(base1Malla.geometry, base1Malla.matrix);
reinaForma.merge(base2Malla.geometry, base2Malla.matrix);
reinaForma.merge(base3Malla.geometry, base3Malla.matrix);
reinaForma.merge(toncoMalla.geometry, toncoMalla.matrix);
reinaForma.merge(pico1Malla.geometry, pico1Malla.matrix);
reinaForma.merge(pico2Malla.geometry, pico2Malla.matrix);
reinaForma.merge(pico3Malla.geometry, pico3Malla.matrix);
reinaForma.merge(pico4Malla.geometry, pico4Malla.matrix);
reinaForma.merge(detalle1Malla.geometry, detalle1Malla.matrix);
reinaForma.merge(detalle2Malla.geometry, detalle2Malla.matrix);
reinaForma.merge(detalle3Malla.geometry, detalle3Malla.matrix);
reinaForma.merge(cubierta1Malla.geometry, cubierta1Malla.matrix);
reinaForma.merge(cubierta2Malla.geometry, cubierta2Malla.matrix);
reinaForma.merge(cabeza1Malla.geometry, cabeza1Malla.matrix);
var material= new THREE.MeshNormalMaterial();
var reinaMalla = new THREE.Mesh(reinaForma, material);

reinaMalla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add(reinaMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=50;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);
