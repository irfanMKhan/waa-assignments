package com.secured.assignments.assignment_4.model.exercise_2;

import jakarta.persistence.Embeddable;

@Embeddable
public class Address {
    private String street;
    private String zip;
    private String city;
}
