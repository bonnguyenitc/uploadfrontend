import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorImageComponent } from './editor-image.component';

describe('EditorImageComponent', () => {
  let component: EditorImageComponent;
  let fixture: ComponentFixture<EditorImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
