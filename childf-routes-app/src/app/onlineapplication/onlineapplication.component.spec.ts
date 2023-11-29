import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineapplicationComponent } from './onlineapplication.component';

describe('OnlineapplicationComponent', () => {
  let component: OnlineapplicationComponent;
  let fixture: ComponentFixture<OnlineapplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineapplicationComponent]
    });
    fixture = TestBed.createComponent(OnlineapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
