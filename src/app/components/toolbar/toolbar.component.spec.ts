import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { NgxBootstrapIconsModule, clipboard, download, indent, textIndentLeft } from 'ngx-bootstrap-icons';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@components/button';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarComponent,NgxBootstrapIconsModule.pick({ clipboard, indent, textIndentLeft, download }) , ButtonComponent, FormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
