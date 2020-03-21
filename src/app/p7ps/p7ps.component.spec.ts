import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P7psComponent } from './p7ps.component';

describe('P7psComponent', () => {
  let component: P7psComponent;
  let fixture: ComponentFixture<P7psComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P7psComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P7psComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
