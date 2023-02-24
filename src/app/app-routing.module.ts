import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './componentes/layout/layout.component';



const routes: Routes = [
    // { path: '', component: LayoutComponent }


    {
        path: '', component: LayoutComponent, children: [
            { path: '', redirectTo: '/graficos/dashboard', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }