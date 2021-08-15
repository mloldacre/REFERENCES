const divs = document.querySelectorAll("div");

const addGlobalEventListener = (type, selector, callback) => {
  document.addEventListener(type, evt => {
    if (evt.target.matches(selector)) callback(evt)
  })
}

addGlobalEventListener("click", "div", evt => {
  console.log("'sup");
})


const newKid = document.createElement("div");
newKid.style.width = "900px";
newKid.style.height = "900px";
newKid.style.backgroundColor = "red";
document.body.append(newKid);