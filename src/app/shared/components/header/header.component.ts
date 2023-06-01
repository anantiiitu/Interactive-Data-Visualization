import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() openSidebarEvent = new EventEmitter<void>();

  isDarkMode = false;
  isIndigoPink: boolean = true;

  constructor(private router: Router, private darkMode: DarkModeService) {}
  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }

  toggleTheme(): void {
    this.darkMode.toggleTheme();
  }

  openSidebar(): void {
    this.openSidebarEvent.emit();
  }
}
