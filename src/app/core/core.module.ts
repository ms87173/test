import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UploadService,
  DynamicOptionsService,
  ApplicationRequestService,
  ApplicationsService,
  ApiService,
  UserInfoService,
  QuestionnaireService,
  NgxFormlyParserService,
  AuthenticationService,
  WindowRef,
  FormlyFieldsService
} from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    NgxFormlyParserService,
    UserInfoService,
    QuestionnaireService,
    ApplicationsService,
    ApplicationRequestService,
    DynamicOptionsService,
    UploadService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthenticationService,
    UploadService,
    WindowRef,
    FormlyFieldsService
  ],
  exports: []
})

export class CoreModule { }
