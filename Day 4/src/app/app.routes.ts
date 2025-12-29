import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { SingleviewList } from './singleview-list/singleview-list';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path:'' ,redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'product' ,component:Product},
    {path:'singleview-list/:productid', component:SingleviewList}
]
    
