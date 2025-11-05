import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaprgComponent } from './javaprg.component';

describe('JavaprgComponent', () => {
  let component: JavaprgComponent;
  let fixture: ComponentFixture<JavaprgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaprgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavaprgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
