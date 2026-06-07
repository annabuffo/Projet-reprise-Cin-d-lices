import homePage from './pages/homePage.svelte';
import Login from './pages/Longin.svelte';
import Register from './pages/Register.svelte';

export const routes = {
    '/': homePage,
    '/login': Login,
    '/register': Register,
};