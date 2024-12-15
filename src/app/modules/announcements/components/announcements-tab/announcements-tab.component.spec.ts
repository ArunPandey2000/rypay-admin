import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsTabComponent } from './announcements-tab.component';

describe('AnnouncementsTabComponent', () => {
  let component: AnnouncementsTabComponent;
  let fixture: ComponentFixture<AnnouncementsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncementsTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
