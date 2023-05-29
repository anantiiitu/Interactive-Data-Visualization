import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user = {
    name: 'Anant Kabra',
    email: 'anantkabra@angular.com',
    location: 'India',
    phone: '+91 1234567890',
    website: 'https://anantkabra.com',
    occupation: 'Software Engineer',
    about:
      'A highly motivated, enthusiastic and hardworking individual seeking knowledge of various technologies. An ardent learner who aims to find efficient solutions for real-time problems.',
    profilePicture: 'assets/image.JPG', // Replace with your profile picture URL
  };
}
