const carElement = document.getElementById("car");

function sendCommand(direction) {
    fetch('/move', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ direction: direction })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        updateCarPosition(direction);
    });
}

let positionX = 0;

function updateCarPosition(direction) {
    if (direction === 'forward') {
        positionX -= 20;
    } else if (direction === 'backward') {
        positionX += 20;
    }
    carElement.style.transform = `translateX(${positionX}px)`;
}
