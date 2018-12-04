import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  identifiant:string = '';
  mdp:string = '';

  constructor(public navCtrl: NavController, public router:Router, public splashScreen: SplashScreen) { }

  ngOnInit() {
  }

    // ajouter JWT 
    onLogin(){
      this.splashScreen.show();
      if(this.identifiant == 'admin' && this.mdp == 'admin'){  
        //this.navCtrl.navigateForward('/home');
        this.router.navigateByUrl('/home');
        console.log('Bravo !!!');
      }else{
        console.log('err !!!');
      } 
    }
  
}
