AFRAME.registerComponent("move", {
  schema: {
    moveY: { type: "number", default: 1 },
  },
	
  tick: function () {

    this.data.moveY = this.data.moveY + 0.01;

    var pos = this.el.getAttribute("position");

    pos.Y = this.data.moveY;

    this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
  }
});
AFRAME.registerComponent("camera-zoom-out", {
  schema: {
    moveZ: { type: "number", default: 10 },
  },
	
  tick: function () {

    this.data.moveZ = this.data.moveZ + 0.01;

    var pos = this.el.getAttribute("position");

    pos.Z = this.data.moveZ;

    this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
  }
});

AFRAME.registerComponent("fall-down", {
  schema: {
    moveY: { type: "number", default: 0 },
  },
	
  tick: function () {
	window.addEventListener("click",(e)=>{
		this.data.moveY = this.data.moveY - 0.0001;
	})
    

    var pos = this.el.getAttribute("position");

    pos.Y = this.data.moveY;

    this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
  }
});