export const initialState = { cartCount: 0 };

export const cartReducer = (count, action) => {
    switch (action.type) {
        case "increment":
            return { cartCount: count.cartCount + 1 };
        case "decrement":
            return { cartCount: Math.max(0, count.cartCount - 1) };
        default:
            return count;
    }
};
