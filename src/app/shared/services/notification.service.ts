import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  notify(options?: any) {
    Swal.fire({
      ...options,
      toast: true,
      position: 'top',
      timer: 4000,
      showConfirmButton: false,
    });
  }

  confirm(options?: any) {
    return Swal.fire({
      icon: options.icon || 'warning',
      showCancelButton: options.showCancelButton || true,
      confirmButtonText: options.confirmButtonText || 'Yes',
      cancelButtonText: options.cancelButtonText || 'No',
      reverseButtons: true,
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-white btn-white--underlined',
      },
      ...options,
    });
  }
}
