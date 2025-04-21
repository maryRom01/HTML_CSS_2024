export const addToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const removeItemFromLocalStorageCart = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
};

export const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data) {
        console.log(`getFromLocalStorage ${data}`);
        return JSON.parse(data);
    }
    return null;
}