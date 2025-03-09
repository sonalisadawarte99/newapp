import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Cont1Component } from './cont1/cont1.component';
import { Iconcont1Component } from './iconcont1/iconcont1.component';
import { Iconcont2Component } from './iconcont2/iconcont2.component';
import { Cont2Component } from './cont2/cont2.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {
        path: 'header' , component : HeaderComponent
    },
    {
        path: 'Cotainer1' , component : Cont1Component
    },
    {
        path: 'Cotainer2' , component : Cont2Component
    },
    {
        path: 'iconcont1' , component : Iconcont1Component
    },
    {
        path: 'iconcont2' , component : Iconcont2Component
    },
    {
        path: 'footer' , component : FooterComponent
    },
];
