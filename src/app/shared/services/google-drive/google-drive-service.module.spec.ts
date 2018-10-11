import { GoogleDriveServiceModule } from './google-drive-service.module';

describe('GoogleDriveServiceModule', () => {
  let googleDriveServiceModule: GoogleDriveServiceModule;

  beforeEach(() => {
    googleDriveServiceModule = new GoogleDriveServiceModule();
  });

  it('should create an instance', () => {
    expect(googleDriveServiceModule).toBeTruthy();
  });
});
