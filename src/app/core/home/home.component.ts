import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SocialNetwork, socialNetworks } from './social-networks';

@Component({
  selector: 'app-home',
  template: `
    <section class="important-links">
      <h1>
        Demo Bug CloudImage
      </h1>
      <div class="important-links__container">
        <a class="important-links__network-link" [href]="data.link" target="_blank" *ngFor="let data of socialNetworkData" title="Suivez-moi sur {{ data.name }}">
          <ci-img [src]="data.cover" [alt]="data.name" ratio="2"></ci-img>
        </a>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {
  socialNetworkData: SocialNetwork[] = socialNetworks;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // this.cdr.markForCheck();
    // this.cdr.detectChanges();
  }

  ngAfterViewInit() {
    // this.cdr.markForCheck();
    // this.cdr.detectChanges();
  }
}
