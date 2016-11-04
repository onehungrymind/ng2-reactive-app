/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HomeService } from '../shared';

class HomeServiceStub {}

describe('Component: Home', () => {
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [{ provide: HomeService, useClass: HomeServiceStub }]
    });

    fixture = TestBed.createComponent(HomeComponent);
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
