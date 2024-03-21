import { configure } from "@testing-library/react";
import { CartSlice } from './Slices/CartSlice';


export const store = configure({
    reducer: {
        cart:CartSlice
    }
});