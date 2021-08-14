let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(maze[1][0]); // Should return '*'
console.log(maze[0][3]); // Should return '*'
console.log(maze[4][6]); // Should return 'e'
console.log(maze[4].length); // Should return 'e'