import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotografiaComponent } from './fotografia.component';

describe('FotografiaComponent', () => {
  let component: FotografiaComponent;
  let fixture: ComponentFixture<FotografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FotografiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
