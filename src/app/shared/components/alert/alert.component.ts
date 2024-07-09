import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { AlertService } from '@app/shared/components/alert/alert.service';
import { AlertAppearance, AlertType } from '@app/shared/components/alert/alert.types';
import { UtilsService } from '@app/shared/services/utils/utils.service';
import { filter, Subject, takeUntil } from 'rxjs';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonComponent } from '@app/shared/components/button/button.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [SvgIconComponent, ButtonComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent implements OnChanges, OnInit, OnDestroy {
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _alertService = inject(AlertService);
  private _utilsService = inject(UtilsService);

  @Input() appearance: AlertAppearance = 'soft';
  @Input() dismissed: boolean = false;
  @Input() dismissible: boolean = false;
  @Input() name: string = this._utilsService.randomId();
  @Input() showIcon: boolean = true;
  @Input() type: AlertType = 'primary';
  @Output() readonly dismissedChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Host binding for component classes
   */
  @HostBinding('class') get classList(): any {
    /* eslint-disable @typescript-eslint/naming-convention */
    return {
      'alert-appearance-border': this.appearance === 'border',
      'alert-appearance-fill': this.appearance === 'fill',
      'alert-appearance-outline': this.appearance === 'outline',
      'alert-appearance-soft': this.appearance === 'soft',
      'alert-dismissed': this.dismissed,
      'alert-dismissible': this.dismissible,
      'alert-show-icon': this.showIcon,
      'alert-type-primary': this.type === 'primary',
      'alert-type-accent': this.type === 'accent',
      'alert-type-warn': this.type === 'warn',
      'alert-type-basic': this.type === 'basic',
      'alert-type-info': this.type === 'info',
      'alert-type-success': this.type === 'success',
      'alert-type-warning': this.type === 'warning',
      'alert-type-error': this.type === 'error',
    };
    /* eslint-enable @typescript-eslint/naming-convention */
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On changes
   *
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    // Dismissed
    if ('dismissed' in changes) {
      // Coerce the value to a boolean
      this.dismissed = changes['dismissed'].currentValue;

      // Dismiss/show the alert
      this._toggleDismiss(this.dismissed);
    }

    // Dismissible
    if ('dismissible' in changes) {
      // Coerce the value to a boolean
      this.dismissible = this.coerceBooleanProperty(changes['dismissible'].currentValue);
    }

    // Show icon
    if ('showIcon' in changes) {
      // Coerce the value to a boolean
      this.showIcon = this.coerceBooleanProperty(changes['showIcon'].currentValue);
    }
  }

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to the dismiss calls
    this._alertService.onDismiss
      .pipe(
        filter((name) => this.name === name),
        takeUntil(this._unsubscribeAll),
      )
      .subscribe(() => {
        // Dismiss the alert
        this.dismiss();
      });

    // Subscribe to the show calls
    this._alertService.onShow
      .pipe(
        filter((name) => this.name === name),
        takeUntil(this._unsubscribeAll),
      )
      .subscribe(() => {
        // Show the alert
        this.show();
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Dismiss the alert
   */
  dismiss(): void {
    // Return if the alert is already dismissed
    if (this.dismissed) {
      return;
    }

    // Dismiss the alert
    this._toggleDismiss(true);
  }

  /**
   * Show the dismissed alert
   */
  show(): void {
    // Return if the alert is already showing
    if (!this.dismissed) {
      return;
    }

    // Show the alert
    this._toggleDismiss(false);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Dismiss/show the alert
   *
   * @param dismissed
   * @private
   */
  private _toggleDismiss(dismissed: boolean): void {
    // Return if the alert is not dismissible
    if (!this.dismissible) {
      return;
    }

    // Set the dismissed
    this.dismissed = dismissed;

    // Execute the observable
    this.dismissedChanged.next(this.dismissed);

    // Notify the change detector
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Coerce the value to a boolean
   *
   * @param value
   * @private
   */
  private coerceBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }
}
