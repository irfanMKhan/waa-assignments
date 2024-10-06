package com.secured.assignments.assignment_5.repository;

import com.secured.assignments.assignment_5.model.dao.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {

}
