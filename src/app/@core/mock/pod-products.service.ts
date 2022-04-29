import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PodItem, ProductsData } from '../data/pod-products';

@Injectable()
export class PodProductsService extends ProductsData {
  private products: PodItem[] = [
    {
      id: 1,
      iconClass: '',
      imageUrl: 'assets/images/pod-3.jpg',
      price: 260000,
      qty: 0,
      title: 'Vape Lio Boom 2500 Disposable',
      type: 'vape',
      subTitle: 'Lio Boom 2500 Disposable như 1 quả bom tấn đến từ hãng IJOY. Với thiết kế bao bì bắt mắt cùng với nhiều hương vị mới lạ. Lio Boom 3500 Disposable hứa hẹn sẽ mang lại cho bạn sự đa dạng về hương vị.'
    },
    {
      id: 1,
      iconClass: '',
      imageUrl: 'assets/images/pod-2.jpg',
      price: 150000,
      qty: 0,
      title: 'FIZZY Magic 2000 Puffs',
      type: 'pod',
      subTitle: 'Fizzy Magic (2000 hơi) là thiết bị pod 1 lần mới của Fizzy Vape có dung tích 8ml tinh dầu salt nic có nồng độ 5% nicotine (50mg) được tích hợp sẵn trong 2 đầu pod. Sản phẩm này rất đa dạng hương vị, đặc biệt là những vị mới mixed trai cây rất tuyệt vời.'
    },
    {
      id: 2,
      iconClass: '',
      imageUrl: 'assets/images/sp_04.webp',
      price: 280000,
      qty: 0,
      title: 'Guiilabs 4000 Disposable',
      type: 'pod',
      subTitle: 'Guiilabs 4000 Disposable là dòng pod cùng hãng với pod Minions Q đình đám. Với hương vị đa dạng cùng với thiết kế bắt mắt. Công nghệ Mesh Coil cho lên vị và nicotine siêu chuẩn.'
    },
    {
      id: 1,
      iconClass: '',
      imageUrl: 'assets/images/sp_02.webp',
      price: 300000,
      qty: 0,
      title: 'Hitt ACE Disposable 5000 Puffs',
      type: 'vape',
      subTitle: 'Hitt ACE Disposable 5000 Puffs là dòng pod 1 lần đến từ Mỹ với dung tích pin cực khủng 400mAh. Có thể sạc lại được.'
    }
  ]

  getProducts(): Observable<any> {
    return observableOf(this.products);
  }
}
