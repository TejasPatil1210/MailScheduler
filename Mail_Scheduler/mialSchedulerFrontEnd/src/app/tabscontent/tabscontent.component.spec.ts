import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabscontentComponent } from './tabscontent.component';

describe('TabscontentComponent', () => {
  let component: TabscontentComponent;
  let fixture: ComponentFixture<TabscontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabscontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
