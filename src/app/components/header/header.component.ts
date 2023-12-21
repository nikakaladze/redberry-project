import { Component, OnInit, inject } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  authForm: UntypedFormGroup;
  showError: boolean = false;
  router = inject(Router);
  authService = inject(AuthService);

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl('', Validators.required),
    });
  }

  closeModal(): void {
    const dialog = document.getElementById('loginDialog') as HTMLDialogElement;
    dialog?.close();
  }

  login(): void {
    const dialog = document.getElementById('loginDialog') as HTMLDialogElement;
    dialog?.showModal();
  }

  signUp(): void {
    if (this.authForm.invalid) {
      this.showError = true;
      return;
    }
    this.authService
      .login({ ...this.authForm.value })
      .pipe(take(1))
      .subscribe(() => {
        const dialog = document.getElementById(
          'loginDialog'
        ) as HTMLDialogElement;
        dialog?.close();
        this.authService.isAuthentcated = true;
      });
  }
}
