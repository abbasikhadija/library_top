
const myLibrary=[];



function book(title,author,pages,read){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
addBook =function(){
    
    mybook =new book(title,author, pages ,read); 
    myLibrary.push(mybook);

}