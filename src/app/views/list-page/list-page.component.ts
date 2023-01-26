import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { ProfilesService } from 'src/app/services/profiles.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {


  profiles: Profile[] = []

  constructor(private profilesService: ProfilesService) {}

  ngOnInit(): void {
    this.profiles = this.profilesService.getProfiles()

  }


}
