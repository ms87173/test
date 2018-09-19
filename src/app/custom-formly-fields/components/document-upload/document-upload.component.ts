import { Component, OnInit} from '@angular/core';
import { FieldArrayType, FormlyFormBuilder  } from '@ngx-formly/core';

@Component({
  selector: 'custom-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss']
})
export class DocumentUploadComponent extends FieldArrayType implements OnInit {
  downloadRes = false;
  respData: any;
  constructor(builder: FormlyFormBuilder
  ) {
    super(builder);
      }
  ngOnInit() {
     this.add();
  }
  uploadedResponse(data) {
    this.downloadRes = true;
    this.respData = data;
    //console.log(this.respData, '::::evt');
  }
}
