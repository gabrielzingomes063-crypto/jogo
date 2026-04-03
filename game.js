// game.js

class Player {
    constructor(name) {
        this.name = name;
        this.x = 0;
        this.y = 0;
        this.score = 0;
    }

    move(direction) {
        switch (direction) {
            case 'up':
                this.y -= 1;
                break;
            case 'down':
                this.y += 1;
                break;
            case 'left':
                this.x -= 1;
                break;
            case 'right':
                this.x += 1;
                break;
        }
    }

    addScore(points) {
        this.score += points;
    }
}

class Enemy {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
}

class Game {
    constructor() {
        this.player = new Player('Hero');
        this.enemies = [];
        this.initEnemies();
    }

    initEnemies() {
        for (let i = 0; i < 5; i++) {
            this.enemies.push(new Enemy(`Enemy${i+1}`, Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)));
        }
    }

    checkCollision() {
        for (let enemy of this.enemies) {
            if (this.player.x === enemy.x && this.player.y === enemy.y) {
                console.log(`Collision with ${enemy.name}!`);
                this.player.addScore(-5);
            }
        }
    }

    update() {
        this.checkCollision();
    }
}

const game = new Game();

// Sample game loop
setInterval(() => {
    // Update game logic here
    game.update();
    console.log(`Player position: (${game.player.x}, ${game.player.y}) | Score: ${game.player.score}`);
}, 1000);