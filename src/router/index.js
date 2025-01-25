import { createRouter, createWebHistory } from 'vue-router';
import FormularioPage from '@/components/Formulario.vue'; 
import tablaIncidenciasPage from '@/components/TablaIncidencias.vue'; 

const routes = [
  { path: '/', name: 'FormularioPage', component: FormularioPage },
  { path: '/tablaIncidencias', name: 'TablaIncidencias', component: tablaIncidenciasPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;