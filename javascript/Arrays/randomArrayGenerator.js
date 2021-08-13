// Random Array generator
export default function randomArrayGenerator(arr) {
  // Create Random Number b/w 5 - 50
  const randomNum = (min = 5, max = Math.floor(Math.random() * 50)) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };
  
  // Pushes random number of random values onto array
  let i = 0;
  while (i <= randomNum()) {
    arr.push(randomNum());
    i++;
  }
  return arr;
}
