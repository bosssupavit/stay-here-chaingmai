import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationaleComponent } from './relationale.component';

describe('RelationaleComponent', () => {
  let component: RelationaleComponent;
  let fixture: ComponentFixture<RelationaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
