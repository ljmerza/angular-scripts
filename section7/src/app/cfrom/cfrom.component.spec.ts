import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfromComponent } from './cfrom.component';

describe('CfromComponent', () => {
  let component: CfromComponent;
  let fixture: ComponentFixture<CfromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
