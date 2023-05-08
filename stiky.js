let teket = document.querySelector(".teket");
let add = document.querySelector(".add");
let arr;
if(JSON.parse(localStorage.getItem("tasks"))){
    arr = JSON.parse(localStorage.getItem("tasks"));
}else{
    arr = [];
}

// ---------- function Save Genrat ------------------------------------------------------
let table = "";
function CreateAlways() {
for(let i=0;i<arr.length;i++){
    console.log("ok");
    table += `<textarea class="Stiky" placeholder="write Your Note" id="${arr[i].id}">${arr[i].title}</textarea>`
}
teket.innerHTML += table;
}
// ------------ function add Tasks -------------------------------------------------------------------------
document.querySelector(".add").addEventListener("click",()=>{
// add new Task ---------------------------------------------------------------
let element = "";
let objTask = {
title:"",
id:arr.length,
}
element = addTasks(objTask.title,objTask.id);
arr.push(objTask);
localStorage.setItem("tasks", JSON.stringify(arr));
teket.appendChild(element);
});

// function Generat Add Tasks -------------------------------------------------------------------------------
function addTasks(stiky,taskID) {
let area =document.createElement("textarea");
area.classList.add("Stiky");
area.value=stiky;
area.id=taskID;
area.placeholder="write Your Note";

 return area;
}


// Delete Tasks ---------------------------------------------------------------------------------------
function deleteTasks() {
// Make Confirme --------------------------------------------------------------------------------------
document.addEventListener("dblclick", (elo)=>{
if(elo.target.className =="Stiky"){
    let alone=confirm("Are you sure to Delete this tasks");
if(alone == true){
// Delete from Local Storage ----------------------------------------------------------------------------
    arr = arr.filter(t => t.id != elo.target.id);
// Remove Element  ---------------------------------------------------------------------------------------
    elo.target.remove();
// Save from Local Storage ----------------------------------------------------------------------------
    localStorage.setItem("tasks", JSON.stringify(arr));
}
}

});
}

// Update Tasks ---------------------------------------------------------------------------------------
function updateTasks() {
// Make Confirme --------------------------------------------------------------------------------------
document.addEventListener("change", (ele)=>{
    if(ele.target.className =="Stiky"){
        let flone=confirm("Are you sure to Update this tasks");
    if(flone == true){
// Update from Local Storage ----------------------------------------------------------------------------
    let rin = arr.filter(t => t.id == ele.target.id)[0];
console.log("OKKKKKKKKKK");
// Update Element  ----------------------------------- ----------------------------------------------------
rin.title = ele.target.value;
console.log("stop");
// Save from Local Storage --------------------------------------------------------------------------------
localStorage.setItem("tasks", JSON.stringify(arr));
    }
}
});
    }
    
    





























CreateAlways();
updateTasks();
deleteTasks();













let frot = [1,2,3,4,5];
let farfrot = new Set(frot);
console.log(farfrot); 
farfrot.delete(2);
console.log(frot);  
console.log(farfrot); 
farfrot.clear();
console.log(farfrot); 
farfrot.has(5);
console.log(farfrot.has(5));

