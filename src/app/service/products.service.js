import axiosInstance from "../axiosConfig";
import { productsAPI } from "../../constants/api.routes";
import {
    fetchProductsStart,
    fetchProductsSuccess,
    fetchProductsFailure,
} from "../slice/product.slice";

export const fetchProducts = () => async (dispatch) => {
    dispatch(fetchProductsStart());

    try {
        const response = await axiosInstance.get(productsAPI);
        const products = response.data?.data || [];
        dispatch(fetchProductsSuccess(products));
        console.log(products);
        return { success: true, data: products };
    } catch (error) {
        const errorMessage =
            error.response?.data?.message || "Failed to fetch products.";
        dispatch(fetchProductsFailure(errorMessage));
        return { success: false, message: errorMessage };
    }
};
