import { DdoApplicationsStateModule } from './ddo-applications-store-module';

describe('DdoApplicationsModule', () => {
  let ddoApplicationsModule: DdoApplicationsStateModule;

  beforeEach(() => {
    ddoApplicationsModule = new DdoApplicationsStateModule();
  });

  it('should create an instance', () => {
    expect(ddoApplicationsModule).toBeTruthy();
  });
});
