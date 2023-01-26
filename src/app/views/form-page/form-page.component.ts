import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/profile.model';
import { ProfilesService } from 'src/app/services/profiles.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  profile: any = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    hobbies: ""
  }

  hobbiesList: string[] = ['Football', 'Basketball', 'Handball', 'Tennis', 'Ice hockey'];


  showResult: boolean = false
  message: string = ""

  constructor(private profilesService: ProfilesService, private router: Router) { }

  ngOnInit(): void {
  }

  resetFormData() {
    this.profile= {
      firstName: "",
      lastName: "",
      emailAddress: "",
      hobbies: ""
    }
    this.showResult = false
  }

  viewFormData () {
    this.checkData(this.profile)
    if (this.message != "") {
      window.alert(this.message)
      this.message = ""
      return
    }
    this.showResult = true
  }

  removeData () {
    this.showResult = false
  }

  saveData() {
    if (this.showResult == false) {
      window.alert("Can't save data with empty result!")
      return
    }
    this.profilesService.addToProfiles(this.profile)
    this.router.navigateByUrl('list')
  }

  checkData (p: any) {
    if ( p.firstName == (undefined || "") || p.lastName == (undefined || "") || 
         p.emailAddress == (undefined || "") || p.hobbies == (undefined || "") 
    ) {
      this.message = "You have not entered all the data!"
    }
  }




}
