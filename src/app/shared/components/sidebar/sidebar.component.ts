import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() sidebarOpen: boolean = false;
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }
}
