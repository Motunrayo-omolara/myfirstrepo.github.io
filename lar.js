const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
//Event Listener
button.addEventListener('click', function() {
    const myItem = input.value;
    input.value = "";
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);
    listBtn.addEventListener('click', function() {
        list.removeChild(listItem);
})
input.focus();
})
