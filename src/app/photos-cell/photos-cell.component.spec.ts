import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosCellComponent } from './photos-cell.component';

describe('PhotosCellComponent', () => {
  let component: PhotosCellComponent;
  let fixture: ComponentFixture<PhotosCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosCellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotosCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
