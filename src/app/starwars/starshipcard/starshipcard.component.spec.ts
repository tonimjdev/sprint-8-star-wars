import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipcardComponent } from './starshipcard.component';

describe('StarshipcardComponent', () => {
  let component: StarshipcardComponent;
  let fixture: ComponentFixture<StarshipcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
