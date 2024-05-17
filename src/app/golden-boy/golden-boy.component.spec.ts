import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenBoyComponent } from './golden-boy.component';

describe('GoldenBoyComponent', () => {
  let component: GoldenBoyComponent;
  let fixture: ComponentFixture<GoldenBoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldenBoyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoldenBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
