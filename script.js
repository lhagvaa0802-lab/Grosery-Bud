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
      <button class=edit-btn onclick="startEdit(${item.id})">Edit</button>
      <button class=delete-btn onclick="deleteItem(${item.id})">Delete</button>
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
const startEdit = (id) =>{
     const item = items.find((item) => item.id === id);
     inputBox.value = item.text;
     deleteItem(id)
}


submitBtn.addEventListener("click", submit);
clearButton.addEventListener("click", clear);
