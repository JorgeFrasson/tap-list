import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapListComponent } from './tap-list.component';

describe('TapListComponent', () => {
  let component: TapListComponent;
  let fixture: ComponentFixture<TapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
