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
                    <button class="check" id=${list.id}>${list.isChecked ? 'uncheck' : 'check'}</button>
                    <button class="delete-btn" id=${list.id}>delete</button>                 
                </div>
            </div>
        `;
    });
    output.innerHTML = html;
    //   const deleteBtn = document.querySelectorAll<HTMLButtonElement>(".delete-btn")    ;
    //   const checkBtn= document.querySelectorAll<HTMLButtonElement>('.check')
    //   const items=output.querySelectorAll<HTMLButtonElement>('.item')
    //   checkBtn.forEach((item)=>{
    //     item.addEventListener('click',()=>{
    //         list.forEach((list)=>{
    //             if(list.id === Number(item.id)){
    //                 list.isChecked=!list.isChecked
    //             }
    //         })
    //         items.forEach((i)=>{
    //             if(item.id === i.id){
    //                 i.classList.toggle('checked')
    //             }
    //         })
    //     })
    //   })
    //   deleteBtn.forEach((btn) => {
    //     btn.addEventListener("click", () => {
    //       const id = Number(btn.id);
    //       deleteList(id);
    //     });
    //   });
    if (list.length > 0) {
        empty.classList.add("hide");
    }
    else {
        empty.classList.remove("hide");
    }
}
output.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('delete-btn')) {
        deleteList(Number(target.id));
    }
    if (target.classList.contains('check')) {
        toggleCheck(Number(target.id));
    }
});
function toggleCheck(id) {
    list = list.map(item => item.id === id
        ? { ...item, isChecked: !item.isChecked }
        : item);
    console.log(list);
    showList();
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
