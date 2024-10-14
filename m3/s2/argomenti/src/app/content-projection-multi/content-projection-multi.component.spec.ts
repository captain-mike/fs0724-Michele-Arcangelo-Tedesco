import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionMultiComponent } from './content-projection-multi.component';

describe('ContentProjectionMultiComponent', () => {
  let component: ContentProjectionMultiComponent;
  let fixture: ComponentFixture<ContentProjectionMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentProjectionMultiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentProjectionMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
