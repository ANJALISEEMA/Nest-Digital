import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { ContactUs } from './pages/contact-us/contact-us';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path:'' ,redirectTo:'home',pathMatch:'full'},
    {path:'home' ,component:Home},
    {path:'about' ,component: About},
    {path:'services' ,component: Services},
    {path:'contact-us' ,component:ContactUs}
]
    
