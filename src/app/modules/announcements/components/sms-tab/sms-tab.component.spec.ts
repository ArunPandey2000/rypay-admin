import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTabComponent } from './sms-tab.component';

describe('SmsTabComponent', () => {
  let component: SmsTabComponent;
  let fixture: ComponentFixture<SmsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
