console.log("This is the Dynamic File");

document.addEventListener('click', () => {

  if (true) {
    import("../Classes/message.js").then(module => {
      console.log("Un-Destructed");
      module.default()
    });
  }

  if (true) {
    import("../Classes/test_export.js").then(({ printMessage }) => {
      console.log("Destructed");
      printMessage();
    });
  }

});

document.addEventListener('keypress', async (evt) => {

  evt.preventDefault();
  console.log('evt :>> ', evt);

  if (evt.key === 's') {
    import("../Classes/message.js").then(module => {
      console.log("Awaited Un-Destructed");
      module.default()
    });
  }

  if (evt.key === 's') {
    const { printMessage } = await import("../Classes/test_export.js")
    console.log("Awaited Destructed");
    printMessage();
  }
  
  if (evt.key === 's') {
    const { default: printMessage } = await import("../Classes/message.js")
    console.log("Awaited Destructed");
    printMessage();
  }

});

