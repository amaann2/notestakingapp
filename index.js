showNotes();

let btn = document.getElementById("addBtn");
btn.addEventListener("click",()=>{
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.push(addTxt.value);
   localStorage.setItem("notes", JSON.stringify(notesobj));
  addTxt.value = "";
  
  console.log(notesobj);
  showNotes();

})
// function myFunction() {
// }
function showNotes() {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `
       <div class="card my-2 mx-2" style="width: 18rem;">
       <div class="card-body">
           <h5 class="card-title">Notes ${index+1}</h5>
           <p class="card-text">${element}</p>
           <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Notes</button>
       </div>
   </div>`;
  });
  let notessElm = document.getElementById("notes");
  if (notesobj.length!=0) {
      notessElm.innerHTML = html;
  }
  else{
      notessElm.innerHTML =`no notes`;
  }
}

function deleteNotes(index){
    console.log("i am deleting",index);
    let notes = localStorage.getItem("notes");

    if (notes == null) {
      notesobj = [];
    } else {
      notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}
