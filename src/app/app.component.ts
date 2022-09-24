import { Component } from '@angular/core';
import { getChallenge } from './models/challenges/challenges.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'boton-rojo';
  randomChallenge: string | null = null;

  challenge(difficult: 'easy' | 'hard'): void {
    this.randomChallenge = getChallenge(difficult);
  }
  clearChallange(): void {
    this.randomChallenge = null;
  }
}
