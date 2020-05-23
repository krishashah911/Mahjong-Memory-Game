export function shuffle(array) {
  const copyArray = array.slice(0);
  for (let i = 0; i < array.length; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = copyArray[i];
    copyArray[i] = copyArray[randomIndex];
    copyArray[randomIndex] = temp;
  }
  return copyArray;
}

export default function initializeDeck() {
  let id = 0;
  const cards = [
    "react",
    "reactu",
    "redux",
    "vue",
    "angular",
    "javascript",
    "ruby",
    "rails"
  ].reduce((acc, type) => {
    acc.push({
      id: id++,
      type
    });
    acc.push({
      id: id++,
      type
    });
    return acc;
  }, []);

  return shuffle(cards);
}

export function compare(a, b) {
  if (a.score < b.score) {
    return -1;
  }
  if (a.score > b.score) {
    return 1;
  }
  return 0;
}
