import { Component } from '@angular/core';
import { ListTileComponent } from '../../shared/components/list-tile/list-tile.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    CommonModule,
    ListTileComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    phone: [''],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.cdr.detectChanges(); // Force update so errors show immediately
      return;
    }

    this.http
      .post('https://formspree.io/f/xzzrnvbo', this.contactForm.value)
      .subscribe({
        next: () => {
          this.contactForm.reset();
          return alert('Message sent successfully!');
        },
        error: () => alert('Failed to send message.'),
      });
  }
}
