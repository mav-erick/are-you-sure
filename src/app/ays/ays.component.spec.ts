import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AysComponent } from './ays.component';

describe('AysComponent', () => {
  let component: AysComponent;
  let fixture: ComponentFixture<AysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
