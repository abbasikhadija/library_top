
const myLibrary=[];
const newBook=new book('The Kite Runner','Khalid Hussaini' , 192 , 1);
const newBook1 = new book('How to revive your heart', 'Nouman Ali Khan' , 145 , 1);
myLibrary.push(newBook);
myLibrary.push(newBook1);


// book function 
function book(title,author,pages,read){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id=crypto.randomUUID();
    this.info = function(){
        if(this.read===0){
            reading="not read yet";
        }
        else{
            reading ="have read";
        }
        info=`${this.title} by ${author} , ${this.pages} pages, reading`;
        return info;
    }




}
// adding book in array
addBook =function(title,author, pages ,read){
    
    mybook =new book(title,author, pages ,read); 
    myLibrary.push(mybook);


}

const overlay = document.getElementById("overlay");


function clear(){
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
}
// adding functionality in the add book button 
const addButton=document.getElementById("addButton");
const addingBook=document.getElementById("addingBook");
  function showForm(){
    addingBook.style.display='block';
    overlay.style.display = "block";
}
addButton.addEventListener('click',showForm);


// adding functionality to save button 

const saveButton=document.getElementById('saveButton');
function saveInfo(){
    const title=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    const pages=document.getElementById('pages').value;
    const read = document.getElementById("read").checked ? 1 : 0;
    addBook(title,author, pages ,read);
    displayBooks();

    clear();

    addingBook.style.display = "none";
    overlay.style.display = "none";
    


}
saveButton.addEventListener('click',saveInfo);

// adding functionality to cancel button

const cancelButton =document.getElementById('cancelButton');
function cancelInfo(){
    clear();
    addingBook.style.display='none';
    overlay.style.display = "none";

}
cancelButton.addEventListener('click' , cancelInfo);

const library = document.getElementById("library");

function displayBooks() {

    library.innerHTML = "";

    myLibrary.forEach(book => {

        const card = document.createElement("div");
        card.classList.add("book-card");

        card.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <button class="${book.read ? "read" : "not-read"}">
                ${book.read ? "Read" : "Not Read"}
            </button>
        `;

        library.appendChild(card);
    });
}

displayBooks();
