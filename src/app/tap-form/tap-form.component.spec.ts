import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapFormComponent } from './tap-form.component';

describe('TapFormComponent', () => {
  let component: TapFormComponent;
  let fixture: ComponentFixture<TapFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
