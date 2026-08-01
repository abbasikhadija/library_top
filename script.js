
const myLibrary=[];
newBook=new book('the kite runner','Khalid Hussaini' , 192 , 1);
newBook1 = new book('how to revive your heart', 'Nouman Ali Khan' , 145 , 1);
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
addBook =function(){
    
    mybook =new book(title,author, pages ,read); 
    myLibrary.push(mybook);

}
// adding functionality in the add book button 
addButton=document.getElementById("addButton");
addingBook=document.getElementById("addingBook");
  function showForm(){
    addingBook.style.display='block';
}
addButton.addEventListener('click',showForm);
// adding functionality to save button 
