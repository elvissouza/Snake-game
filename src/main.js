
window.onload = function () {
    let scene = document.getElementById("scene");
    let contextGame = scene.getContext("2d");

    document.addEventListener("keydown", keyPush);

    setInterval(snakeGame, 80);

    const velocidade = 1;
    let veloenX = (veloenY = 0), positionX = 10, positionY = 15, dimensionSnake = 30,
        quantifySnake = 20, frutsX = (fruitsY = 15), tail = [], pointing = 5, handlesFruit = 0;

    function snakeGame() {
        positionX += veloenX;
        positionY += veloenY;
        if (positionX < 0) {
            positionX = quantifySnake - 1;
        }
        if (positionX > quantifySnake - 1) {
            positionX = 0;
        }
        if (positionY < 0) {
            positionY = quantifySnake - 1;
        }
        if (positionY > quantifySnake - 1) {
            positionY = 0;
        }


        contextGame.fillStyle = "black";
        contextGame.fillRect(0, 0, scene.width, scene.height);

        contextGame.fillStyle = "red";
        contextGame.fillRect(frutsX * dimensionSnake, fruitsY * dimensionSnake, dimensionSnake, dimensionSnake);

        contextGame.fillStyle = "gray";
        contextGame.fillText(" Frutas pegas: " + handlesFruit, 32, 32);
        for (let i = 0; i < tail.length; i++) {
            contextGame.fillRect(tail[i].x * dimensionSnake, tail[i].y * dimensionSnake, dimensionSnake - 2, dimensionSnake - 2);
            if (tail[i].x == positionX && tail[i].y == positionY) {
                veloenX = veloenY = 0;
                pointing = 5;
                handlesFruit = 0
            }
        }
        tail.push({ x: positionX, y: positionY });


        while (tail.length > pointing) {
            tail.shift();
        }
        if (frutsX == positionX && fruitsY == positionY) {
            handlesFruit++;
            pointing++;
            frutsX = Math.floor(Math.random() * quantifySnake);
            fruitsY = Math.floor(Math.random() * quantifySnake);
        }
    }
    //Controller da Snake
    function keyPush(event) {
        switch (event.keyCode) {
            case 37: // left
                veloenX = -velocidade;
                veloenY = 0;
                break;
            case 38: // up
                veloenX = 0;
                veloenY = -velocidade;
                break;
            case 39: //right
                veloenX = velocidade;
                veloenY = 0;
                break;
            case 40: //down
                veloenX = 0;
                veloenY = velocidade;
                break;
            default:
                break;
        }
    }
}