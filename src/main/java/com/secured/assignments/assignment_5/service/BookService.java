package com.secured.assignments.assignment_5.service;

import com.secured.assignments.assignment_5.model.dao.Book;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface BookService {
    List<Book> getAllBooks();

    Optional<Book> getBookById(int id);

    Book addBook(Book book);

    Book updateBook(int id, Book updatedBook);

    void deleteBook(int id);
}
