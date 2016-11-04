/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { UsersComponent } from './users.component';

import { UsersService } from '../shared';

class UsersServiceStub {}

describe('Component: Users', () => {
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      providers: [{ provide: UsersService, useClass: UsersServiceStub }]
    });

    TestBed.overrideComponent(UsersComponent, {set: {template: ''}});

    fixture = TestBed.createComponent(UsersComponent);
  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
  });
});
