const form = document.getElementById("notes-form");
const input = document.getElementById("note");
const notesList = document.getElementById("notes-list");
const clearBtn = document.getElementById("clear-btn");

let notesArray = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
  notesList.innerHTML = "";
  notesArray.forEach((note, index) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = note;
    li.appendChild(span);
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", () => {
      notesArray.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesArray));
      renderNotes();
    });
    li.appendChild(button);
    notesList.appendChild(li);
  });
}

renderNotes();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const note = input.value.trim();
  if (note.length) {
    notesArray.push(note);
    localStorage.setItem("notes", JSON.stringify(notesArray));
    input.value = "";
    renderNotes();
  }
});

clearBtn.addEventListener("click", () => {
  notesArray = [];
  //sessionStorage je za brisanje cim se ugasi program
  localStorage.removeItem("notes");
  renderNotes();
});
