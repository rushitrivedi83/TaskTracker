import { Component, Input, OnInit } from '@angular/core';
import {UserService } from '../../services/user.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private _user:UserService, private _router:Router) { 

    // this._user.user()
    // .subscribe({
    //   next: (result: any) => {
    //     console.log(result);
    //     localStorage.setItem("username", result.username);
    //     localStorage.setItem("uid", result._id);  
    //   },
    //   error: (err: any) => {
    //     console.error(err);
    //     this._router.navigate(['/login']);
    //   }
    // })

    if(localStorage.getItem("uid") == null) {
      console.log("Please login first");
      this._router.navigate(['/login']);
    }
  }


  ngOnInit(): void {
    
    this.username = JSON.parse(JSON.stringify(localStorage.getItem("username")));
  }
  username: string | undefined;

  logout() {
    this._user.logout()
    .subscribe({
      next: (result: any) => {
        console.log(result); 
        localStorage.removeItem("username");
        localStorage.removeItem("uid"); 
        this._router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

}
