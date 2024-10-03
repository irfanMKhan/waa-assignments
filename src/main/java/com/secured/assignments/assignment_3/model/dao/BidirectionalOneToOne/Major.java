package com.secured.assignments.assignment_3.model.dao.BidirectionalOneToOne;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Major {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int requiredCredits;

    @OneToOne
    @JoinColumn(name = "student_id")
    private Student student;
}
