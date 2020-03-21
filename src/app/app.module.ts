import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';


import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RelationaleComponent } from './relationale/relationale.component';
import { P7psComponent } from './p7ps/p7ps.component';
import { DataAnalysisComponent } from './data-analysis/data-analysis.component';
import { MaterialComponent } from './material/material.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import {MatTableModule} from '@angular/material/table';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RelationaleComponent,
    P7psComponent,
    DataAnalysisComponent,
    MaterialComponent,
    ConclusionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatMenuModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    NgxUiLoaderModule,
    Angular2ImageGalleryModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
