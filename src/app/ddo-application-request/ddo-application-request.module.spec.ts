import { DdoApplicationRequestModule } from './ddo-application-request.module';

describe('DdoApplicationRequestModule', () => {
  let ddoApplicationRequestModule: DdoApplicationRequestModule;

  beforeEach(() => {
    ddoApplicationRequestModule = new DdoApplicationRequestModule();
  });

  it('should create an instance', () => {
    expect(ddoApplicationRequestModule).toBeTruthy();
  });
});
