import { TestBed } from '@angular/core/testing';

import { UsbLightService } from './usb-light.service';

describe('LocalLightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsbLightService = TestBed.get(UsbLightService);
    expect(service).toBeTruthy();
  });
});
