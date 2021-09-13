import HomePage from "./pages/HomePage.svelte";
import LoginPage from "./pages/LoginPage.svelte";

export const routes = {
    "/": LoginPage,
    "/home": HomePage,
    "*": LoginPage,
};
