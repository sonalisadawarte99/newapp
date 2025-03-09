import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Cont1Component } from './cont1/cont1.component';
import { Iconcont1Component } from './iconcont1/iconcont1.component';
import { Cont2Component } from './cont2/cont2.component';
import { Iconcont2Component } from './iconcont2/iconcont2.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,Cont1Component,Iconcont1Component,Cont2Component,Iconcont2Component,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment';
}
