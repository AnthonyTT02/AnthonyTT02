<?php

class BookModel {
    public function getBooks() {
       
        $mysql = new mysqli('localhost', 'root', '', 'booksarray');

        if ($mysql->connect_errno) {
            echo "Соединение не установлено";
            exit();
        }

        $mysql->set_charset("utf8");

        
        $query = "SELECT * FROM books";
        $result = $mysql->query($query);
        
        if ($result) {
            $arrayResult = $result->fetch_all(MYSQLI_ASSOC);
        } else {
            $arrayResult = [];  
        }

        $mysql->close(); 
        return $arrayResult;
    }
}
