import { NoivosModule } from './noivos.module';

describe('NoivosModule', () => {
  let noivosModule: NoivosModule;

  beforeEach(() => {
    noivosModule = new NoivosModule();
  });

  it('should create an instance', () => {
    expect(noivosModule).toBeTruthy();
  });
});
