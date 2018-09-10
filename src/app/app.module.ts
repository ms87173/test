import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './core/services/authentication.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppStoreModule } from './store/app.store.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/services/token.interceptor';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { WindowRef } from './core/services/window-ref.service';
import { CustomFormlyFieldsModule } from './custom-formly-fields/custom-formly-fields.module';
import { StorybookModule } from './storybook/storybook.module';
import { FormlyFieldsService } from './core/services/formly-fields.service';
import { UploadService } from './core/services/upload.service';
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
  providers: [
    AuthenticationService,
    UploadService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    WindowRef,
    FormlyFieldsService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
