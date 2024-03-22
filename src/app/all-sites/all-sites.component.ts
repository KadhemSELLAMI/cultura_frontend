import { Component, OnInit } from '@angular/core';
import { Site } from '../interfaces/site';

@Component({
  selector: 'app-all-sites',
  templateUrl: './all-sites.component.html',
  styleUrls: ['./all-sites.component.scss']
})
export class AllBlogsComponent implements OnInit {
  mockSites: Site[] = [
    {
      id: 1,
      name: 'Site A',
      location: 'City X',
      description: 'This is Site A description.',
      img: 'Access_all_angles_Munyonyo_Shrine.jpg'
    },
    {
      id: 2,
      name: 'Site B',
      location: 'City Y',
      description: 'This is Site B description.',
      img: 'Gizah_Pyramids.jpg'
    },
    {
      id: 3,
      name: 'Site C',
      location: 'City Z',
      description: 'This is Site C description.',
      img: 'Chichen_Itza.jpg'
    },
  ];

  constructor() {}

  ngOnInit() {}
}
