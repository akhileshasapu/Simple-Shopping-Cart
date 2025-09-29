package com.ecommerce.ecommerce.service;

import com.ecommerce.ecommerce.Dto.ProductDto;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class ProductService {

    // Hardcoded
    public List<ProductDto> getAllProducts() {
        return Arrays.asList(
                new ProductDto(1L, "Laptop", 55000.0, "https://assets.mediamodifier.com/mockups/5b053bb8306e03fd32cc5e78/ecommerce-laptop-mockup-with-a-shopping-cart.jpg"),
                new ProductDto(2L, "Smartphone", 25000.0, "https://www.phoneplacekenya.com/wp-content/uploads/2024/04/Samsung-Galaxy-S25-Ultra-a.jpg"),
                new ProductDto(3L, "Headphones", 2000.0, "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017346208_437Wx649H_202304251122161.jpeg"),
                new ProductDto(4L, "Camera", 35000.0, "https://m.media-amazon.com/images/I/81WtQ64-SOL._UF1000,1000_QL80_.jpg"),
                new ProductDto(5L, "Smartwatch", 5000.0, "https://m.media-amazon.com/images/I/41cSg6D19-L.AC_SX250.jpg"),
                new ProductDto(6L, "Tablet", 30000.0, "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/315044_0_xmxfyr.png"),
                new ProductDto(7L, "Gaming Console", 40000.0, "https://m.media-amazon.com/images/I/51NbBH89m1L._UF1000,1000_QL80_.jpg"),
                new ProductDto(8L, "Bluetooth Speaker", 4500.0, "https://m.media-amazon.com/images/I/51hNyG4yszL._UF894,1000_QL80_.jpg"),
                new ProductDto(9L, "Monitor", 15000.0, "https://w7.pngwing.com/pngs/404/255/png-transparent-computer-monitors-4k-resolution-display-resolution-1080p-monitors-gadget-electronics-computer.png"),
                new ProductDto(10L, "Keyboard", 1500.0, "https://static.vecteezy.com/system/resources/thumbnails/011/665/175/small_2x/slim-thai-and-english-keyboard-isolated-on-white-background-png.png"),
                new ProductDto(11L, "Mouse", 800.0, "https://www.vhv.rs/dpng/d/427-4277293_computer-mouse-png-transparent-png.png"),
                new ProductDto(12L, "Printer", 12000.0, "https://png.pngtree.com/png-clipart/20241006/original/pngtree-digital-printer-manufacturer-png-image_16218519.png"),
                new ProductDto(13L, "External Hard Drive", 6000.0, "https://5.imimg.com/data5/SELLER/Default/2021/3/HN/PF/QN/97826692/external-hdd.jpg"),
                new ProductDto(14L, "Power Bank", 2000.0, "https://img.favpng.com/1/2/23/mobile-phones-battery-charger-rechargeable-battery-baterie-extern-electric-battery-png-favpng-PvcmHNuGSq38dV3sg0YuKxr83.jpg"),
                new ProductDto(15L, "Drone", 75000.0, "https://static.vecteezy.com/system/resources/thumbnails/024/673/704/small_2x/drone-flying-on-farming-to-inspection-and-scanning-the-area-for-monitoring-smart-farming-and-researching-technology-concept-transparent-background-ai-generated-generative-ai-png.png"),
                new ProductDto(16L, "VR Headset", 22000.0, "https://static.vecteezy.com/system/resources/thumbnails/041/731/769/small_2x/ai-generated-modern-vr-headset-for-immersive-virtual-reality-experience-png.png"),
                new ProductDto(17L, "Fitness Band", 3500.0, "https://atlas-content-cdn.pixelsquid.com/stock-images/fitness-tracker-orange-bracelet-BYd0MnB-600.jpg"),
                new ProductDto(18L, "Projector", 28000.0, "https://png.pngtree.com/png-vector/20240128/ourmid/pngtree-office-work-projector-illustration-3d-png-image_11506730.png"),
                new ProductDto(19L, "Microwave Oven", 11000.0, "https://e7.pngegg.com/pngimages/196/588/png-clipart-microwave-ovens-home-appliance-amana-corporation-haier-oven-kitchen-kitchen-appliance.png"),
                new ProductDto(20L, "Smart TV", 60000.0, "https://m.media-amazon.com/images/I/51lYbJhOmbL.jpg")

        );
    }
}
