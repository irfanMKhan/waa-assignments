package com.secured.assignments.assignment_3.model.dao.UnidirectionalOneToOne;

import jakarta.persistence.*;

public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String isbn;

    @OneToOne
    @JoinColumn(name = "author_id")
    private Author author;
}
