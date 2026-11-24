import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubPageComponent } from './stub-page.component';

describe('StubPageComponent', () => {
  let component: StubPageComponent;
  let fixture: ComponentFixture<StubPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StubPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StubPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
