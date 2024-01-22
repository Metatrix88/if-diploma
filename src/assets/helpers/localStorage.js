export const saveDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getDataFromLocalStorage = (key) => {
  const userData = localStorage.getItem(key);
  return userData ? JSON.parse(userData) : null;
};

export const clearDataFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
