import { Routes, RouterModule } from "@angular/router";
import { ContactoComponent } from "./contacto/contacto.component";
import { NewcodeComponent } from "./newcode/newcode.component";
import { TwelveComponent } from "./twelve/twelve.component";
import { FourComponent } from "./four/four.component";
import { NineComponent } from "./nine/nine.component";
import { TwoBComponent } from "./two-b/two-b.component";
import { TenComponent } from "./ten/ten.component";
import { SixComponent } from "./six/six.component";
import { ElevenComponent } from "./eleven/eleven.component";
import { TwoComponent } from "./two/two.component";
import { ThirteenComponent } from "./thirteen/thirteen.component";
import { FourteenComponent } from "./fourteen/fourteen.component";
import { FifteenComponent } from "./fifteen/fifteen.component";


//rutas de la aplicacion 
export const appRoutes:Routes = [
    { path: '', redirectTo: 'orden/:id', pathMatch: 'full' },
    { path:'orden/:id', component: FourComponent },
    { path:'orden/:id/contacto', component: ContactoComponent },
    { path:'orden/:id/newcode', component: NewcodeComponent },
    { path:'orden/:id/two', component: TwoComponent },
    { path:'orden/:id/twob', component: TwoBComponent },
    { path:'orden/:id/four', component: FourComponent },
    { path:'orden/:id/six', component: SixComponent },
    { path:'orden/:id/nine', component: NineComponent },
    { path:'orden/:id/ten', component: TenComponent },
    { path:'orden/:id/eleven', component: ElevenComponent },
    { path:'orden/:id/twelve', component: TwelveComponent },
    { path:'orden/:id/thirteen', component: ThirteenComponent },
    { path:'orden/:id/fourteen', component: FourteenComponent },
    { path:'orden/:id/fifteen', component: FifteenComponent }
]