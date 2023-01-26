import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  profiles: Profile[] = []

  addToProfiles(p: Profile) {
    this.profiles.push(p)
  }

  getProfiles() {
    return this.profiles
  }


  constructor() { }
}
