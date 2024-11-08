const board = document.querySelector('.board');
for (let i = 0; i < 16; i += 1) {
  const cell = document.createElement('div');

  cell.classList.add('cell');

  board.appendChild(cell);
}

export default function generatePosition(previousPosition) {
  let newPosition;
  do {
    newPosition = Math.floor(Math.random() * 16);
  } while (newPosition === previousPosition);
  return newPosition;
}

const cell = document.querySelector('.cell');
const cellHeight = `${cell.offsetWidth}px`;

const cells = document.querySelectorAll('.cell');
let previousPosition = -1;

setInterval(() => {
  const monsterElement = document.querySelector('.monster');
  if (monsterElement) {
    monsterElement.remove();
  }

  const monster = document.createElement('div');
  monster.classList.add('monster');
  monster.style.height = cellHeight;

  const index = generatePosition(previousPosition);
  cells[index].appendChild(monster);

  previousPosition = index;
}, 1000);
