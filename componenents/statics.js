Vue.component('cabeza',{ 
  template: //html 
  `
    <div class="header">
    <div class="logo">
    <h1>{{logo}}</h1>
    </div>
    <router-link to="/" class="router">Inicio</router-link>
    <router-link to="/nosotros" class="router">Nosotros</router-link>
    <router-link to="/servicios" class="router">Servicios</router-link>
    <router-link to="/portafolio" class="router">Portafolio</router-link>
    <router-link to="/blog" class="router">Blog</router-link>
    <router-link to="/contacto" class="router">Contacto</router-link>
    
  </div>
  `,data(){
    return{
      inicio: 'Inicio',
      logo: 'yksoft'
      
    }
  }
});
Vue.component('pie',{ 
  template: //html 
  `
    <div class="footer">
    <div class="information">
    <h3>{{contacto}}</h3>
    <p><b>Celuar:</b> 3123365967 </p>
    <p><b>Email:</b> yekogarcia@yahoo.com</p>
    <p><b>Ciudad:</b> Malaga (Santander)</p>
    <p><b>Dirección:</b> Calle 5e # 6 - 40</p>
    </div>
    <div class="red_social">
    
    
    <h3>{{footer}}</h3>
    <p><i class="fab fa-facebook"></i><b>Facebook:</b> 3123365967 </p>
    <p><i class="fab fa-instagram"></i><b>Instagram:</b> yekogarcia@yahoo.com</p>
    <p><i class="fab fa-whatsapp"></i><b>WhatsApp:</b> Malaga (Santander)</p>
    </div>
  </div>
  `,data(){
    return{
      footer: 'Redes sociales',
      contacto: 'Contacto'

    }
  }
});

//<ul id="">
//<li>{{inicio}}</li>
//<li>Nosotros</li>
//<li>Servicios</li>
//<li>Portafolio</li>
//<li>Blog</li>
//<li>Contacto</li>
//</ul>