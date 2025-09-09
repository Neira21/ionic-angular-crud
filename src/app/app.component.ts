import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, storefront, person, addOutline } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonIcon,
  IonList,
  IonItem,
  IonMenuToggle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonIcon,
    IonLabel,
    IonItem,
    RouterLink,
    IonMenuToggle,
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private menuController = inject(MenuController);

  constructor() {
    // Registrar los iconos que vamos a usar
    addIcons({ home, storefront, person, addOutline });
  }

  async closeMenu() {
    console.log('Cerrando menú');
    await this.menuController.close();
  }
}
