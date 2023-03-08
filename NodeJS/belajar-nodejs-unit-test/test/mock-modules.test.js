import { getAllProduct, getProductById } from "../src/database"
import { productServices } from "../src/product-services"

jest.mock("../src/database");

test("Mock Test Modules", () => {
    getProductById.mockImplementation((id) => {
        return {
            id: id,
            name: "Mock Product"
        }
    })
    const product = productServices.findProductById(1);
    expect(product).toEqual({
        id: 1,
        name: "Mock Product"
    })
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