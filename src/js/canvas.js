import gsap from 'gsap'
import {
  createImage,
  createImageAsync,
  isOnTopOfPlatform,
  collisionTop,
  isOnTopOfPlatformCircle,
  hitBottomOfPlatform,
  hitSideOfPlatform,
  objectsTouch
} from './utils.js'

import platform from '../img/platform.png'
import background from '../img/pre.png'
import platformSmallTall from '../img/platformSmallTall.png'
import block from '../img/block.png'
import blockTri from '../img/blockTri.png'
import mdPlatform from '../img/mdPlatform.png'
import lgPlatform from '../img/lgPlatform.png'
import tPlatform from '../img/tPlatform.png'
import xtPlatform from '../img/xtPlatform.png'
import flagPoleSprite from '../img/flagPole.png'

//import spriteMarioRunLeft from '../img/spriteMarioRunLeft.png'
//import spriteMarioRunRight from '../img/spriteMarioRunRight.png'
//import spriteMarioStandLeft from '../img/spriteMarioStandLeft.png'
//import spriteMarioStandRight from '../img/spriteMarioStandRight.png'
//import spriteMarioJumpRight from '../img/spriteMarioJumpRight.png'
//import spriteMarioJumpLeft from '../img/spriteMarioJumpLeft.png'

//test
import spriteMarioRunLeft from '../img/RunL.png'
import spriteMarioRunRight from '../img/RunR.png'
import spriteMarioStandRight from '../img/IdleR.png'
import spriteMarioStandLeft from '../img/IdleL.png'
import spriteMarioJumpRight from '../img/JumpR.png'
import spriteMarioJumpLeft from '../img/JumpL.png'



import spriteFireFlowerRunLeft from '../img/Run1.png'
import spriteFireFlowerRunRight from '../img/Run.png'
import spriteFireFlowerStandRight from '../img/Idle.png'
import spriteFireFlowerStandLeft from '../img/Idle1.png'
import spriteFireFlowerJumpRight from '../img/Jump.png'
import spriteFireFlowerJumpLeft from '../img/Jump1.png'


import spriteFireFlower from '../img/spriteFireFlower.png'

import spriteEnemy from '../img/Walk.png'
import { audio } from './audio.js'
import { images } from './images.js'
import 'regenerator-runtime/runtime';

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let gravity = 1.5

class Player {
  constructor() {
    this.speed = 10;
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };

    this.width = 200;
    this.height = 200;

    this.frameBuffer = 5;
    this.elapsedFrames = 0;

    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(spriteMarioStandRight),
        left: createImage(spriteMarioStandLeft),
        fireFlower: {
          right: createImage(spriteFireFlowerStandRight),
          left: createImage(spriteFireFlowerStandLeft),
        },
      },
      run: {
        right: createImage(spriteMarioRunRight),
        left: createImage(spriteMarioRunLeft),
        fireFlower: {
          right: createImage(spriteFireFlowerRunRight),
          left: createImage(spriteFireFlowerRunLeft),
        },
      },
      jump: {
        right: createImage(spriteMarioJumpRight),
        left: createImage(spriteMarioJumpLeft),
        fireFlower: {
          right: createImage(spriteFireFlowerJumpRight),
          left: createImage(spriteFireFlowerJumpLeft),
        },
      },
    };

    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 128;
    this.powerUps = {
      fireFlower: false,
    };
    this.invincible = false;
    this.opacity = 1;
  }

  draw() {
    c.save();
    
    c.globalAlpha = this.opacity;
    c.globalAlpha = this.opacity
    c.fillStyle = 'rgba(255, 0, 0, .2)'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
    c.drawImage(
      this.currentSprite,
      this.currentCropWidth * this.frames,
      0,
      this.currentCropWidth,
      128,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    c.restore();
  }

  update() {
    this.elapsedFrames++;
    if (this.elapsedFrames % this.frameBuffer === 0) {
      this.frames++;
    }

    this.checkResetFrames();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;

    if (this.invincible) {
      if (this.opacity === 1) this.opacity = 0;
      else this.opacity = 1;
    } else this.opacity = 1;

    this.draw();
  }

  checkResetFrames() {
    if (this.frames >= 8) {
      const { currentSprite, sprites } = this;
      if (
        (currentSprite === sprites.stand.right ||
          currentSprite === sprites.stand.left ||
          currentSprite === sprites.stand.fireFlower.left ||
          currentSprite === sprites.stand.fireFlower.right) ||
        (currentSprite === sprites.run.right ||
          currentSprite === sprites.run.left ||
          currentSprite === sprites.run.fireFlower.right ||
          currentSprite === sprites.run.fireFlower.left) ||
        (currentSprite === sprites.jump.right ||
          currentSprite === sprites.jump.left ||
          currentSprite === sprites.jump.fireFlower.right ||
          currentSprite === sprites.jump.fireFlower.left)
      ) {
        this.resetFrames();
      }
    }
  }

  resetFrames() {
    this.frames = 0;
  }
}


class Platform {
  constructor({ x, y, image, block, text }) {
    this.position = {
      x,
      y
    }

    this.velocity = {
      x: 0
    }

    this.image = image
    this.width = image.width
    this.height = image.height
    this.block = block
    this.text = text
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)

    if (this.text) {
      c.font = '20px Arial'
      c.fillStyle = 'white'
      c.fillText(this.text, this.position.x, this.position.y)
    }
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
  }
}

class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }

    this.velocity = {
      x: 0
    }

    this.image = image
    this.width = image.width
    this.height = image.height
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
  }
}

class Enemy {
  constructor({
    position,
    velocity,
    distance = {
      limit: 50,
      traveled: 0
    }
  }) {
    this.position = {
      x: position.x,
      y: position.y
    }

    this.velocity = {
      x: velocity.x,
      y: velocity.y
    }

    this.width = 100;
    this.height = 100;

    this.image = createImage(spriteEnemy);
    this.frames = 0;

    this.distance = distance;
    this.frameBuffer = 3;
    this.elapsedFrames = 0;
  }

  draw() {
    const spriteWidth = this.image.width / 9;
    const spriteHeight = 128;
  
    c.save(); 

    if (this.velocity.x < 0) {
      c.scale(-1, 1); 
    }
  
    c.drawImage(
      this.image,
      (spriteWidth * this.frames),
      0,
      spriteWidth,
      spriteHeight,
      (this.velocity.x < 0 ? -this.position.x - this.width : this.position.x),
      this.position.y,
      this.width,
      this.height
    );
  
    c.restore(); 
  }
  

  update() {
    this.elapsedFrames++;
    if (this.elapsedFrames % this.frameBuffer === 0) {
      this.frames++;
      }
      if (this.frames >= 9) this.frames = 2;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity;

      // Walk the enemy back and forth
      this.distance.traveled += Math.abs(this.velocity.x);

      if (this.distance.traveled > this.distance.limit) {
        this.distance.traveled = 0;
        this.velocity.x = -this.velocity.x;
      }
    
  }
}


class FireFlower {
  constructor({ position, velocity }) {
    this.position = {
      x: position.x,
      y: position.y
    }

    this.velocity = {
      x: velocity.x,
      y: velocity.y
    }

    this.width = 56
    this.height = 60

    this.image = createImage(spriteFireFlower)
    this.frames = 0
  }

  draw() {
    // c.fillStyle = 'red'
    // c.fillRect(this.position.x, this.position.y, this.width, this.height)

    c.drawImage(
      this.image,
      56 * this.frames,
      0,
      56,
      60,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }

  update() {
    this.frames++
    if (this.frames >= 75) this.frames = 0
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity
  }
}

class Particle {
  constructor({
    position,
    velocity,
    radius,
    color = '#654428',
    fireball = false,
    fades = false
  }) {
    this.position = {
      x: position.x,
      y: position.y
    }

    this.velocity = {
      x: velocity.x,
      y: velocity.y
    }

    this.radius = radius
    this.ttl = 300
    this.color = color
    this.fireball = fireball
    this.opacity = 1
    this.fades = fades
  }

  draw() {
    c.save()
    c.globalAlpha = this.opacity
    c.beginPath()
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
    c.restore()
  }

  update() {
    this.ttl--
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.radius + this.velocity.y <= canvas.height)
      this.velocity.y += gravity * 0.4

    if (this.fades && this.opacity > 0) {
      this.opacity -= 0.01
    }

    if (this.opacity < 0) this.opacity = 0
  }
}

let platformImage
let platformSmallTallImage
let blockTriImage
let lgPlatformImage
let tPlatformImage
let xtPlatformImage
let blockImage

let player = new Player()
let platforms = []
let genericObjects = []
let enemies = []
let particles = []
let fireFlowers = []

let lastKey
let keys

let scrollOffset
let flagPole
let flagPoleImage
let game
let currentLevel = 1

function selectLevel(currentLevel) {
  if (!audio.musicLevel1.playing()) audio.musicLevel1.play()
  switch (currentLevel) {
    case 1:
      init()
      break
    case 2:
      initLevel2()
      break
  }
}

async function init() {
  player = new Player()
  keys = {
    right: {
      pressed: false
    },
    left: {
      pressed: false
    }
  }
  scrollOffset = 0

  game = {
    disableUserInput: false
  }

  platformImage = await createImageAsync(platform)
  platformSmallTallImage = await createImageAsync(platformSmallTall)
  blockTriImage = await createImageAsync(blockTri)
  blockImage = await createImageAsync(block)
  lgPlatformImage = await createImageAsync(lgPlatform)
  tPlatformImage = await createImageAsync(tPlatform)
  xtPlatformImage = await createImageAsync(xtPlatform)
  flagPoleImage = await createImageAsync(flagPoleSprite)

  flagPole = new GenericObject({
    x: 6968 + 600,
    // x: 500,
    y: canvas.height - lgPlatformImage.height - flagPoleImage.height,
    image: flagPoleImage
  })

  fireFlowers = [
    new FireFlower({
      position: {
        x: 400,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      }
    })
  ]

  player = new Player()

  const enemyWidth = 43.33
  enemies = [
    new Enemy({
      position: {
        x: 908 + lgPlatformImage.width - enemyWidth,
        y: 100
      },
      velocity: {
        x: -0.3,
        y: 0
      },
      distance: {
        limit: 400,
        traveled: 0
      }
    }),
    new Enemy({
      position: {
        x: 3249 + lgPlatformImage.width - enemyWidth,
        y: 100
      },
      velocity: {
        x: -0.3,
        y: 0
      },
      distance: {
        limit: 400,
        traveled: 0
      }
    }),
    new Enemy({
      position: {
        x: 3249 + lgPlatformImage.width - enemyWidth - enemyWidth,
        y: 100
      },
      velocity: {
        x: -0.3,
        y: 0
      },
      distance: {
        limit: 400,
        traveled: 0
      }
    }),
    new Enemy({
      position: {
        x:
          3249 +
          lgPlatformImage.width -
          enemyWidth -
          enemyWidth -
          enemyWidth,
        y: 100
      },
      velocity: {
        x: -0.3,
        y: 0
      },
      distance: {
        limit: 400,
        traveled: 0
      }
    }),
    new Enemy({
      position: {
        x:
          3249 +
          lgPlatformImage.width -
          enemyWidth -
          enemyWidth -
          enemyWidth -
          enemyWidth,
        y: 100
      },
      velocity: {
        x: -0.3,
        y: 0
      },
      distance: {
        limit: 400,
        traveled: 0
      }
    }),
    new Enemy({
      position: {
        x: 5135 + xtPlatformImage.width / 2 + enemyWidth,
        y: 100
      },
      velocity: {
        x: -0.3,
        y: 0
      },
      distance: {
        limit: 100,
        traveled: 0
      }
    }),
    new Enemy({
      position: {
        x: 6968,
        y: 0
      },
      velocity: {
        x: -0.3,
        y: 0
      },
      distance: {
        limit: 100,
        traveled: 0
      }
    })
  ]
  particles = []
  platforms = [
    new Platform({
      x: 908 + 100,
      y: 300,
      image: blockTriImage,
      block: true
    }),
    new Platform({
      x: 908 + 100 + blockImage.width,
      y: 100,
      image: blockImage,
      block: true
    }),
    new Platform({
      x: 1991 + lgPlatformImage.width - tPlatformImage.width,
      y: canvas.height - lgPlatformImage.height - tPlatformImage.height,
      image: tPlatformImage,
      block: false
    }),
    new Platform({
      x: 1991 + lgPlatformImage.width - tPlatformImage.width - 100,
      y:
        canvas.height -
        lgPlatformImage.height -
        tPlatformImage.height +
        blockImage.height,
      image: blockImage,
      block: true
    }),
    new Platform({
      x: 5712 + xtPlatformImage.width + 175,
      y: canvas.height - xtPlatformImage.height,
      image: blockImage,
      block: true,
      text: 5712 + xtPlatformImage.width + 175
    }),
    new Platform({
      x: 6116 + 175,
      y: canvas.height - xtPlatformImage.height,
      image: blockImage,
      block: true
    }),
    new Platform({
      x: 6116 + 175 * 2,
      y: canvas.height - xtPlatformImage.height,
      image: blockImage,
      block: true
    }),
    new Platform({
      x: 6116 + 175 * 3,
      y: canvas.height - xtPlatformImage.height - 100,
      image: blockImage,
      block: true
    }),
    new Platform({
      x: 6116 + 175 * 4,
      y: canvas.height - xtPlatformImage.height - 200,
      image: blockTriImage,
      block: true
    }),
    new Platform({
      x: 6116 + 175 * 4 + blockTriImage.width,
      y: canvas.height - xtPlatformImage.height - 200,
      image: blockTriImage,
      block: true,
      text: 6116 + 175 * 4 + blockTriImage.width
    }),
    new Platform({
      x: 6968 + 300,
      y: canvas.height - lgPlatformImage.height,
      image: lgPlatformImage,
      block: true,
      text: 6968 + 300
    })
  ]
  genericObjects = [
    new GenericObject({
      x: -1,
      y: -75,
      image: createImage(background)
    }),
  ]

  scrollOffset = 0

  const platformsMap = [
    'lg',
    'lg',
    'gap',
    'lg',
    'gap',
    'gap',
    'lg',
    'gap',
    't',
    'gap',
    'xt',
    'gap',
    'xt',
    'gap',
    'gap',
    'xt'
  ]

  let platformDistance = 0

  platformsMap.forEach((symbol) => {
    switch (symbol) {
      case 'lg':
        platforms.push(
          new Platform({
            x: platformDistance,
            y: canvas.height - lgPlatformImage.height,
            image: lgPlatformImage,
            block: true,
            text: platformDistance
          })
        )

        platformDistance += lgPlatformImage.width - 2

        break

      case 'gap':
        platformDistance += 175

        break

      case 't':
        platforms.push(
          new Platform({
            x: platformDistance,
            y: canvas.height - tPlatformImage.height,
            image: tPlatformImage,
            block: true
          })
        )

        platformDistance += tPlatformImage.width - 2

        break

      case 'xt':
        platforms.push(
          new Platform({
            x: platformDistance,
            y: canvas.height - xtPlatformImage.height,
            image: xtPlatformImage,
            block: true,
            text: platformDistance
          })
        )

        platformDistance += xtPlatformImage.width - 2

        break
    }
  })
}

async function initLevel2() {
  player = new Player()
  keys = {
    right: {
      pressed: false
    },
    left: {
      pressed: false
    }
  }
  scrollOffset = 0

  game = {
    disableUserInput: false
  }

  blockTriImage = await createImageAsync(blockTri)
  blockImage = await createImageAsync(block)
  lgPlatformImage = await createImageAsync(images.levels[2].lgPlatform)
  tPlatformImage = await createImageAsync(tPlatform)
  xtPlatformImage = await createImageAsync(xtPlatform)
  flagPoleImage = await createImageAsync(flagPoleSprite)
  const mountains = await createImageAsync(images.levels[2].mountains)
  const mdPlatformImage = await createImageAsync(images.levels[2].mdPlatform)

  flagPole = new GenericObject({
    x: 7680,
    // x: 500,
    y: canvas.height - lgPlatformImage.height - flagPoleImage.height,
    image: flagPoleImage
  })

  fireFlowers = [
    new FireFlower({
      position: {
        x: 4734 - 28,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      }
    })
  ]

  player = new Player()

  const enemyWidth = 43.33
  enemies = [
    new Enemy({
      // single block enemy
      position: {
        x: 903 + mdPlatformImage.width - enemyWidth,
        y: 100
      },
      velocity: {
        x: -2,
        y: 0
      },
      distance: {
        limit: 700,
        traveled: 0
      }
    }),
    new Enemy({
      // single block enemy
      position: {
        x:
          1878 +
          lgPlatformImage.width +
          155 +
          200 +
          200 +
          200 +
          blockImage.width / 2 -
          enemyWidth / 2,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      distance: {
        limit: 0,
        traveled: 0
      }
    }),
    new Enemy({
      position: {
        x: 3831 + lgPlatformImage.width - enemyWidth,
        y: 100
      },
      velocity: {
        x: -1,
        y: 0
      },
      distance: {
        limit: lgPlatformImage.width - enemyWidth,
        traveled: 0
      }
    }),

    new Enemy({
      position: {
        x: 4734,
        y: 100
      },
      velocity: {
        x: 1,
        y: 0
      },
      distance: {
        limit: lgPlatformImage.width - enemyWidth,
        traveled: 0
      }
    })
  ]
  particles = []
  platforms = [
    new Platform({
      x: 903 + mdPlatformImage.width + 115,
      y: 300,
      image: blockTriImage,
      block: true
    }),
    new Platform({
      x: 903 + mdPlatformImage.width + 115 + blockTriImage.width,
      y: 300,
      image: blockTriImage,
      block: true
    }),
    new Platform({
      x: 1878 + lgPlatformImage.width + 175,
      y: 360,
      image: blockImage,
      block: true
    }),
    new Platform({
      x: 1878 + lgPlatformImage.width + 155 + 200,
      y: 300,
      image: blockImage,
      block: true
    }),
    new Platform({
      x: 1878 + lgPlatformImage.width + 155 + 200 + 200,
      y: 330,
      image: blockImage,
      block: true
    }),
    new Platform({
      x: 1878 + lgPlatformImage.width + 155 + 200 + 200 + 200,
      y: 240,
      image: blockImage,
      block: true
    }),
    new Platform({
      x: 4734 - mdPlatformImage.width / 2,
      y: canvas.height - lgPlatformImage.height - mdPlatformImage.height,
      image: mdPlatformImage
    }),
    new Platform({
      x: 5987,
      y: canvas.height - lgPlatformImage.height - mdPlatformImage.height,
      image: mdPlatformImage
    }),
    new Platform({
      x: 5987,
      y: canvas.height - lgPlatformImage.height - mdPlatformImage.height * 2,
      image: mdPlatformImage
    }),
    new Platform({
      x: 6787,
      y: canvas.height - lgPlatformImage.height - mdPlatformImage.height,
      image: mdPlatformImage
    }),
    new Platform({
      x: 6787,
      y: canvas.height - lgPlatformImage.height - mdPlatformImage.height * 2,
      image: mdPlatformImage
    }),
    new Platform({
      x: 6787,
      y: canvas.height - lgPlatformImage.height - mdPlatformImage.height * 3,
      image: mdPlatformImage
    })
  ]
  genericObjects = [
    new GenericObject({
      x: -1,
      y: -1,
      image: createImage(images.levels[2].background)
    }),
    new GenericObject({
      x: -1,
      y: canvas.height - mountains.height,
      image: mountains
    })
  ]

  scrollOffset = 0

  const platformsMap = [
    'lg',
    'md',
    'gap',
    'gap',
    'gap',
    'lg',
    'gap',
    'gap',
    'gap',
    'gap',
    'gap',
    'gap',
    'lg',
    'lg',
    'gap',
    'gap',
    'md',
    'gap',
    'gap',
    'md',
    'gap',
    'gap',
    'lg'
  ]

  let platformDistance = 0

  platformsMap.forEach((symbol) => {
    switch (symbol) {
      case 'md':
        platforms.push(
          new Platform({
            x: platformDistance,
            y: canvas.height - mdPlatformImage.height,
            image: mdPlatformImage,
            block: true,
            text: platformDistance
          })
        )

        platformDistance += mdPlatformImage.width - 3

        break
      case 'lg':
        platforms.push(
          new Platform({
            x: platformDistance - 2,
            y: canvas.height - lgPlatformImage.height,
            image: lgPlatformImage,
            block: true,
            text: platformDistance
          })
        )

        platformDistance += lgPlatformImage.width - 3

        break

      case 'gap':
        platformDistance += 175

        break

      case 't':
        platforms.push(
          new Platform({
            x: platformDistance,
            y: canvas.height - tPlatformImage.height,
            image: tPlatformImage,
            block: true
          })
        )

        platformDistance += tPlatformImage.width - 2

        break

      case 'xt':
        platforms.push(
          new Platform({
            x: platformDistance,
            y: canvas.height - xtPlatformImage.height,
            image: xtPlatformImage,
            block: true,
            text: platformDistance
          })
        )

        platformDistance += xtPlatformImage.width - 2

        break
    }
  })
}

function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height)

  genericObjects.forEach((genericObject) => {
    genericObject.update()
    genericObject.velocity.x = 0
  })

  particles.forEach((particle, i) => {
    particle.update()

    if (
      particle.fireball &&
      (particle.position.x - particle.radius >= canvas.width ||
        particle.position.x + particle.radius <= 0)
    )
      setTimeout(() => {
        particles.splice(i, 1)
      }, 0)
  })

  platforms.forEach((platform) => {
    platform.update()
    platform.velocity.x = 0
  })

  if (flagPole) {
    flagPole.update()
    flagPole.velocity.x = 0

    // mario touches flagpole
    // win condition
    // complete level
    if (
      !game.disableUserInput &&
      objectsTouch({
        object1: player,
        object2: flagPole
      })
    ) {
      audio.completeLevel.play()
      audio.musicLevel1.stop()
      game.disableUserInput = true
      player.velocity.x = 0
      player.velocity.y = 0
      gravity = 0

      player.currentSprite = player.sprites.stand.right

      if (player.powerUps.fireFlower)
        player.currentSprite = player.sprites.stand.fireFlower.right

      // flagpole slide
      setTimeout(() => {
        audio.descend.play()
      }, 200)
      gsap.to(player.position, {
        y: canvas.height - lgPlatformImage.height - player.height,
        duration: 1,
        onComplete() {
          player.currentSprite = player.sprites.run.right

          if (player.powerUps.fireFlower)
            player.currentSprite = player.sprites.run.fireFlower.right
        }
      })

      gsap.to(player.position, {
        delay: 1,
        x: canvas.width,
        duration: 2,
        ease: 'power1.in'
      })

      // fireworks
      const particleCount = 300
      const radians = (Math.PI * 2) / particleCount
      const power = 8
      let increment = 1

      const intervalId = setInterval(() => {
        for (let i = 0; i < particleCount; i++) {
          particles.push(
            new Particle({
              position: {
                x: (canvas.width / 4) * increment,
                y: canvas.height / 2
              },
              velocity: {
                x: Math.cos(radians * i) * power * Math.random(),
                y: Math.sin(radians * i) * power * Math.random()
              },
              radius: 3 * Math.random(),
              color: `hsl(${Math.random() * 200}, 50%, 50%)`,
              fades: true
            })
          )
        }

        audio.fireworkBurst.play()
        audio.fireworkWhistle.play()

        if (increment === 3) clearInterval(intervalId)

        increment++
      }, 1000)

      // switch to the next level
      setTimeout(() => {
        currentLevel++
        gravity = 1.5
        selectLevel(currentLevel)
      }, 8000)
    }
  }

  // mario obtains powerup
  fireFlowers.forEach((fireFlower, i) => {
    if (
      objectsTouch({
        object1: player,
        object2: fireFlower
      })
    ) {
      audio.obtainPowerUp.play()
      player.powerUps.fireFlower = true
      setTimeout(() => {
        fireFlowers.splice(i, 1)
      }, 0)
    } else fireFlower.update()
  })

  enemies.forEach((enemy, index) => {
    enemy.update()

    // remove enemy on fireball hit
    particles.forEach((particle, particleIndex) => {
      if (
        particle.fireball &&
        particle.position.x + particle.radius >= enemy.position.x &&
        particle.position.y + particle.radius >= enemy.position.y &&
        particle.position.x - particle.radius <=
          enemy.position.x + enemy.width &&
        particle.position.y - particle.radius <=
          enemy.position.y + enemy.height
      ) {
        for (let i = 0; i < 50; i++) {
          particles.push(
            new Particle({
              position: {
                x: enemy.position.x + enemy.width / 2,
                y: enemy.position.y + enemy.height / 2
              },
              velocity: {
                x: (Math.random() - 0.5) * 7,
                y: (Math.random() - 0.5) * 15
              },
              radius: Math.random() * 3
            })
          )
        }
        setTimeout(() => {
          enemies.splice(index, 1)
          particles.splice(particleIndex, 1)
        }, 0)
      }
    })

    // enemy stomp squish / squash
    if (
      collisionTop({
        object1: player,
        object2: enemy
      })
    ) {
      audio.enemySquash.play()

      for (let i = 0; i < 50; i++) {
        particles.push(
          new Particle({
            position: {
              x: enemy.position.x + enemy.width / 2,
              y: enemy.position.y + enemy.height / 2
            },
            velocity: {
              x: (Math.random() - 0.5) * 7,
              y: (Math.random() - 0.5) * 15
            },
            radius: Math.random() * 3
          })
        )
      }
      player.velocity.y -= 40
      setTimeout(() => {
        enemies.splice(index, 1)
      }, 0)
    } else if (
      player.position.x + player.width >= enemy.position.x &&
      player.position.y + player.height >= enemy.position.y &&
      player.position.x <= enemy.position.x + enemy.width
    ) {
      // player hits enemy
      // lose fireflower / lose powerup
      if (player.powerUps.fireFlower) {
        player.invincible = true
        player.powerUps.fireFlower = false
        audio.losePowerUp.play()

        setTimeout(() => {
          player.invincible = false
        }, 1000)
      } else if (!player.invincible) {
        audio.die.play()
        selectLevel(currentLevel)
      }
    }
  })

  player.update()

  if (game.disableUserInput) return

  // scrolling code starts
  let hitSide = false
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed
  } else if (
    (keys.left.pressed && player.position.x > 100) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -player.speed
  } else {
    player.velocity.x = 0

    // scrolling code
    if (keys.right.pressed) {
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        platform.velocity.x = -player.speed

        if (
          platform.block &&
          hitSideOfPlatform({
            object: player,
            platform
          })
        ) {
          platforms.forEach((platform) => {
            platform.velocity.x = 0
          })

          hitSide = true
          break
        }
      }

      if (!hitSide) {
        scrollOffset += player.speed

        flagPole.velocity.x = -player.speed

        genericObjects.forEach((genericObject) => {
          genericObject.velocity.x = -player.speed * 0.66
        })

        enemies.forEach((enemy) => {
          enemy.position.x -= player.speed
        })

        fireFlowers.forEach((fireFlower) => {
          fireFlower.position.x -= player.speed
        })

        particles.forEach((particle) => {
          particle.position.x -= player.speed
        })
      }
    } else if (keys.left.pressed && scrollOffset > 0) {
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        platform.velocity.x = player.speed

        if (
          platform.block &&
          hitSideOfPlatform({
            object: player,
            platform
          })
        ) {
          platforms.forEach((platform) => {
            platform.velocity.x = 0
          })

          hitSide = true
          break
        }
      }

      if (!hitSide) {
        scrollOffset -= player.speed

        flagPole.velocity.x = player.speed

        genericObjects.forEach((genericObject) => {
          genericObject.velocity.x = player.speed * 0.66
        })

        enemies.forEach((enemy) => {
          enemy.position.x += player.speed
        })

        fireFlowers.forEach((fireFlower) => {
          fireFlower.position.x += player.speed
        })

        particles.forEach((particle) => {
          particle.position.x += player.speed
        })
      }
    }
  }

  // platform collision detection
  platforms.forEach((platform) => {
    if (
      isOnTopOfPlatform({
        object: player,
        platform
      })
    ) {
      player.velocity.y = 0
    }

    if (
      platform.block &&
      hitBottomOfPlatform({
        object: player,
        platform
      })
    ) {
      player.velocity.y = -player.velocity.y
    }

    if (
      platform.block &&
      hitSideOfPlatform({
        object: player,
        platform
      })
    ) {
      player.velocity.x = 0
    }

    // particles bounce
    particles.forEach((particle, index) => {
      if (
        isOnTopOfPlatformCircle({
          object: particle,
          platform
        })
      ) {
        const bounce = 0.9
        particle.velocity.y = -particle.velocity.y * 0.99

        if (particle.radius - 0.4 < 0) particles.splice(index, 1)
        else particle.radius -= 0.4
      }

      if (particle.ttl < 0) particles.splice(index, 1)
    })

    enemies.forEach((enemy) => {
      if (
        isOnTopOfPlatform({
          object: enemy,
          platform
        })
      )
        enemy.velocity.y = 0
    })

    fireFlowers.forEach((fireFlower) => {
      if (
        isOnTopOfPlatform({
          object: fireFlower,
          platform
        })
      )
        fireFlower.velocity.y = 0
    })
  })

  // lose condition
  if (player.position.y > canvas.height) {
    audio.die.play()
    selectLevel(currentLevel)
  }

  // sprite switching
  if (player.velocity.y !== 0) return

  if (
    keys.right.pressed &&
    lastKey === 'right' &&
    player.currentSprite !== player.sprites.run.right
  ) {
    player.currentSprite = player.sprites.run.right
  } else if (
    keys.left.pressed &&
    lastKey === 'left' &&
    player.currentSprite !== player.sprites.run.left
  ) {
    player.currentSprite = player.sprites.run.left
  } else if (
    !keys.left.pressed &&
    lastKey === 'left' &&
    player.currentSprite !== player.sprites.stand.left
  ) {
    player.currentSprite = player.sprites.stand.left
  } else if (
    !keys.right.pressed &&
    lastKey === 'right' &&
    player.currentSprite !== player.sprites.stand.right
  ) {
    player.currentSprite = player.sprites.stand.right
  }

  // fireflower sprites
  if (!player.powerUps.fireFlower) return

  if (
    keys.right.pressed &&
    lastKey === 'right' &&
    player.currentSprite !== player.sprites.run.fireFlower.right
  ) {
    player.currentSprite = player.sprites.run.fireFlower.right
  } else if (
    keys.left.pressed &&
    lastKey === 'left' &&
    player.currentSprite !== player.sprites.run.fireFlower.left
  ) {
    player.currentSprite = player.sprites.run.fireFlower.left
  } else if (
    !keys.left.pressed &&
    lastKey === 'left' &&
    player.currentSprite !== player.sprites.stand.fireFlower.left
  ) {
    player.currentSprite = player.sprites.stand.fireFlower.left
  } else if (
    !keys.right.pressed &&
    lastKey === 'right' &&
    player.currentSprite !== player.sprites.stand.fireFlower.right
  ) {
    player.currentSprite = player.sprites.stand.fireFlower.right
  }
}

selectLevel(1)
// init()
// initLevel2()
animate()

addEventListener('keydown', ({ keyCode }) => {
  if (game.disableUserInput) return

  switch (keyCode) {
    case 81:
      console.log('left')
      keys.left.pressed = true
      lastKey = 'left'

      break

    case 83:
      console.log('down')
      break

    case 68:
      console.log('right')
      keys.right.pressed = true
      lastKey = 'right'

      break

    case 90:
      console.log('up')
      player.velocity.y -= 25

      audio.jump.play()

      if (lastKey === 'right') player.currentSprite = player.sprites.jump.right
      else player.currentSprite = player.sprites.jump.left

      if (!player.powerUps.fireFlower) break

      if (lastKey === 'right')
        player.currentSprite = player.sprites.jump.fireFlower.right
      else player.currentSprite = player.sprites.jump.fireFlower.left

      break

    case 32:
      console.log('space')

      if (!player.powerUps.fireFlower) return

      audio.fireFlowerShot.play()

      let velocity = 15
      if (lastKey === 'left') velocity = -velocity

      particles.push(
        new Particle({
          position: {
            x: player.position.x + player.width / 2,
            y: player.position.y + player.height / 2 + 50
          },
          velocity: {
            x: velocity,
            y: 0
          },
          radius: 5,
          color: 'red',
          fireball: true
        })
      )
      break
  }
})

addEventListener('keyup', ({ keyCode }) => {
  if (game.disableUserInput) return

  switch (keyCode) {
    case 81:
      console.log('left')
      keys.left.pressed = false
      break

    case 83:
      console.log('down')
      break

    case 68:
      console.log('right')
      keys.right.pressed = false

      break

    case 90:
      console.log('up')
      break
  }
})