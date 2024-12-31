import { DOCUMENT, NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-overlay-panel',
  imports: [NgClass, NgIf, CustomButtonComponent, AngularSvgIconModule],
  templateUrl: './overlay-panel.component.html',
  styleUrl: './overlay-panel.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class OverlayPanelComponent implements OnInit, OnDestroy {
  @Input() animatePanel!: boolean;
  @Input() overlayTitle!: string;
  @Input() showOverlayTitle = true;
  @Input() showBackButton!: boolean;
  @Input() showPrimaryButton!: boolean;
  @Input() showSecondaryButton!: boolean;
  @Input() showFooter = true;
  @Input() primaryButtonLabel!: string;
  @Input() secondaryButtonLabel!: string;
  @Input() enablePrimaryButton!: boolean;
  @Input() enableSecondaryButton!: boolean;
  @Input() showAddIcon = false;
  @Output() closePanel = new EventEmitter();
  @Output() backButtonClicked = new EventEmitter();
  @Output() primaryButtonClicked = new EventEmitter();
  @Output() secondaryButtonClicked = new EventEmitter();
  @Output() addButtonClicked = new EventEmitter();

  constructor(@Inject(DOCUMENT) private document: Document) {
  }
  closeOverlayPanel() {
    this.closePanel.emit();
  }

  ngOnInit(): void {
    this.updateClassForBody('overlay-opened', true);
  }
  ngOnDestroy(): void {
    this.updateClassForBody('overlay-opened', false);
  }

  updateClassForBody(className: string, addClass = true): void {
    if (addClass) {
      this.document.body.classList.add(className);
    } else {
      this.document.body.classList.remove(className);
    }
  }
}
