import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tap-list',
  templateUrl: './tap-list.component.html',
  styleUrls: ['./tap-list.component.scss']
})
export class TapListComponent implements OnInit {

  tapList: any[] = [
    {
      name: "Malvadinha",
      ibu: 50,
      abv: 5.7,
      price: "3,75",
      volume: 100,
      brewery: "MERMAID",
      category: "AMERICAN IPA",
      imageUrl: "/assets/img/image 43.png",
      qrCodeUrl: "/assets/img/qr-code.png"
    },
    {
      name: "Boiobi",
      ibu: 50,
      abv: 5.7,
      price: "3,75",
      volume: 100,
      brewery: "MERMAID",
      category: "AMERICAN IPA",
      imageUrl: "/assets/img/image 44.png",
      qrCodeUrl: "/assets/img/qr-code.png"
    },
    {
      name: "Red Beard",
      ibu: 50,
      abv: 5.7,
      price: "12,75",
      volume: 100,
      brewery: "MERMAID",
      category: "AMERICAN IPA",
      imageUrl: "/assets/img/image 45.png",
      qrCodeUrl: "/assets/img/qr-code.png"
    },
    {
      name: "Golden Gate",
      ibu: 50,
      abv: 5.7,
      price: "3,00",
      volume: 100,
      brewery: "MERMAID",
      category: "AMERICAN IPA",
      imageUrl: "/assets/img/image 46.png",
      qrCodeUrl: "/assets/img/qr-code.png"
    },
      
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
