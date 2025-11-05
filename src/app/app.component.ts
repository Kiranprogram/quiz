import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JavaprgComponent } from './javaprg/javaprg.component';
import { CppComponent } from './cpp/cpp.component';
import { CprgComponent } from './cprg/cprg.component';
import { PythonprgComponent } from './pythonprg/pythonprg.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,JavaprgComponent,CppComponent,CprgComponent,PythonprgComponent,AboutComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'litQuiz';
}
