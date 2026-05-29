let inventory = [
    { name: "Клавіатура Razer Huntsman V3", isBought: false },
    { name: "Мишка Logitech G Pro X Superlight", isBought: true },
    { name: "Монітор Alienware 360Hz", isBought: false },
    { name: "Навушники HyperX Cloud III", isBought: false },
    { name: "Відеокарта RTX 4090 Founders Edition", isBought: false },
    { name: "Процесор AMD Ryzen 9 7950X", isBought: true },
    { name: "Крісло Secretlab Titan Evo", isBought: false },
    { name: "SSD Samsung 990 Pro 2TB", isBought: false }
];
function renderList(filter = "") {
    const listContainer = document.getElementById('productList');
    const countDisplay = document.getElementById('itemCount');
    listContainer.innerHTML = ""; 

    inventory.forEach((item, index) => {
        if (filter && !item.name.toLowerCase().includes(filter.toLowerCase())) {
            return;
        }

        const li = document.createElement('li');
        
        li.innerHTML = `
            <span class="${item.isBought ? 'bought-text' : ''}">
                ${index + 1}. ${item.name}
            </span>
            <div class="actions">
                <button class="btn-buy" onclick="markAsBought(${index})">✔</button>
                <button class="btn-del" onclick="removeItem(${index})">✖</button>
            </div>
        `;
        listContainer.appendChild(li);
    });

    countDisplay.innerText = `Всього: ${inventory.length}`;
}

function liveSearch() {
    const query = document.getElementById('productInput').value;
    renderList(query);
}

function addProduct() {
    const input = document.getElementById('productInput');
    const newName = input.value.trim();

    if (newName !== "") {
        inventory.push({ name: newName, isBought: false });
        input.value = ""; 
        renderList();     
        alert("Поле введення порожнє!");
    }
}

function removeItem(index) {
    inventory.splice(index, 1);
    renderList();
}

function markAsBought(index) {
    inventory[index].isBought = !inventory[index].isBought;
    renderList();
}

renderList();