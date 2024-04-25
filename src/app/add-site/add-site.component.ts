import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryList } from '../interfaces/category-list';
// import { AuthService } from '../services/auth.service';
// import { CategoryService } from '../services/category.service';
// import { UtilsService } from '../services/utils.service';
import { WriteSite } from '../interfaces/write-site';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit {

  categoryList: CategoryList = {
    sub: null,
    error: null,
    loading: false,
    items: [
      {
        _id: "001",
        name: "cat1",
        count: 1,
      },
      {
        _id: "002",
        name: "cat2",
        count: 2,
      },
      {
        _id: "003",
        name: "cat3",
        count: 3,
      },
    ]
  };
  
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

  image;

  constructor(
    // private _authService: AuthService,
    // private _categorySerice: CategoryService,
    private _siteService: SiteService,
    private _router: Router,
    // private _utils: UtilsService,
  ) { }

  ngOnInit(): void {
    // this.getCategories();
  }

  // saveBlog() {
  //   const formData = new FormData();
  //   formData.append('name', this.site.name);
  //   formData.append('location', this.site.location);
  //   formData.append('description', this.site.description);
  //   formData.append('imageFile', this.site.imageFile);

  //   this.http.post<any>('http://your-api-url/sites', formData).subscribe(
  //     (response) => {
  //       console.log('Upload successful', response);
  //       // Reset the form
  //       this.site = {
  //         name: '',
  //         location: '',
  //         description: '',
  //         imageFile: null
  //       };
  //     },
  //     (error) => {
  //       console.error('Upload error', error);
  //     }
  //   );
  // }

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
    formData.append('imageFile', this.site.data.imageFile);
    
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

  // getCategories() {
  //   this.categoryList.loading = true;
  //   this.categoryList.error = null;
    
  //   this.categoryList.sub = this._categorySerice.getCategoryList()
  //   .subscribe((res: any) => {
      
  //     this.categoryList.items = res;
  //     this.categoryList.loading = false;
  //     this.categoryList.sub.unsubscribe();

  //   }, err => {

  //     this.categoryList.error = err;
  //     this.categoryList.loading = false;
  //     this.categoryList.sub.unsubscribe();

  //   })
  // }

  // fileChangeEvent(e) {
  //   if( e.target.files.length > 0 ) {
  //     this.image = e.target.files[0];
      
  //     const file = (e.target as HTMLInputElement).files[0];

  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.site.data.img = reader.result as string;
  //     }
  //     reader.readAsDataURL(file)

  //   }
  // }

}
