package com.ecommerce.ecommerce.Dto;

import lombok.Data;
import java.util.Map;

@Data
public class OrderDto {
    // key: productId, value: quantity
    private Map<Long, Integer> items;
}