import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundMarketComponent } from './fund-market.component';

describe('FundMarketComponent', () => {
  let component: FundMarketComponent;
  let fixture: ComponentFixture<FundMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundMarketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
