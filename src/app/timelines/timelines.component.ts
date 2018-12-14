import { Component, OnInit } from '@angular/core';
import {DateUtilService} from '../date-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.scss']
})
export class TimelinesComponent implements OnInit {
  output = '';
  constructor(private dateUtiService: DateUtilService) { }

  ngOnInit() {
  }
  onChange(value) {
    this.output = this.dateUtiService.getDiffToNow(value);
  }
}
