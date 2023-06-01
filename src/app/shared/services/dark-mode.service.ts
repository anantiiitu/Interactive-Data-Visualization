import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({ providedIn: 'root' })
export class DarkModeService {
  private currentThemeClass: string = 'indigo-pink';

  constructor(private overlayContainer: OverlayContainer) {}

  toggleTheme(): void {
    const themeClass =
      this.currentThemeClass === 'indigo-pink'
        ? 'deeppurple-amber'
        : 'indigo-pink';

    this.overlayContainer
      .getContainerElement()
      .classList.remove(this.currentThemeClass);
    this.overlayContainer.getContainerElement().classList.add(themeClass);

    this.currentThemeClass = themeClass;
  }
}
