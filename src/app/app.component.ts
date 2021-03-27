import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private route: Router, private alert: AlertController) {}

ngOnInit(){
  if(window.localStorage['IdUsuario']==undefined){
    this.route.navigate(['/login'])
  }
}



 async salida(){

  const alert = await this.alert.create({
    cssClass: 'my-custom-class',
    message: 'Cerrar sesión',
    buttons: [
      {
        text: 'No',
        role: 'NO',
        cssClass: 'secondary',
        handler: (blah) => {
        
        }
      }, {
        text: 'SI',
        handler: () => {
          window.localStorage['IdUsuario']=undefined;
           this.route.navigate(['/login'])
        }
      }
    ]
  });

  await alert.present();
}

   

}
