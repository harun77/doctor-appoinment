import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpenAppoinmentComponent } from './open-appoinment.component';

describe('OpenAppoinmentComponent', () => {
  let component: OpenAppoinmentComponent;
  let fixture: ComponentFixture<OpenAppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenAppoinmentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
