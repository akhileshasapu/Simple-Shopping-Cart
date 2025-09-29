package com.ecommerce.ecommerce.controller;

import com.ecommerce.ecommerce.Dto.ProductDto;
import com.ecommerce.ecommerce.service.ProductService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Collections;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.doThrow;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ProductController.class)
public class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProductService productService;

    // Empty product list
    @Test
    public void testGetProducts_emptyList() throws Exception {
        when(productService.getAllProducts()).thenReturn(Collections.emptyList());

        mockMvc.perform(get("/api/products")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(0)));
    }

    // Non-empty product list
    @Test
    public void testGetProducts_nonEmpty() throws Exception {
        ProductDto product1 = new ProductDto(1L, "Test Product 1", 100.0, "image1.png");
        ProductDto product2 = new ProductDto(2L, "Test Product 2", 200.0, "image2.png");

        when(productService.getAllProducts()).thenReturn(Arrays.asList(product1, product2));

        mockMvc.perform(get("/api/products")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].id", is(1)))
                .andExpect(jsonPath("$[0].name", is("Test Product 1")))
                .andExpect(jsonPath("$[0].price", is(100.0)))
                .andExpect(jsonPath("$[0].imageUrl", is("image1.png")))
                .andExpect(jsonPath("$[1].id", is(2)))
                .andExpect(jsonPath("$[1].name", is("Test Product 2")))
                .andExpect(jsonPath("$[1].price", is(200.0)))
                .andExpect(jsonPath("$[1].imageUrl", is("image2.png")));
    }

    // Service throws exception
    @Test
    public void testGetProducts_serviceException() throws Exception {
        when(productService.getAllProducts()).thenThrow(new RuntimeException("Service error"));

        mockMvc.perform(get("/api/products")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isInternalServerError());
    }
}
