<?php

class Controller{



    public function StartSite(){
        include 'view/main.php';
    }

    public function BooksList(){
        $booksList = Model::getBookList();
        include 'view/bookList.php';
    }

    public function bookOne($title){
        $test = Model::getBook($title);
        if ($test[0]==true){
            $book = $test[1];
            include 'view/bookOne.php';
        }
        else {
            include 'view/error404.php';
        }
    }
    public function error404(){
        include 'view/error404.php';
    }

    require_once 'model/BookModel.php';

    $bookModel = new BookModel();
    $books = $bookModel->getBooks(); 

}
 ?>