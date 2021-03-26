import { Component, OnInit } from '@angular/core';
import { ApiBDService } from '../../servicios/api-bd.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName; userPass; dataUser;
  
  constructor(private api: ApiBDService) {}

  ngOnInit() {
  }


  Login(){
    if(this.userName=='' || this.userName==undefined){
        alert("Ingrese su nombre de usuario")
    }else if(this.userPass=='' || this.userPass==undefined){
      alert("Ingrese su contraseña")
    }else{
      let x = {
        funcion: 'Login',
        username: this.userName,
        userpass: this.userPass
      }
      this.api.Login(x).subscribe(res=>{
         this.dataUser=res;
         if(this.dataUser!=undefined){
           console.log(this.dataUser)
           alert(this.dataUser['nombre'])
         }
      })
    
    }
   
  }

}
