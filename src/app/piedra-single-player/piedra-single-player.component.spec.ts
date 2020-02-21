import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedraSinglePlayerComponent } from './piedra-single-player.component';

describe('PiedraSinglePlayerComponent', () => {
  let component: PiedraSinglePlayerComponent;
  let fixture: ComponentFixture<PiedraSinglePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiedraSinglePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedraSinglePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
