import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTeaserComponent } from './image-teaser.component';

describe('ImageTeaserComponent', () => {
  let component: ImageTeaserComponent;
  let fixture: ComponentFixture<ImageTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
