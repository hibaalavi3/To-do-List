let mainbox = document.querySelector('#mainbox');
let list = document.querySelector('#list');

mainbox.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        addItem(this.value)
        this.value = ""
    }
})

let addItem = (mainbox) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${mainbox}<i></i>`;

    listItem.addEventListener("click", function(){
        this.classList.toggle('done');
    })

    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
    })

    list.appendChild(listItem);
}
