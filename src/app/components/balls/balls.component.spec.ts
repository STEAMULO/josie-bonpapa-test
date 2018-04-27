/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BallsComponent } from './balls.component';
import { comparateur } from './comparateur';

describe('BallsComponent', () => {
  let component: BallsComponent;
  let fixture: ComponentFixture<BallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('comparateur', () => {
  let testarray: number[];
  testarray = [2, 3, 2, 2, 2, 2, 2, 2];
  it('it should return me the row of the array that is difference!', () => {
    expect(comparateur(testarray)).toBe(2);
  });
});
