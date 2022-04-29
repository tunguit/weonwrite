import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { ProductsData } from '../../@core/data/pod-products';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
  subTitle?: string;
}

interface PodItem {
  id: number;
  title: string;
  iconClass: string;
  type: string;
  subTitle?: string;
  price: number;
  qty: number;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  private alive = true;

  products: PodItem[] = [];
  solarValue: number;
  // lightCard: CardSettings = {
  //   title: 'Light',
  //   iconClass: 'nb-lightbulb',
  //   type: 'primary',
  // };
  // rollerShadesCard: CardSettings = {
  //   title: 'Roller Shades',
  //   iconClass: 'nb-roller-shades',
  //   type: 'success',
  // };
  // wirelessAudioCard: CardSettings = {
  //   title: 'Wireless Audio',
  //   iconClass: 'nb-audio',
  //   type: 'info',
  // };
  // coffeeMakerCard: CardSettings = {
  //   title: 'Coffee Maker',
  //   iconClass: 'nb-coffee-maker',
  //   type: 'warning',
  // };

  lightCard: CardSettings = {
    title: 'FREE SHIP',
    subTitle: 'Hóa đơn từ 300K',
    iconClass: 'nb-e-commerce',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 'DINH THANH TAM',
    subTitle: 'ĐT: 0357194777',
    iconClass: 'nb-phone',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 'ĐỊA CHỈ',
    subTitle: '406 Xô Viết Nghệ Tĩnh, P.25, BÌNH THẠNH',
    iconClass: 'nb-location',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 'FAN PAGE',
    subTitle: 'blackbaby.bydinhthanhtam',
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];



  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService,
              private solarService: SolarData,
              private podProductService: ProductsData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });

    this.podProductService.getProducts()
    .pipe(takeWhile(() => this.alive))
    .subscribe((data) => {
      this.products = data;
      console.log(this.products)
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
