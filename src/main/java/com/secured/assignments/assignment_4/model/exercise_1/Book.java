package com.secured.assignments.assignment_4.model.exercise_1;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@DiscriminatorValue("Book")
@EqualsAndHashCode(callSuper = true)
public class Book extends Product {
    private int pages;
}