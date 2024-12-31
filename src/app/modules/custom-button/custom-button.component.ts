import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { buttonTypePropertyMapper, buttonTypes, buttonTypesList } from 'src/app/core/constants/button-mapper.constant';

@Component({
  selector: 'app-custom-button',
  imports: [NgClass, NgIf, AngularSvgIconModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent implements OnInit {
  private readonly BTN_DISABLED_CLASS = 'btn-disabled';

  @Input() label!: string;
  @Input() buttonClasses!: string;
  @Input() buttonIcon!: string;
  @Input() set isDisabled(val: boolean) {
    this.disabledCheck = val;
    this.buttonClasses = (val) ? `${this.buttonClasses} ${this.BTN_DISABLED_CLASS}` : this.buttonClasses?.replace(this.BTN_DISABLED_CLASS, '');
  }

  @Input() btnCustomHeight = false;
  @Input() showLoader = false;
  @Output() buttonClickedEvent = new EventEmitter();
  @Input() set buttonType(value: buttonTypes) {
    this.showLoader = buttonTypePropertyMapper[value].showLoader;
    for (const word of buttonTypesList) {
      this.buttonClasses = this.buttonClasses?.replace(new RegExp(word, 'g'), '');
    }
    this.buttonClasses = this.buttonClasses ? `${this.buttonClasses} ${buttonTypePropertyMapper[value].buttonClasses}` : buttonTypePropertyMapper[value].buttonClasses;
  }
  disabledCheck!: boolean;
  click(event: MouseEvent) {
    this.buttonClickedEvent.emit(event);
  }
  ngOnInit() {
    if (this.disabledCheck) {
      if (!this.buttonClasses?.includes(this.BTN_DISABLED_CLASS)) {
        this.buttonClasses = `${this.buttonClasses} ${this.BTN_DISABLED_CLASS}`;
      }
    } else {
      this.buttonClasses = this.buttonClasses?.replace(this.BTN_DISABLED_CLASS, '');
    }
  }
}
