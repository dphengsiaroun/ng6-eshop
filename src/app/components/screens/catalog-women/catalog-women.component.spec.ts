import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogWomenComponent } from './catalog-women.component';

describe('CatalogWomenComponent', () => {
  let component: CatalogWomenComponent;
  let fixture: ComponentFixture<CatalogWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
