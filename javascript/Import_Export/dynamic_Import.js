import printMessage from "../Classes/testExport.js";

console.log("This is the Dynamic File");

document.addEventListener('click', () => {

  if (true) {
    import("../Classes/testExport.js").then(module => {
      console.log("Un-Destructed");
      module.default()
    });
  }

  if (true) {
    import("../Classes/testExport.js").then(({ default: printMessage }) => {
      console.log("Destructed");
      printMessage();
    });
  }

});

document.addEventListener('keypress', async (evt) => {

  evt.preventDefault();
  console.log('evt :>> ', evt);

  if (evt.key === 's') {
    import("../Classes/testExport.js").then(module => {
      console.log("Awaited Un-Destructed");
      module.default()
    });
  }

  if (evt.key === 's') {
    const { default: printMessage } = await import("../Classes/testExport.js")
    console.log("Awaited Destructed");
    printMessage();
  }

});
