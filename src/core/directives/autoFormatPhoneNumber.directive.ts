// phone-number.directive.ts
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPhoneNumber]'
})
export class PhoneNumberDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: any) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ''); // Remove non-numeric characters

    // Add country code if not present
    if (!value.startsWith('7')) {
      value = '7' + value;
    }

    // Format the remaining digits
    const formattedValue = `+${value.slice(0, 1)}${value.slice(1, 4)}${value.slice(4, 7)}${value.slice(7, 11)}`;
    input.value = formattedValue;

    // Update the input selection to handle backspace and deletion
    const caretPos = this.getCaretPosition(input);
    input.setSelectionRange(caretPos, caretPos);
  }

  private getCaretPosition(input: any): number {
    return input.selectionStart !== null ? input.selectionStart : 0;
  }
}
