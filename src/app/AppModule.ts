import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, NgForm } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppRoutingModule } from './AppRoutingModule';
import { AppComponent } from './AppComponent';
import { QuestionsComponent } from './questions/QuestionsComponent';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModelBindingServices } from './services/ModelBindingServices';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatProgressBarModule,
    FormsModule
  ],
  providers: [
    ModelBindingServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
