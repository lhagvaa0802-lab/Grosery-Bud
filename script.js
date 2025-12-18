const inputBox = document.querySelector(".input-group input");
const submitBtn = document.querySelector(".input-group button");
const itemList = document.querySelector("#item-list");
const clearButton = document.getElementById("clearBtn");
console.log(clearBtn);
console.log(itemList);

let items = [];
let itemId = 1;
const submit = () => {
  const itemList = inputBox.value;
  const item = {
    id: itemId,
    text: itemList,
    isChecked: false,
  };

  console.log(itemList);
  items.push(item);
  console.log(items);
  renderItems(items);
  clearInput();
  itemId++;
};

const renderItems = (taskArr) => {
  let conItems = "";

  taskArr.forEach((item) => {
    const conItem = createItem(item);
    conItems += conItem;
  });

  itemList.innerHTML = conItems;
};

const createItem = (item) => {
  return ` <div class="box">
          <p>${item.text}</p>
          <div>
            <input type="checkbox" id="${item.id}" ${
    item.isChecked && "checked"
  } />
            <button onclick="deleteBtn(${item.id})">Delete</button>
          </div>
        </div>`;
};

const clearInput = () => {
  inputBox.value = "";
};
const updateItems = (id) => {
  const updatedItems = items.map((item) => {
    if (item.id === id) {
      return { ...item, isCompleted: !item.isCompleted };
    } else {
      return item;
    }
  });

  items = updatedItems;
  renderItems(updatedItems);
};

submitBtn.addEventListener("click", submit);
clearButton.addEventListener("click", updateItems);
console.log(items);
