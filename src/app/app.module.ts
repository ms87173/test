import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppStoreModule } from './store/app.store.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CustomFormlyFieldsModule } from './custom-formly-fields/custom-formly-fields.module';
import { StorybookModule } from './storybook/storybook.module';
// import { UploadFileComponent } from './custom-formly-fields/components/upload-file/upload-file.component';

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    HttpModule,
    AppStoreModule,
    CustomFormlyFieldsModule,
    StorybookModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
