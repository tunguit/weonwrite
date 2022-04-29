import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Camera, SecurityCamerasData } from '../data/security-cameras';

@Injectable()
export class SecurityCamerasService extends SecurityCamerasData {

  private cameras: Camera[] = [
    {
      title: 'Vappro full vị',
      source: 'assets/images/pod-1.jpg',
    },
    {
      title: 'Fizzy Magic',
      source: 'assets/images/pod-2.jpg',
    },
    {
      title: 'Vap Snow',
      source: 'assets/images/pod-3.jpg',
    },
    {
      title: 'Vap Snow',
      source: 'assets/images/pod-4.jpg',
    },
  ];

  getCamerasData(): Observable<Camera[]> {
    return observableOf(this.cameras);
  }
}
