import { Component, Input, TemplateRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() rowData: any[] = [];
  @Input() colsTemplate: TemplateRef<any>[] = [];
  @Input() headings: string[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.rowData);
    console.log(this.colsTemplate);
    console.log(this.headings);
  }
}