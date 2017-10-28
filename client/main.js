var game = new Phaser.Game(800,600,Phaser.AUTO);

var snakeBody;

var upKey;
var downKey;
var leftKey;
var rightKey;

var GameState = {
  preload: function(){
    game.load.image('greenSprite', '/assests/greenSprite.png');
  },
  create: function(){
    //add physics?
    //game.physics.startSystem(Phaser.Physics.ARCADE);
    snakeBody = game.add.sprite(game.world.centerX, game.world.centerY, 'greenSprite');
    game.physics.enable(snakeBody, Phaser.Physics.ARCADE);
    //snakeBody.anchor.setTo(0.5, 0.5);
    //snakeBody.checkWorldBounds = true;
    //setup keys
    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  },
  update: function(){
    if (upKey.isDown)
    {
        snakeBody.y-=5;
    }
    else if (downKey.isDown)
    {
        snakeBody.y+=5;
    }

    if (leftKey.isDown)
    {
        snakeBody.x-=5;
    }
    else if (rightKey.isDown)
    {
        snakeBody.x+=5;
    }

    if (snakeBody.x < 0)
    {
        snakeBody.x = 0;
    }
    else if (snakeBody.x >= game.width - 40)
    {
        snakeBody.x = game.width - 40;
    }
    if (snakeBody.y < 0)
    {
        snakeBody.y = 0;
    }
    else if (snakeBody.y >= game.height - 40)
    {
        snakeBody.y = game.height - 40;
    }
  }
};

game.state.add('GameState', GameState);
game.state.start('GameState');