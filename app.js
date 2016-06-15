(function(){

//cache dom
var submit = document.querySelector("button");
var blankNote = document.createElement('div');
var noteCount = 1;
var newNote = createNote();
var container = document.getElementsByClassName("container")[0];

//event listeners
submit.addEventListener('click',function(){
  var colourField = document.querySelector('#colour');
  var colourValue = colourField.value;
  var titleField = document.querySelector('#message');
  var titleValue = titleField.value;
  var thisNote = createNote(colourValue,titleValue,noteCount);
  appendNote(thisNote);
})

//functions
function createNote(colour,title,count){
  var currentNote = document.createElement('div');
  currentNote.className = "box";
  currentNote.innerHTML="<h2>" + count + ".<br>" + "" + title + "</h2>"
  currentNote.style.background = colour;
  return currentNote;
}

function appendNote(note){
  container.appendChild(note);
  noteCount ++;
}
  
}) ()
