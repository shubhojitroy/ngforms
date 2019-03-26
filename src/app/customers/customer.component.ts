import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormArray
} from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

import { Customer } from './customer';

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');
  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { match: true };
}

function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (
      c.value !== null &&
      (isNaN(c.value) || c.value < min || c.value > max)
    ) {
      return { range: true };
    }
    return null;
  };
}

@Component({
  selector: 'nf-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  pageTitle = 'Customer form';
  customerForm: FormGroup;
  // DATA MODEL
  customer = new Customer();
  emailMessage: string;

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  };

  // A GETTER PROPERTY
  get addresses(): FormArray {
    return this.customerForm.get('addresses') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // FORM MODEL with FORMBUILDER
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group(
        {
          email: ['', [Validators.required, Validators.email]],
          confirmEmail: ['', Validators.required]
        },
        { validator: emailMatcher }
      ),
      // phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      phone: '',
      notification: 'email',
      // rating: [null, [Validators.min(1), Validators.max(5)]],
      rating: [null, ratingRange(1, 5)],
      sendCatalog: true,
      // DEFINE THE ELEMENT(S) TO DUPLICATE
      addresses: this.fb.array([this.buildAddress()])
    });

    // FORM MODEL with FORM CONTROL
    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(true)
    // });

    this.customerForm
      .get('notification')
      .valueChanges.subscribe(value => console.log(value));

    // USING A WATCHER TO NOTIFY ABOUT CHANGES AND NOT RELYING ON HTML IN VIEW
    this.customerForm
      .get('notification')
      .valueChanges.subscribe(value => this.setNotification(value));

    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(value => this.setMessage(emailControl));
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    console.log(this.validationMessages);
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors)
        .map(key => (this.emailMessage += this.validationMessages[key]))
        .join(' ');
    }
  }

  setNotification(notifyVia: string) {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  // DEFINE A FORM GROUP
  buildAddress(): FormGroup {
    return this.fb.group({
      addressType: 'home',
      street1: ['', Validators.required],
      street2: '',
      city: '',
      state: '',
      zip: ''
    });
  }

  populateTestData() {
    this.customerForm.setValue({
      firstName: 'Jack',
      lastName: 'Harkness',
      emailGroup: {
        email: 'jack@torchwood.com',
        confirmEmail: 'jack@torchwood.com'
      },
      phone: '1234567890',
      notification: 'text',
      rating: [4, ratingRange(1, 5)],
      sendCatalog: { value: true, disabled: false },
      addresses: {
        addressType: 'work',
        street1: ['', Validators.required],
        street2: '',
        city: '',
        state: '',
        zip: ''
      }
    });
  }

  onSave() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
}
