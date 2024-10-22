import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelViewChildComponent } from './ng-model-view-child.component';

describe('NgModelViewChildComponent', () => {
  let component: NgModelViewChildComponent;
  let fixture: ComponentFixture<NgModelViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgModelViewChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgModelViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
