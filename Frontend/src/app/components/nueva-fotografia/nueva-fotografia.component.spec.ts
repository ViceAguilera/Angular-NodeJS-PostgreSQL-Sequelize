import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaFotografiaComponent } from './nueva-fotografia.component';

describe('NuevaFotografiaComponent', () => {
  let component: NuevaFotografiaComponent;
  let fixture: ComponentFixture<NuevaFotografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevaFotografiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevaFotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
