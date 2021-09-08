import HomePage from "./pages/HomePage.svelte";
import LoginPage from "./pages/LoginPage.svelte";

export const routes = {
    "/": LoginPage,
    "/about": HomePage,
    "*": LoginPage,
};
