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
    error: null,
    loading: false,
    data: {
        name: null,
        location: null,
        description: null,
        imageFile: ''
    }
  };

  constructor(
    private _siteService: SiteService,
    private _router: Router,
  ) { }

  ngOnInit(): void {}

  onFileSelected(files: FileList) {
    this.site.data.imageFile = files.item(0);
  }

  saveSite() {
    this.site.loading = true;
    this.site.error = null;

    const formData = new FormData();
    formData.append('name', this.site.data.name);
    formData.append('location', this.site.data.location);
    formData.append('description', this.site.data.description);
    formData.append('media', this.site.data.imageFile);
    
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
