const inputBox = document.querySelector(".input-group input");
const submitBtn = document.querySelector(".input-group button");
const itemListEl = document.querySelector("#item-list");
const clearButton = document.getElementById("clearBtn");

let items = [];
let itemId = 1;



const submit = () => {
  const text = inputBox.value
  if (!text) return;



  
  const item = { id: itemId, text: text };
  items.push(item);
  itemId++;
  inputBox.value = "";
  renderItems();
};


const renderItems = () => {
  let html = "";
  items.forEach((item) => {
    html += createItem(item);
  });
  itemListEl.innerHTML = html;
};


const createItem = (item) => `
  <div class="box">
    <p>${item.text}</p>
    <div>
      <button onclick="startEdit(${item.id})">Edit</button>
      <button onclick="deleteItem(${item.id})">Delete</button>
    </div>
  </div>
`;



const deleteItem = (id) => {
  items = items.filter((item) => item.id !== id);
  renderItems();
};


const clear = () => {
  items = [];
  renderItems();
};


submitBtn.addEventListener("click", submit);
clearButton.addEventListener("click", clear);
