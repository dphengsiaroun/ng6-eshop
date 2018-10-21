import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogMenComponent } from './catalog-men.component';

describe('CatalogMenComponent', () => {
  let component: CatalogMenComponent;
  let fixture: ComponentFixture<CatalogMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
