import { DdoApplicationsModule } from './ddo-applications.module';

describe('DdoApplicationsModule', () => {
  let ddoApplicationsModule: DdoApplicationsModule;

  beforeEach(() => {
    ddoApplicationsModule = new DdoApplicationsModule();
  });

  it('should create an instance', () => {
    expect(ddoApplicationsModule).toBeTruthy();
  });
});
