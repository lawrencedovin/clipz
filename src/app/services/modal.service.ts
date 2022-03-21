import { Injectable } from '@angular/core';
import { IModal } from 'src/models/modal.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals = Array<IModal>();

  constructor() { }

  register(id: string) {
    this.modals = [...this.modals, {id, visible: false}];
  }

  isModalOpen(id: string): boolean {
    return !!this.modals.find((element) => element.id === id)?.visible;
  }

  toggleModal(id: string) {
    let modal = this.modals.find((element) => element.id === id);
    if(modal) modal.visible = !modal.visible;
  }
}
