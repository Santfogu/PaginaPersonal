import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pagina Personal';

  actual = 'InfoPersonal';

  cambiarActual(actual: string): void {
    this.actual = actual;
  }
}
