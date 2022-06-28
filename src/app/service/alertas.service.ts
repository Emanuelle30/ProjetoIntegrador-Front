import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertasComponent } from '../alertas/alertas.component';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  //alerta 1

  private showAlert(message: string, type: string) {
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent)
    bsModalRef.content.type = type
    bsModalRef.content.message = message
  }
  showAlertDanger(message: string) {
    this.showAlert(message, 'danger')
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, 'success')
  }

  showAlertInfo(message: string) {
    this.showAlert(message, 'info')
  }

  //alerta 2

  public success(message: string, title: string): void {
    this.showAlert2(title, message, 'success');
  }
  public info(message: string, title: string): void {
    this.showAlert2(title, message, 'info');
  }
  public error(message: string, title: string): void {
    this.showAlert2(title, message, 'error');
  }

  private showAlert2(title: string, message: string, icon: SweetAlertIcon): void {
    Swal.fire(title, message, icon);

  }

}