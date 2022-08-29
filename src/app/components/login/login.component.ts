import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({ 
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(private _router: Router, private _user:UserService){ }

  ngOnInit(): void {
  }

  moveToRegister() {
    this._router.navigate(['/register']);
  }

  login() {
    if(!this.loginForm.valid) {
      console.log('Invalid'); return;
    }

    this._user.login(JSON.stringify(this.loginForm.value)) 
    .subscribe(
      {
        next: (result: any) => {
          console.log(result);
          localStorage.setItem("username", result._doc.username);
          localStorage.setItem("uid", result._doc._id);  
          this._router.navigate(['/user']);
        },
        error: (err: any) => {
          console.error(err);
          document.getElementsByClassName("error-msg")[0].innerHTML = err.error.message;

          
        }
      }
    )
  }

}
