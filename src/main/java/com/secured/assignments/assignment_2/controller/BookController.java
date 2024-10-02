package com.secured.assignments.assignment_2.controller;

import com.secured.assignments.assignment_2.model.dto.Book;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final List<Book> books = new ArrayList<>(List.of(
            new Book(1, "Book One", "ISBN111", 29.99),
            new Book(2, "Book Two", "ISBN222", 39.99),
            new Book(3, "Book Three", "ISBN333", 49.99)
    ));

    @GetMapping("/v1")
    public List<Book> getAllBooksV1() {
        return books;
    }

    @GetMapping
    public List<Book> getAllBooks(@RequestParam(value = "version", required = false) String version) {
        if ("1".equals(version)) {
            return books;
        }
        return Collections.emptyList();
    }

    @GetMapping(value = "/{id}", produces = "application/cs.miu.edu-v2+json")
    public Book getBookByIdV2(@PathVariable int id) {
        return books.stream().filter(book -> book.getId() == id).findFirst().orElse(null);
    }

    @GetMapping(headers = "X-API-VERSION=2")
    public List<Book> getAllBooksHeaderV2() {
        return books;
    }

    @PostMapping
    public Book addBook(@RequestBody Book newBook) {
        books.add(newBook);
        return newBook;
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable int id, @RequestBody Book updatedBook) {
        Book book = books.stream().filter(b -> b.getId() == id).findFirst().orElse(null);
        if (book != null) {
            book.setTitle(updatedBook.getTitle());
            book.setIsbn(updatedBook.getIsbn());
            book.setPrice(updatedBook.getPrice());
        }
        return book;
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable int id) {
        books.removeIf(book -> book.getId() == id);
    }

}
