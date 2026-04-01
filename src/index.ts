const input = document.querySelector(".input") as HTMLInputElement;
const btn = document.querySelector(".add-btn") as HTMLButtonElement;
const deleteAllbtn = document.querySelector(".delete-all-btn") as HTMLElement
const output = document.querySelector(".output") as HTMLElement;
const empty = document.querySelector(".empty") as HTMLElement;



type List = {
  id: number;
  name: string;
  isChecked:boolean
};

let list: List[] = [];

function addToList(name: string): void {

  if (name === "") {
    alert("Please add a valid list item");
    return;
  }else {
    let idNumber: number = Date.now();
    list.push({
      id: idNumber,
      name: name,
      isChecked:false
    });

    showList();

    input.value = "";
  }
}

function showList(): void {
  let html: string = "";
  list.forEach((list) => {
    html += `
            <div>
                <p class="item ${list.isChecked?'checked':''}" id=${list.id}>${list.name}</p>
                 
                <button class="check" id=${list.id}>check</button>
                <button class="delete-btn" id=${list.id}>delete</button>
            </div>
        `;
  });

  output.innerHTML = html;

  const deleteBtn = document.querySelectorAll<HTMLButtonElement>(".delete-btn")    ;
  const checkBtn= document.querySelectorAll<HTMLButtonElement>('.check')
  const items=output.querySelectorAll<HTMLButtonElement>('.item')

  checkBtn.forEach((item)=>{
    item.addEventListener('click',()=>{
        list.forEach((list)=>{
            if(list.id === Number(item.id)){
                list.isChecked=true
            }
        })
        items.forEach((i)=>{
            if(item.id === i.id){
                i.classList.add('checked')
            }
        })
    })
  })
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.id);
      deleteList(id);
    });
  });

  if (output.innerHTML !== "") {
    empty.classList.add("hide");
  } else {
    empty.classList.remove("hide");
  }
}

function deleteList(id: number): void {
  list = list.filter((list) => {
    return list.id !== id;
  });

  showList();
}

btn?.addEventListener("click", (): void => {
  addToList(input.value);
});


deleteAllbtn.addEventListener('click',()=>{
    list=[]

    showList()
})
