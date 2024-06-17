let bookAdder;
const bookList = document.querySelector(".books-list");
const bookAddButton = document.querySelector(".add-button");


bookAddButton.addEventListener("click", function() {
    bookAdder = document.createElement("div");
    bookAdder.className = "add-book";
    let bookDetails = document.createElement("div");
    bookDetails.id = "book-details";

    bookDetails.innerHTML = `
    <label for="Name"> Name: </label>
    <input type="text" id="Name" required>
    <label for="Author"> Author: </label>
    <input type="text" id="Author" required>
    <label for="Pages" id="Pages"> No. of Pages:  </label>
    <input type="number" id="number" required>
    <label for="Publishment" id="Publishment">  Date of Publishment: </label>
    <input type="date" id="date" required>
    <button id="submitBookButton" onclick="submitBookButton()">Submit Book</button>
  `;
    document.body.appendChild(bookAdder);
    bookAdder.appendChild(bookDetails);
})

function submitBookButton() {
    let createdBook = document.createElement("div");
    createdBook.className = "newBook";

    const nameInput = document.getElementById("Name");
    const authorInput = document.getElementById("Author");
    const pagesInput = document.getElementById("number");
    const dateInput = document.getElementById("date");

    const name = nameInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const date = dateInput.value;

    createdBook.innerHTML = `
    <h3>Book Details</h3>
    <p> <b>Name: </b>${name}</p>
    <p> <b>Author: </b>${author}</p>
    <p> <b>Pages: </b>${pages}</p>
    <p> <b>Publishment Date: </b>${date}</p>
    `;

    bookList.appendChild(createdBook);
    bookAdder = document.querySelector(".add-book");
    bookAdder.remove();
    
}