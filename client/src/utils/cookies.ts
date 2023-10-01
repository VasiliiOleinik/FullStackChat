import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getCookie = (name) => cookies.get(name);
export const setCookie = (name, val, opts) => cookies.set(name, val, opts);
export const removeCookie = (name, opts) => cookies.remove(name, opts);
