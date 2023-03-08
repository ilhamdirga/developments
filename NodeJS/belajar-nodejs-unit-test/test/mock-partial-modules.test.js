// Digunakan untuk meng-mock sebagian module

import { getAllProduct, getProductById } from "../src/database";
import { productServices } from "../src/product-services";


jest.mock("../src/database", () => {

    const originalModule = jest.requireActual("../src/database");

    return {
        __esModule: true,
        ...originalModule,
        getAllProduct: jest.fn(), //digunakan untuk mock module getAllProduct saja
    }
});

test.failing("Mock Test Modules", () => {
    productServices.findProductById(1);
});

test("Mock Test Module All Products", () => {
    const product =  [
        {
            id: 1,
            name: "Mock Product"
        },
        {
            id: 2,
            name: "Mock Product"
        }
    ]

    getAllProduct.mockImplementation(() => {
        return product;
    })

    const testProduct = productServices.findAllProduct();
    expect(testProduct).toEqual(product);
})