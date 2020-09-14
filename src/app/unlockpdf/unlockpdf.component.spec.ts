import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockpdfComponent } from './unlockpdf.component';

describe('UnlockpdfComponent', () => {
  let component: UnlockpdfComponent;
  let fixture: ComponentFixture<UnlockpdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlockpdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
