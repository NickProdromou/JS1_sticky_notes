//variables

var stickyNote = {
  noteSubmit : document.querySelector("button"),
  noteColour :"",
  createNote : function(colour, title){
    var createdNote = this.emptyNote;
    createdNote.className="box";
    this.noteCount ++;
    createdNote.innerHtml = "<h2>"+ this.noteCount + title + "</h2>";
    createdNote.style.background = colour;
    this.appendNote(createdNote);
  },
  appendNote : function(newNote){
    document.getElementsByClassName('container').appendChild(newNote);
  },
  emptyNote : document.createElement('div'),
  noteTitle : "",
  noteCount : 0
};

stickyNote.noteSubmit.addEventListener('click', function(){
  stickyNote.noteColour = document.getElementById('colour').value;
  stickyNote.noteTitle = document.getElementById('message').value;
  stickyNote.createNote(stickyNote.noteColour,stickyNote.noteTitle)
})
