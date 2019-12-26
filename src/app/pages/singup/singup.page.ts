import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
//import { AngularFirestore } from '@angular/fire/firebase';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
  username: string = ""
	password: string = ""
	cpassword: string = ""


  constructor(public afAuth: AngularFireAuth,
		//public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
		public router: Router) { }

  ngOnInit() {
  }
  async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
  }
  async register() {
		const { username, password, cpassword } = this
		if(password !== cpassword) {
			return console.error("Passwords don't match")
		}

		try {
			const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@codedamn.com', password)

			this.afstore.doc(`users/${res.user.uid}`).set({
				username,
				password
			})

			this.user.setUser({
				username,
				uid: res.user.uid
			})

			this.presentAlert('Success', 'You are registered!')
			this.router.navigate(['/login'])

		} catch(error) {
			console.dir(error)
		}
	}


}
