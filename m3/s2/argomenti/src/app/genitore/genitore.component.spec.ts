import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenitoreComponent } from './genitore.component';

describe('GenitoreComponent', () => {
  let component: GenitoreComponent;
  let fixture: ComponentFixture<GenitoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenitoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenitoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
