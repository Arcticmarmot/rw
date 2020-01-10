import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoDetailComponent } from './anno-detail.component';

describe('AnnoDetailComponent', () => {
  let component: AnnoDetailComponent;
  let fixture: ComponentFixture<AnnoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
