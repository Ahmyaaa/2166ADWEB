import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerpageComponent } from './partnerpage.component';

describe('PartnerpageComponent', () => {
  let component: PartnerpageComponent;
  let fixture: ComponentFixture<PartnerpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerpageComponent]
    });
    fixture = TestBed.createComponent(PartnerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
