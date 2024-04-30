import { Component, OnDestroy, OnInit } from '@angular/core';
import { SiteService } from '../services/site.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit, OnDestroy {
  site: any; // Initialize site.media as an empty array
  mapUrl: SafeResourceUrl; // Declare mapUrl as SafeResourceUrl

  constructor(
    private route: ActivatedRoute,
    private siteService: SiteService,
    private sanitizer: DomSanitizer
  ) { }

  baseUrl = 'http://localhost:8080/uploads/';
  medias: string[];
  test: string;

  parseMediaString(mediaString: string): string[] {
    // Regular expression to match strings between double quotes
    const regex = /"([^"]*)"/g;
    
    // Array to store the matched strings
    const mediaArray: string[] = [];

    // Iterate through each match and push the matched string (without quotes) into the array
    let match;
    while ((match = regex.exec(mediaString)) !== null) {
      mediaArray.push(match[1]);
    }

    return mediaArray;
  }


  ngOnInit(): void {
    const siteId = this.route.snapshot.params['siteId'];
    this.siteService.getSiteById(siteId).subscribe(
      (data) => {
        this.site = data;
        this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.site.location);
        this.medias = this.parseMediaString(this.site.media);
        this.test = this.medias[0];
        console.log(this.medias); // Add this line for debugging
      },
      (error) => {
        console.error('Error fetching site data:', error);
      }
    );
  }

  ngOnDestroy() {}
}
