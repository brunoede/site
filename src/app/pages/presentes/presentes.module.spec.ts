import { PresentesModule } from './presentes.module';

describe('PresentesModule', () => {
  let presentesModule: PresentesModule;

  beforeEach(() => {
    presentesModule = new PresentesModule();
  });

  it('should create an instance', () => {
    expect(presentesModule).toBeTruthy();
  });
});
