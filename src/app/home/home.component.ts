import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  modalRef: BsModalRef | undefined;
  detailsModalRef: BsModalRef | undefined;
  @ViewChild('myModal', { static: true }) myModal!: TemplateRef<any>;
  @ViewChild('detailsModal', { static: true }) detailsModal!: TemplateRef<any>;
  selectedPlace: string = '';
  selectedPlaceImage: string = '';

  constructor(private modalService: BsModalService) {}

  openModal(place: string) {
    this.selectedPlace = place;
    this.modalRef = this.modalService.show(this.myModal);
  }

  closeModal() {
    this.modalRef?.hide();
  }

  openDetailsModal() {
    this.selectedPlaceImage = this.getRestaurantImage(this.selectedPlace); // Defina a lógica para obter a imagem do restaurante selecionado
    this.detailsModalRef = this.modalService.show(this.detailsModal);
    this.closeModal(); // Feche o modal anterior se necessário
  }

  closeDetailsModal() {
    this.detailsModalRef?.hide();
  }

  getRestaurantImage(place: string): string {
    // Lógica para retornar a imagem baseada no lugar selecionado
    if (place === 'SUSHI MARES') {
      return '../../assets/sushimaresQR.png';
    } else if (place === 'TABATEM') {
      return '../../assets/tabaQR.png';
    } else if (place === 'CASA DO SUSHI') {
      return '../../assets/casadoQR.png';
    }
    return ''; // Retorna uma imagem padrão caso necessário
  }
}
