import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirbyClickerComponent } from './kirby-clicker.component';

describe('KirbyClickerComponent', () => {
  let component: KirbyClickerComponent;
  let fixture: ComponentFixture<KirbyClickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KirbyClickerComponent]
    });
    fixture = TestBed.createComponent(KirbyClickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
