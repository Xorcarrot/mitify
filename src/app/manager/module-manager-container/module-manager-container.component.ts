import { Component, Input } from '@angular/core';

/**
 * Container für alle Managertabellen
 */
@Component({
  selector: 'app-module-manager-container',
  templateUrl: './module-manager-container.component.html',
  styleUrls: ['./module-manager-container.component.css'],
})
export class ModuleManagerContainerComponent {
  /**
   * Nimmt den Token entgegen
   */
  @Input() token: any;

  constructor() {}
}
