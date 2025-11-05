import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CprgComponent } from './cprg.component';

describe('CprgComponent', () => {
  let component: CprgComponent;
  let fixture: ComponentFixture<CprgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CprgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CprgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
