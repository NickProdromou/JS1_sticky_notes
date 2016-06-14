// //variables
//
// var stickyNote = {
//   noteSubmit : document.querySelector("button"),
//   noteColour :"",
//   createNote : function(colour, title){
//     var createdNote = this.emptyNote;
//     createdNote.className="box";
//     this.noteCount ++;
//     createdNote.innerHtml = "<h2>"+ this.noteCount + title + "</h2>";
//     createdNote.style.background = colour;
//     this.appendNote(createdNote);
//   },
//   appendNote : function(newNote){
//     document.getElementsByClassName('container').appendChild(newNote);
//   },
//   emptyNote : ,
//   noteTitle : "",
//   noteCount : 0
// };
//
// stickyNote.noteSubmit.addEventListener('click', function(){
//   stickyNote.noteColour = document.getElementById('colour').value;
//   stickyNote.noteTitle = document.getElementById('message').value;
//   stickyNote.createNote(stickyNote.noteColour,stickyNote.noteTitle)
// })

//cache dom
var submit = document.querySelector("button");
var colourValue = document.getElementById('colour').value;
var titleValue = document.getElementById('message').value;
var blankNote = document.createElement('div');
var noteCount = 0;
var newNote = createNote();
var container = document.getElementsByClassName("container")[0];


//function
function createNote(title,colour){
  var newNote = blankNote;
  newNote.className="box";
  noteCount += 1;
  newNote.innerText = noteCount + "." +  title ;
  newNote.style.background = colour;
  return newNote;
}

function appendNote(note){
  container.appendChild(note);
}


//event listener
submit.addEventListener('click', function(){
  var createdNote = createNote(titleValue,colourValue);
  appendNote(createdNote);
})
