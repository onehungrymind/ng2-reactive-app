/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WidgetsService } from './widgets.service';

describe('Service: Widgets', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetsService]
    });
  });

  it('should ...', inject([WidgetsService], (service: WidgetsService) => {
    expect(service).toBeTruthy();
  }));
});
