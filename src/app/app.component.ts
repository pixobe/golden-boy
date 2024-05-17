import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GoldenBoyComponent } from './golden-boy/golden-boy.component';
import { FundMarketComponent } from './fund-market/fund-market.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JsonPipe ,HttpClientModule,GoldenBoyComponent,FundMarketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
