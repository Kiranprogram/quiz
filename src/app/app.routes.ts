import { Routes } from '@angular/router';
import { CprgComponent } from './cprg/cprg.component';
import { JavaprgComponent } from './javaprg/javaprg.component';
import { CppComponent } from './cpp/cpp.component';
import { PythonprgComponent } from './pythonprg/pythonprg.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {path:"c lang.",component:CprgComponent},
    {path:"java lang.",component:JavaprgComponent},
    {path:"c++ lang.",component:CppComponent},
    {path:"python lang.",component:PythonprgComponent},
    {path:"about",component:AboutComponent,},
    {path:"home",component:HomeComponent,}
];
