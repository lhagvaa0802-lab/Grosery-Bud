const inputBox = document.querySelector(".input-group input");
const submitBtn = document.querySelector(".input-group button");
const itemListEl = document.querySelector("#item-list");
const clearButton = document.getElementById("clearBtn");
const saveBtn = document.getElementById("save_btn");

let items = [];
let itemId = 1;

const submit = () => {
  const text = inputBox.value;
  if (!text) return;

  const item = { id: itemId, text: text };

  items.push(item);
  console.log(items);
  itemId++;
  inputBox.value = "";
  renderItems(items);
};

const renderItems = (itemsArr) => {
  let html = "";
  itemsArr.forEach((item) => {
    html += createItem(item);
    console.log(html);
  });
  itemListEl.innerHTML = html;
};

const createItem = (item) => `
  <div class="box">
    <p>${item.text}</p>
    <div class=buttons>
     
      <i class="fa-solid fa-pen-to-square" onclick="startEdit(${item.id})"></i>
      <i class="fa-regular fa-trash-can" onclick="deleteItem(${item.id})"></i>
      
    </div>
  </div>
`;

const deleteItem = (id) => {
  items = items.filter((item) => item.id !== id);
  renderItems(items);
};

const clear = () => {
  items = [];
  renderItems(items);
};
const findedItem = [];
const startEdit = (id) => {
  const item = items.find((item) => item.id === id);
  findedItem.push(item);
  inputBox.value = item.text;
  submitBtn.style.display = "none";
  saveBtn.style.display = "block";
};

const save = () => {
  const updatedItems = items.map((item) => {
    if (item.id === findedItem[0].id) {
      return { ...item, text: inputBox.value };
    } else {
      return item;
    }
  });
  renderItems(updatedItems);
  findedItem.shift();
  submitBtn.style.display = "block";
  saveBtn.style.display = "none";
  inputBox.value = "";
};

submitBtn.addEventListener("click", submit);
clearButton.addEventListener("click", clear);
saveBtn.addEventListener("click", save);
save;
