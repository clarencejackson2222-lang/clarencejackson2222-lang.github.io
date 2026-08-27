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
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms

    // A staggered route across the level, with moving bridges in the gaps.
    createPlatform(0, 300, 180, 20, "#35c98b");
    createPlatform(220, 220, 170, 20, "#f4c95d");
    createPlatform(430, 140, 170, 20, "#ff7f66");
    createPlatform(650, 260, 180, 20, "#5bc0eb");
    createPlatform(900, 170, 170, 20, "#c084fc");
    createPlatform(1120, 300, 180, 20, "#35c98b");
    createPlatform(1320, 430, 50, 50, "#ffcf33");
    createPlatform(500, 500, 150, 20, "#f4c95d", 420, 700, 1.5);
    createPlatform(760, 420, 150, 20, "rgba(8, 220, 248, 0.42)", null, null, 1, 350, 620, 1);
   createBadPlatform(300, 400, 150, 20, "#ff0000", null, null, 1, 250, 500, 1);

    // TODO 3 - Create Collectables

    createCollectable("diamond", 260, 175, 0.5, 0.7);
    createCollectable("grace", 475, 95, 0.5, 0.7);
    createCollectable("kennedi", 945, 125, 0.5, 0.7);
    createCollectable("steve", 1330, 375, 0.5, 0.7);
    

    // TODO 4 - Create Cannons

    // Moving cannons sweep their wall and reverse at each boundary.
    createCannon("top", 180, 1600, 18, 18, 100, 520, 2);
    createCannon("right", 250, 2200, 28, 28, 120, 560, 1.5);
    createCannon("bottom", 760, 1900, 20, 20, 600, 1050, 2);
    createCannon("left", 520, 1300, 24, 24, 180, 650, 2);
    

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
