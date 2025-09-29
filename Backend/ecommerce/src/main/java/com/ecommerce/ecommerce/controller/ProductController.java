package com.ecommerce.ecommerce.controller;

import com.ecommerce.ecommerce.Dto.OrderDto;
import com.ecommerce.ecommerce.Dto.ProductDto;
import com.ecommerce.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // Allow Vite React frontend
public class ProductController {

    @Autowired
    private ProductService productService;

    // GET /api/products
    @GetMapping("/products")
    public List<ProductDto> getProducts() {
        return productService.getAllProducts();
    }

    // POST /api/checkout
    @PostMapping("/checkout")
    public String checkout(@RequestBody OrderDto orderDto) {
        System.out.println("Order received: " + orderDto.getItems());
        return "Order placed successfully!";
    }
}