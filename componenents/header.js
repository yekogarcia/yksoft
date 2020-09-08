Vue.component('cabeza',{
  template: `
    <div class="header">
    <div class="logo">
    <h1>{{logo}}</h1>
    </div>
    <ul id="">
      <li>{{inicio}}</li>
      <li>Nosotros</li>
      <li>Servicios</li>
      <li>Portafolio</li>
      <li>Blog</li>
      <li>Contacto</li>
    </ul>
  </div>
  `,data(){
    return{
      inicio: 'Inicio',
      logo: 'yksoft'
      
    }
  }
});