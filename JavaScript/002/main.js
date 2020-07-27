const elements = {
  input: document.getElementById("input"),
  check: document.getElementById("check"),
  add: document.getElementById("add"),
  delete: document.getElementById("delete"),
  show: document.getElementById("show"),
  result: document.getElementById("result"),
};

function getInput() {
  return input.value;
}

function check() {
  if (getInput() === "")
    return (elements.result.innerHTML = "<p>Input Can't Be Empty</p>");
  if (localStorage.getItem(getInput()) !== null)
    return (elements.result.innerHTML = `<p>The element <span>${getInput()}</span> exists in Local Storage</p>`);
  else
    return (elements.result.innerHTML = `<p>The element <span>${getInput()}</span> not exist in Local Storage</p>`);
}

function add() {
  if (getInput() === "")
    return (elements.result.innerHTML = "<p>Input Can't Be Empty</p>");
  if (localStorage.getItem(getInput()) !== null)
    return (elements.result.innerHTML = `<p>The element <span>${getInput()}</span> exists in Local Storage</p>`);
  else localStorage.setItem(getInput(), "");
  return (elements.result.innerHTML = `<p>The element <span>${getInput()}</span> added in Local Storage</p>`);
}

function deleted() {
  if (getInput() === "")
    return (elements.result.innerHTML = "<p>Input Can't Be Empty</p>");
  if (localStorage.getItem(getInput()) === null)
    return (elements.result.innerHTML = `<p>The element <span>${getInput()}</span> not exists in Local Storage</p>`);
  else localStorage.removeItem(getInput());
  return (elements.result.innerHTML = `<p>The element <span>${getInput()}</span> removed from Local Storage</p>`);
}

function show() {
  let el = "";
  if (localStorage.length === 0)
    return (elements.result.innerHTML = `<p>The Local Storage is empty</p>`);
  for (const [key] of Object.entries(localStorage)) {
    el += `<p>${key}</p>`;
  }
  return (elements.result.innerHTML = el);
}

elements.check.addEventListener("click", check);
elements.add.addEventListener("click", add);
elements.delete.addEventListener("click", deleted);
elements.show.addEventListener("click", show);
