// import * as planck from 'planck-js';
// import paper from 'paper';

import * as fabric from 'fabric';

const canvas = new fabric.Canvas('c');

{
    // Add a rectangle
    const rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 100,
    height: 100,
    });
    canvas.add(rect);

    // Enable dragging and interaction by default
    rect.set({ selectable: true });
    canvas.setActiveObject(rect);
}

/*

// Create and insert canvas
const canvas = document.createElement('canvas');
canvas.width = 1024;
canvas.height = 1024;
document.body.appendChild(canvas);

// Setup Paper.js with the canvas
paper.setup(canvas);

const SCALE = 50; // meters to pixels scale

// Create Planck.js physics world with gravity down
const world = new planck.World(planck.Vec2(0, -10));

// Create static ground body
const ground = world.createBody();
ground.createFixture(planck.Box(8, 0.2));

// Create dynamic box body
const box = world.createBody({
  type: 'dynamic',
  position: planck.Vec2(0, 10),
});
box.createFixture(planck.Box(1, 1), { density: 1.0, friction: 0.3 });

// Create Paper.js rectangle to represent the box
const boxShape = new paper.Path.Rectangle({
  point: [0, 0],
  size: [SCALE * 2, SCALE * 2], // 2 meters = 2 * SCALE pixels
  fillColor: 'red',
  strokeColor: 'black',
});
boxShape.position = new paper.Point(
  canvas.width / 2,
  canvas.height - 4 * SCALE
);

// Create Paper.js rectangle for the ground
const groundShape = new paper.Path.Rectangle({
  point: [0, 0],
  size: [SCALE * 16, SCALE * 0.4], // 16m x 0.4m
  fillColor: 'gray',
  strokeColor: 'black',
});
groundShape.position = new paper.Point(
  canvas.width / 2,
  canvas.height - 0.2 * SCALE
);

// Animation loop using Paper.js view.onFrame
paper.view.onFrame = () => {
  world.step(1 / 60);

  // Update box position from physics body
  const pos = box.getPosition();
  // Convert Planck coordinates (meters) to canvas pixels
  boxShape.position = new paper.Point(
    canvas.width / 2 + pos.x * SCALE,
    canvas.height - pos.y * SCALE
  );

  // You can also update rotation if needed
  boxShape.rotation = -box.getAngle() * (180 / Math.PI);
};

*/