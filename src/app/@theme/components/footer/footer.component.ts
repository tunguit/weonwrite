import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
    PHÂN PHỐI SỈ LẺ POD 1 LẦN || TRÁI CÂY NHẬP KHẨU 🎀 SHIP 24/7 🎀 ♥ by
    <b><a href="https://www.facebook.com/profile.php?id=100009201699729" target="_blank">DINH THANH TAM</a></b> 2020
    </span>
    <div class="socials">
      <a href="https://www.facebook.com/profile.php?id=100009201699729" target="_blank" class="ion ion-social-facebook"></a>
    </div>
  `,
})
export class FooterComponent {
}
