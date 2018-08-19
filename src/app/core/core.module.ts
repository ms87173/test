import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstantsModule } from './constants/constants.module';
import { ApiService, UserInfoService, QuestionnaireService, WorkflowsTasksService } from './services';
import { NgxFormlyParserService } from './services/ngx-formly-parser.service';
import { ApplicationsService } from './services/applications.service';
import { ApplicationRequestService } from './services/application-request.service';

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
    WorkflowsTasksService,
    ApplicationsService,
    ApplicationRequestService
  ],
  exports:[]
})

export class CoreModule { }