import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoanComponent } from './create-loan.component';

describe('CreateLoanComponent', () => {
  let component: CreateLoanComponent;
  let fixture: ComponentFixture<CreateLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
