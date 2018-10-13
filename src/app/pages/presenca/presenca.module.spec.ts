import { PresencaModule } from './presenca.module';

describe('PresencaModule', () => {
  let presencaModule: PresencaModule;

  beforeEach(() => {
    presencaModule = new PresencaModule();
  });

  it('should create an instance', () => {
    expect(presencaModule).toBeTruthy();
  });
});
