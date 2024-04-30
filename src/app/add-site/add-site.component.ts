import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WriteSite } from '../interfaces/write-site';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit {
  
  site: WriteSite = {
    sub: null,
    error: '',
    loading: false,
    data: {
        name: '',
        location: '',
        description: '',
        media: [] // Changed to array to store multiple media
    }
  };

  constructor(
    private _siteService: SiteService,
    private _router: Router,
  ) { }

  ngOnInit(): void {}

  onFileSelected(media: FileList) {
    // Loop through each selected file and push it to the array
    for (let i = 0; i < media.length; i++) {
      this.site.data.media.push(media.item(i) as never);
    }
  }

  saveSite() {
    this.site.loading = true;
    this.site.error = null;

    const formData = new FormData();
    formData.append('name', this.site.data.name);
    formData.append('location', this.site.data.location);
    formData.append('description', this.site.data.description);
    
    // Append each file to formData
    for (let i = 0; i < this.site.data.media.length; i++) {
      formData.append('media', this.site.data.media[i]);
    }
    
    this.site.sub = this._siteService.writeBlog(formData)
    .subscribe((res:any) => {

      this._router.navigate(['/site', res.id])
      this.site.loading = false;
      this.site.sub.unsubscribe();
      
    }, err => {
      
      this.site.error = err;
      this.site.loading = false;
      this.site.sub.unsubscribe();

    })
  }
}
