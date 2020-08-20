import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdCopyCodeButtonComponent } from './copy-code-button.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';

describe('CopyCodeButtonComponent', () => {
  let component: TdCopyCodeButtonComponent;
  let fixture: ComponentFixture<TdCopyCodeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TdCopyCodeButtonComponent],
      imports: [ClipboardModule, MatIconModule, MatTooltipModule, MatButtonModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdCopyCodeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture.debugElement.query(By.css('button')).nativeElement).toBeTruthy();
  });
});
