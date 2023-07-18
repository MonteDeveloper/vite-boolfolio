import { createRouter, createWebHistory } from 'vue-router';

import ProjectsList from './pages/ProjectsList.vue'
import HomePage from './pages/HomePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage
        },
        {
            path: "/projects-list",
            name: "Projects",
            component: ProjectsList
        }
    ]
});

//alternativa se da main.js volete importare senza graffe:
// export default router;
export { router };