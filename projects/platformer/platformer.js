$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 950 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)



    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)



    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)



    createPlatform(200,0, 25,580)
    createPlatform(220,555, 300,25)
    createPlatform(0,250, 150,25)
    createPlatform(40,370, 160.5,25)
    createPlatform(200,680, 25,100)
    createPlatform(0,680, 200,25)
    createCollectable('database',300,600,1,1)
    createPlatform(415,680,25,100)
    createCannon('right',760,1500,30,30)
    createPlatform(220,555, 900,25)
    createPlatform(1250,555, 300,25)
    createPlatform(1090,680, 200,400)
    createPlatform(1200,420, 150,25)
    createPlatform(1250,300, 150,25)
    createPlatform(1100,210, 25,370)
    createCannon('bottom',1230,3000,30,30)
    createPlatform(975,280, 150,25)
    createPlatform(745,300, 150,25)
    createPlatform(600,430, 150,25)
    createCannon('top',1210,3000,30,30)
    createPlatform(1175,210, 25,370)
    createCollectable('database',1130,380,0,0)
    createPlatform(400,200, 150,25)
    createCollectable('database',650,60,0,0)
    createCollectable('database',1030,500,0,0)
    createPlatform(1000,420, 0.1,160)
    createPlatform(1320,100,150,0.01)
    createCollectable('database',1340,50,0.1,1)
    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
