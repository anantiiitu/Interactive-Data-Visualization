import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TemplateRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const countries = [
  { name: 'India', code: '+91', flag: 'in' },
  { name: 'United States', code: '+1', flag: 'us' },
  { name: 'United Kingdom', code: '+44', flag: 'gb' },
  // Add more countries as needed
];

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @ViewChild('dialogContent', { static: true })
  dialogContent!: TemplateRef<any>;

  progressValue: number = 40;
  dialogRef!: MatDialogRef<any>;
  form: FormGroup;
  countries = countries;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      dateOfBirth: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required],
      gender: [''],
    });
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
    if (this.step === 1) {
      this.progressValue = 70;
    } else if (this.step === 2) {
      this.progressValue = 100;
    }
  }

  prevStep() {
    this.step--;
    if (this.step === 1) {
      this.progressValue = 70;
    } else if (this.step === 0) {
      this.progressValue = 40;
    }
  }

  onSubmit() {
    console.log(this.form.valid);
    if (this.form.valid) {
      this.dialogRef = this.dialog.open(this.dialogContent, {
        width: '500px',
        data: {},
      });

      this.dialogRef.afterClosed().subscribe((result: any) => {
        console.log('Dialog closed:', result);
      });
    }
  }

  submitDialog(): void {
    this.snackBar.open('Submitted Successfully', 'Dismiss');
    this.dialogRef?.close();
  }

  closeDialog(): void {
    this.snackBar.open('Submission Cancelled', 'Dismiss');
    this.dialogRef?.close();
  }

  // dateOfBirthValidator(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null => {
  //     const enteredDate = new Date(control.value);

  //     if (isNaN(enteredDate.getTime())) {
  //       return { invalidDate: true };
  //     }

  //     const currentDate = new Date();

  //     if (enteredDate >= currentDate) {
  //       return { invalidDate: true };
  //     }

  //     return null;
  //   };
  // }
  get dateOfBirthControl() {
    return this.form.get('dateOfBirth');
  }
}
