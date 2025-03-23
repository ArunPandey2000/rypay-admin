import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaticQRUploadComponent } from './static-qr-upload.component';


describe('StaticQRUploadComponent', () => {
  let component: StaticQRUploadComponent;
  let fixture: ComponentFixture<StaticQRUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticQRUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticQRUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
