import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() openSidebarEvent = new EventEmitter<void>();

  constructor(private router: Router) {}
  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }

  openSidebar(): void {
    this.openSidebarEvent.emit();
  }
}
