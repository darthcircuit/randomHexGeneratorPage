const randHex = () => {
  const validNumbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  const randChoice = (iter) => iter[Math.floor(Math.random() * iter.length)];
  let result;
  for (let i = "#"; i.length < 8; i += randChoice(validNumbers)) {
    result = i;
  }
  return result;
};

const setBackgroundAndLabel = () => {
  const bgColor = randHex();
  console.log(textNode);
  document.body.style.backgroundColor = bgColor;
  textNode.textContent = bgColor;
};

const btn = document.getElementById("button");
const textNode = document.getElementById("randTextNode");
btn.addEventListener("click", setBackgroundAndLabel);
