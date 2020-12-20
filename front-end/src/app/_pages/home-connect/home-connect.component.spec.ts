import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConnectComponent } from './home-connect.component';

describe('HomeConnectComponent', () => {
  let component: HomeConnectComponent;
  let fixture: ComponentFixture<HomeConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeConnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
