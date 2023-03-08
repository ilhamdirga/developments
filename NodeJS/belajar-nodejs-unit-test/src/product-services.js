import { getAllProduct, getProductById } from "./database"

export class productServices {
    static findProductById = (id) => {
        return getProductById(id);
    } 

    static findAllProduct = () => {
        return getAllProduct();
    }
}
