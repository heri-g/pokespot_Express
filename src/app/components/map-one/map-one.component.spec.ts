/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapOneComponent } from './map-one.component';

describe('MapOneComponent', () => {
  let component: MapOneComponent;
  let fixture: ComponentFixture<MapOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
