//! Makes an object immutable
const building = Object.freeze({
  type: "skyscraper",
  windows: 1000,
  color: " grey"
})

const car = Object.freeze({
  make: "Acura",
  model: "Legend",
  year: 1995,
  wheels: Object.freeze({
    amount: 4
  }),
  color: "blue"
});


