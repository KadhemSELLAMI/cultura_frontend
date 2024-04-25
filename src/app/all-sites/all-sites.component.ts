import { Component, OnInit } from '@angular/core';
import { Site } from '../interfaces/site';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-all-sites',
  templateUrl: './all-sites.component.html',
  styleUrls: ['./all-sites.component.scss']
})
export class AllSitesComponent implements OnInit {
  sites: Site[] = [];

  constructor(
    private siteService: SiteService
  ) {}

  ngOnInit() {
    this.siteService.getSites()
    .subscribe((sites: Site[]) => {
      this.sites = sites;
      console.log(sites[1].id);
      console.log(sites[1].name);
      console.log(sites[1].location);
      console.log(sites[1].description);
      console.log(sites[1].image);
      console.log(sites[1].pic_byte);
    });
  }

  getImage(bytes:String):String {
    return "data:image/jpeg;base64," + bytes;
  }
}
