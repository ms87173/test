import { Component, OnInit} from '@angular/core';
import { FieldArrayType, FormlyFormBuilder  } from '@ngx-formly/core';

@Component({
  selector: 'custom-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss']
})
export class DocumentUploadComponent extends FieldArrayType implements OnInit {
  constructor(builder: FormlyFormBuilder
) {
    super(builder);
      }
  ngOnInit() {
     this.add();
  }  
}
