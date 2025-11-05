import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonprgComponent } from './pythonprg.component';

describe('PythonprgComponent', () => {
  let component: PythonprgComponent;
  let fixture: ComponentFixture<PythonprgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PythonprgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PythonprgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
