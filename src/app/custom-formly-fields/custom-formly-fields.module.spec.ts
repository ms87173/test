import { CustomFormlyFieldsModule } from './custom-formly-fields.module';

describe('CustomFormlyFieldsModule', () => {
  let customFormlyFieldsModule: CustomFormlyFieldsModule;

  beforeEach(() => {
    customFormlyFieldsModule = new CustomFormlyFieldsModule();
  });

  it('should create an instance', () => {
    expect(customFormlyFieldsModule).toBeTruthy();
  });
});
