//External imports
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogConfiguration = { keyboard: false, backdrop: true, centered: true, size: 'lg' };

  constructor(private modalService: NgbModal) { }
  
  /**
     * This is used to open custom dialog
     * @param component compoment that need to be paased
     * @param dialogData for passing dynamic data
     */
  public custom(component: any, dialogData: any) {
    const modalRef = this.modalService.open(component, this.dialogConfiguration);
    modalRef.componentInstance.data = dialogData;
    return modalRef;
  }

}
