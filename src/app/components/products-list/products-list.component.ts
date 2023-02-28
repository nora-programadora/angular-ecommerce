import { Component, OnInit } from '@angular/core';
import { Product} from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRwYfLrbJvB0fS1lzUKaXynFhdkCYaXkfqIC4rF4LwIBWdj00OK4w2mkLJw66in5lMN_ig7QnFbngUMN59FEXDInx4MaDh26Jp_RfoLLTUoa19aOSev_b4_&usqp=CAc',
      price: 100
    },
    {
      id: '2',
      name: 'Product 2',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQMDVzeLw6wCVulUfri-4c5rNmrAW_tJfO4txJtGMUuA5rtn0DrluEQBaSmzd2XVQ4_poFlijLmwNw&usqp=CAc',
      price: 100
    },
    {
      id: '3',
      name: 'Product 3',
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRRPDwmM7Cq4B6hPr1IfHz7QIc-1up05q5E7FYxvRNBPqXRCPEcfbHtQ12FFOO7L8tBnJIzkGZ6TQ&usqp=CAc',
      price: 100
    },
    {
      id: '4',
      name: 'Product 4',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTNKWUDLGLjMUILkpc3AEkqmnmjmmrhI01bksglnJWU5vz_SsnXeoXuuP-sJm-U_gme_z-_InjsFx5Z96EMeBzVg7utn2DiXJCKoAYf4L3Cw68TiLTltC1u&usqp=CAc',
      price: 100
    },
    {
      id: '5',
      name: 'Product 5',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREaIC7CXjQSSmhn-HAMMmJY1-MRNJ_wbmVjw8HU8VU3L2yRgujUtXWrIU_t50zrxlYA7CbygRzvso&usqp=CAc',
      price: 100
    },
    {
      id: '6',
      name: 'Product 6',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSlSyo3xqNuAso5xg2f-YIoAfvSwloKZHVO_8EAWRJ6fSFQs_1GZXOzLh34XEZWkIuwAyZ9SNpeFo8&usqp=CAc',
      price: 100
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
