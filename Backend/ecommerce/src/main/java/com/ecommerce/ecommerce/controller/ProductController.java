package com.ecommerce.ecommerce.controller;

import com.ecommerce.ecommerce.Dto.OrderDto;
import com.ecommerce.ecommerce.Dto.ProductDto;
import com.ecommerce.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    // Exception Handler
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<Map<String, String>> handleRuntimeException(RuntimeException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", ex.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
}
