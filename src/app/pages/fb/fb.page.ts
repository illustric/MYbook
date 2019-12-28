import { Component, OnInit } from '@angular/core';
//import {LoadingController, Platform, NavController} from 'ionic-angular';
import { auth } from 'firebase/app'
import { Facebook } from '@ionic-native/facebook';

import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-fb',
  templateUrl: './fb.page.html',
  styleUrls: ['./fb.page.scss'],
})
export class FbPage implements OnInit {
  isLoggedIn:boolean = false;
  users: any;

  constructor(/*private navCtrl: NavController, private fb: Facebook, public loadingCtrl: LoadingController, private plt: Platform, public afAuth: AngularFireAuth*/) { }

  ngOnInit() {
  }

  /*ionViewWillEnter(){

    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      showBackdrop: false
    });
    loading.present()

    this.fb.getLoginStatus()
        .then(res => {
          if(res.status === "connected") {
            this.isLoggedIn = true;
            this.getUserDetail(res.authResponse.userID);
            loading.dismiss()
          } else {
            this.isLoggedIn = false;
            loading.dismiss()
          }
        })
        .catch((e) => {
          loading.dismiss()
          console.log(e)
        });
  }
  getUserDetail(userID: any) {
    throw new Error("Method not implemented.");
  }

  logout() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      showBackdrop: false
    });
    loading.present()
    if (this.plt.is('cordova')) {
      this.fb.logout()
          .then( res => {
            this.isLoggedIn = false
            loading.dismiss()
          })
          .catch(e => {
            loading.dismiss()
            console.log('Error logout from Facebook', e)
          });
    } else{
      this.afAuth.auth.signOut().then( res => {
        this.isLoggedIn = false
        this.users = null
        loading.dismiss()
      })
          .catch(e => {
            loading.dismiss()
            console.log('Error logout from Google', e)
          });
    }
  }*/
}
