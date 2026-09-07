import { Component } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ayuda',
  templateUrl: 'ayuda.page.html',
  styleUrls: ['ayuda.page.scss'],
  imports: [IonContent, IonButton, RouterLink],
})
export class AyudaPage {}