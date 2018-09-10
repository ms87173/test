import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstantsModule } from './constants/constants.module';
import { ApiService, UserInfoService, QuestionnaireService } from './services';
import { NgxFormlyParserService } from './services/ngx-formly-parser.service';
import { ApplicationsService } from './services/applications.service';
import { ApplicationRequestService } from './services/application-request.service';
import { DynamicOptionsService } from './services/dynamic-options.service';
import { UploadService } from './services/upload.service';


@NgModule({
  imports: [
    CommonModule,
    ConstantsModule,
  ],
  providers: [
    ApiService,
    NgxFormlyParserService,
    ApiService,
    UserInfoService,
    QuestionnaireService,
    ApplicationsService,
    ApplicationRequestService,
    DynamicOptionsService,
    UploadService
  ],
  exports:[]
})

export class CoreModule { }