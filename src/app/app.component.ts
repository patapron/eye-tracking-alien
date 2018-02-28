import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  windowWidth;
  windowHeight;

  ngOnInit() {
    this.Initial();
  }

  /**
   * Initialize all setups
   *
   * @memberof AppComponent
   */
  Initial(): void {
    this.SetWindowSize();
    // If the window change the size, funtion will be launched to set sizes again
    window.addEventListener('resize', this.SetWindowSize);

    // Add an event to mouse move
    document.addEventListener('mousemove', event => {
      // Set vertical mouse position
      const mouseTop = event.clientY;
      // Set horizontal mouse position
      const mouseLeft = event.clientX;

      // Calculate top percent position on vertical axis
      const percentTop = Math.round(mouseTop * 100 / this.windowHeight);
      // Calculate left percent position on horizontal axis
      const percentLeft = Math.round(mouseLeft * 100 / this.windowWidth);

      // Get HTML dom element
      const eye = <HTMLElement>document.querySelector('.eye');
      // Apply new vertical position
      eye.style.top = -0.2 + 0.7 * percentTop / 100 + 'em';
      // Apply new horizontal position
      eye.style.left = -0.2 + 0.7 * percentLeft / 100 + 'em';
    });
  }

  /**
   * Set window width and height local variables
   *
   * @memberof AppComponent
   */
  SetWindowSize(): void {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }
}
