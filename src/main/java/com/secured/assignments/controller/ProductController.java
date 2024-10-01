package com.secured.assignments.controller;

import com.secured.assignments.model.dto.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    @GetMapping("/")
    public Product getProduct() {
        Product product = new Product(1, "Google Pixel 9 Pro xl", "123-4567-098", "Android Phone");
        return product;
    }

}
