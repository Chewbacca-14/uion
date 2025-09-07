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

  // Lightweight toast support (no extra files or deps)
  private toastContainer?: HTMLElement;

  private ensureToastContainer(): HTMLElement {
    if (this.toastContainer && document.body.contains(this.toastContainer)) {
      return this.toastContainer;
    }
    const container = document.createElement('div');
    container.setAttribute('id', 'app-toast-container');
    container.style.position = 'fixed';
    container.style.top = '24px';
    container.style.right = '24px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '12px';
    container.style.zIndex = '9999';
    document.body.appendChild(container);
    this.toastContainer = container;
    return container;
  }

  private showToast(message: string, type: 'success' | 'error' = 'success') {
    const container = this.ensureToastContainer();

    const toast = document.createElement('div');
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '10px';
    toast.style.position = 'relative';
    toast.style.padding = '12px 16px';
    toast.style.color = '#fff';
    toast.style.borderRadius = '12px';
    toast.style.fontFamily =
      "'Generalsans', system-ui, -apple-system, Segoe UI, Roboto, sans-serif";
    toast.style.boxShadow = '0 8px 24px rgba(0,0,0,.15)';
    toast.style.transition = 'opacity .3s ease, transform .3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-8px)';
    toast.style.cursor = 'pointer';
    toast.style.background =
      type === 'success' ? '#16a34a' /* green-600 */ : '#dc2626' /* red-600 */;

    const icon = document.createElement('span');
    icon.textContent = type === 'success' ? '✓' : '⚠';
    icon.style.fontWeight = '700';

    const text = document.createElement('span');
    text.textContent = message;

    toast.appendChild(icon);
    toast.appendChild(text);
    container.appendChild(toast);

    // Enter animation
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });

    const remove = () => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-8px)';
      setTimeout(() => {
        toast.remove();
        if (!container.childElementCount) {
          container.remove();
          this.toastContainer = undefined;
        }
      }, 300);
    };

    // Auto-dismiss and allow click to dismiss
    const ttl = setTimeout(remove, 3000);
    toast.addEventListener('click', () => {
      clearTimeout(ttl);
      remove();
    });
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.cdr.detectChanges();
      return;
    }

    this.http
      .post('https://formspree.io/f/xzzrnvbo', this.contactForm.value)
      .subscribe({
        next: () => {
          this.contactForm.reset();
          this.showToast('Zpráva byla úspěšně odeslána.', 'success');
        },
        error: () =>
          this.showToast(
            'Odeslání se nezdařilo. Zkuste to prosím znovu.',
            'error'
          ),
      });
  }
}
