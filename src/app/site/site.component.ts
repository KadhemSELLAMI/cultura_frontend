import { Component, OnDestroy, OnInit } from '@angular/core';
import { Site } from '../interfaces/site';
import { SiteService } from '../services/site.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit, OnDestroy {
  site: any;
  mapUrl: SafeResourceUrl; // Declare mapUrl as SafeResourceUrl

  constructor(
    private route: ActivatedRoute,
    private siteService: SiteService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const siteId = this.route.snapshot.params['siteId'];
    this.siteService.getSiteById(siteId).subscribe(
      (data) => {
        this.site = data;
        this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.constructMapUrl());
      },
      (error) => {
        console.error('Error fetching site data:', error);
      }
    );
  }

  private constructMapUrl(): string {
    if (this.site && this.site.location) {
      return `https://www.google.com/maps/embed?pb=${this.site.location}`;
    } else {
      return '';
    }
  }

  ngOnDestroy() {}
}
