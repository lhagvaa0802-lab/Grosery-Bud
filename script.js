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
            <input type="checkbox" id="${item.id}" ${item.isChecked && "checked"} onchange="updateItems(${item.id})"/>
            <button   id="${item.id}" ${item.isChecked && "checked"} onclick="deleteBtn(${item.id})">Delete</button>
          </div>
        </div>`;
};

const clearInput = () => {
  inputBox.value = "";
};
const updateItems = (id) => {
  const updatedItems = items.map((item) => {
    if (item.id === id) {
      return { ...item, isChecked: !item.isChecked };
     
    } else {
      return item;
    }
  });
  console.log(updatedItems)

  items = updatedItems;
  renderItems(updatedItems);
};


const deleteBtn = () => {

  const deletedItems = items.filter((item) => !item.isChecked===true);
  items = deletedItems;
  
  renderItems(deletedItems)
}

const clear=()=>{

   const clearedItems = items.filter((item) => !item.isChecked === true);
   items = clearedItems;

   renderItems(clearedItems);
}



submitBtn.addEventListener("click", submit);
clearButton.addEventListener("click", clear);
console.log(items);
