import { createRouter, createWebHistory } from 'vue-router';

import ProjectsList from './pages/ProjectsList.vue'
import SingleProject from './pages/SingleProject.vue'
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
        },
        {
            path: "/projects-list/:id",
            name: "Single-Project",
            component: SingleProject
        }
    ]
});

//alternativa se da main.js volete importare senza graffe:
// export default router;
export { router };