export const addToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data) {
        console.log(`getFromLocalStorage ${data}`);
        return JSON.parse(data);
    }
    return null;
}