import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResturantComponent } from './list-resturant.component';

describe('ListResturantComponent', () => {
  let component: ListResturantComponent;
  let fixture: ComponentFixture<ListResturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListResturantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
