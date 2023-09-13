import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsFilterComponent } from './chats-filter.component';

describe('ChatsFilterComponent', () => {
  let component: ChatsFilterComponent;
  let fixture: ComponentFixture<ChatsFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatsFilterComponent]
    });
    fixture = TestBed.createComponent(ChatsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
