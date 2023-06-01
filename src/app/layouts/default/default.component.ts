import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
  sidebarOpen = true;
  isDarkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) {}

  openSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
