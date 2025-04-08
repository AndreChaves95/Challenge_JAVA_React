package com.natixis.project.unit;

import com.natixis.project.entity.Product;
import com.natixis.project.repository.ProductRepository;
import com.natixis.project.service.ProductService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    @Test
    void testGetAllProducts() {
        Product product1 = new Product(1L, "Monitor", "LG Monitor", 505.50);
        Product product2 = new Product(2L, "MacBook", "", 20000.0);
        List<Product> mockProducts = List.of(product1, product2);

        when(productRepository.findAll()).thenReturn(mockProducts);

        List<Product> result = productService.getAllProducts();

        assertEquals(2, result.size());
        assertEquals("Monitor", result.get(0).getName());
        assertEquals(505.50, result.get(0).getPrice());
        assertEquals("MacBook", result.get(1).getName());
        assertEquals(20000.0, result.get(1).getPrice());
    }

    @Test
    void testGetProductById() {
        Product product1 = new Product(1L, "Desk", "Standing desk", 800.25);

        when(productRepository.findById(product1.getProductId())).thenReturn(Optional.of(product1));

        Product result = productService.getProductById(product1.getProductId());

        assertEquals("Desk", result.getName());
        assertEquals(800.25, result.getPrice());
    }

    @Test
    void testCreateProduct() {
        Product product = new Product(null, "Mouse", "Wireless mouse", 19.99);
        Product productSaved = new Product(1L, "Mouse", "Wireless mouse", 19.99);

        when(productRepository.save(product)).thenReturn(productSaved);

        Product result = productService.createProduct(product);

        assertEquals("Mouse", result.getName());
        assertEquals(19.99, result.getPrice());
        assertNotNull(result.getProductId());
    }

    @Test
    void testDeleteProduct() {
        Long productId = 1L;
        doNothing().when(productRepository).deleteById(productId);

        assertDoesNotThrow(() -> productService.deleteProduct(productId));

        verify(productRepository, times(1)).deleteById(productId);
    }
}
