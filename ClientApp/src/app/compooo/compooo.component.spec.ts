import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoooComponent } from './compooo.component';

describe('CompoooComponent', () => {
  let component: CompoooComponent;
  let fixture: ComponentFixture<CompoooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
