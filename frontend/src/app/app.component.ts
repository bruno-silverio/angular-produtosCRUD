import { Component } from '@angular/core';
import { HeaderComponent } from "./components/template/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    //imports: [RouterOutlet],
    templateUrl: 'app.component.html',
    imports: [HeaderComponent]
})
export class AppComponent {
  title = 'frontend';
}
