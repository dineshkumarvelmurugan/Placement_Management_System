import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraformComponent } from './traform.component';

describe('TraformComponent', () => {
  let component: TraformComponent;
  let fixture: ComponentFixture<TraformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
