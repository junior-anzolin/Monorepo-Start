import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

const CONFIG: MatSnackBarConfig<any> = {
  duration: 15000000000,
  verticalPosition: 'top',
  horizontalPosition: 'right',
};

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private readonly snackBack: MatSnackBar) {}

  success(message: string, action: string | undefined = 'Fechar') {
    return this.snackBack.open(message, action, {
      ...CONFIG,
      panelClass: 'success-snackbar',
    });
  }

  error(message: string, action: string | undefined = 'Fechar') {
    return this.snackBack.open(message, action, {
      ...CONFIG,
      panelClass: 'error-snackbar',
    });
  }

  info(message: string, action: string | undefined = 'Fechar') {
    return this.snackBack.open(message, action, {
      ...CONFIG,
      panelClass: 'info-snackbar',
    });
  }

  dark(message: string, action: string | undefined = 'Fechar') {
    return this.snackBack.open(message, action, {
      ...CONFIG,
      panelClass: 'dark-snackbar',
    });
  }
}
