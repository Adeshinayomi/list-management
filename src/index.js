const input = document.querySelector(".input");
const btn = document.querySelector(".add-btn");
const deleteAllbtn = document.querySelector(".delete-all-btn");
const output = document.querySelector(".output");
const empty = document.querySelector(".empty");
let list = [];
function addToList(name) {
    if (name === "") {
        alert("Please add a valid list item");
        return;
    }
    else {
        let idNumber = Date.now();
        list.push({
            id: idNumber,
            name: name,
            isChecked: false
        });
        showList();
        input.value = "";
    }
}
function showList() {
    let html = "";
    list.forEach((list) => {
        html += `
            <div>
                <p class="item ${list.isChecked ? 'checked' : ''}" id=${list.id}>${list.name}</p>

                <div class="btn-div">
                    <button class="check" id=${list.id}>check</button>
                    <button class="delete-btn" id=${list.id}>delete</button>                 
                </div>
            </div>
        `;
    });
    output.innerHTML = html;
    const deleteBtn = document.querySelectorAll(".delete-btn");
    const checkBtn = document.querySelectorAll('.check');
    const items = output.querySelectorAll('.item');
    checkBtn.forEach((item) => {
        item.addEventListener('click', () => {
            list.forEach((list) => {
                if (list.id === Number(item.id)) {
                    list.isChecked = true;
                }
            });
            items.forEach((i) => {
                if (item.id === i.id) {
                    i.classList.add('checked');
                }
            });
        });
    });
    deleteBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = Number(btn.id);
            deleteList(id);
        });
    });
    if (output.innerHTML !== "") {
        empty.classList.add("hide");
    }
    else {
        empty.classList.remove("hide");
    }
}
function deleteList(id) {
    list = list.filter((list) => {
        return list.id !== id;
    });
    showList();
}
btn?.addEventListener("click", () => {
    addToList(input.value);
});
deleteAllbtn.addEventListener('click', () => {
    list = [];
    showList();
});
export {};
