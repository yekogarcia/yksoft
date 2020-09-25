home();
about();
const Servicios ={template: "<div>Servicios</div>"};
const Portafolio ={template: "<div>Portafolio</div>"};
const Blog ={template: "<div>Blog</div>"};
const Contacto ={template: "<div>Contacto</div>"};
const routes = [
  {path:'/', component: Inicio},
  {path:'/nosotros', component: Nosotros},
  {path:'/servicios', component: Servicios},
  {path:'/portafolio', component: Portafolio},
  {path:'/blog', component: Blog},
  {path:'/contacto', component: Contacto}
];
const router = new VueRouter({routes});
 new Vue({
   router,
   el: '#app'
});