import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { 
  // TranslateLoader,
   TranslateModule } from '@ngx-translate/core';
import {
  //  HttpClient,
   HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SiOUXThemeSwitcherModule } from '@simpl/sioux-ng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AssetDetailsFormComponent } from './asset-details-form/asset-details-form.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './shared/material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { DialogUploadComponent } from './dialog-upload/dialog-upload.component';
import { DialogUploadStatusComponent } from './dialog-upload-status/dialog-upload-status.component';
// export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
// }

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AssetDetailsFormComponent,
    HomeComponent,
    DashboardComponent,
    DialogUploadComponent,
    DialogUploadStatusComponent
  ],
  entryComponents:[DialogUploadComponent,DialogUploadStatusComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    SiOUXThemeSwitcherModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      // loader: {
      //   provide: TranslateLoader,
      //   useFactory: (createTranslateLoader),
      //   deps: [HttpClient]
      // }
    }),
    LayoutModule,
    ChartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
