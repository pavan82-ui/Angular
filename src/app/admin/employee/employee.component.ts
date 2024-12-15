import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees = [
    {
      id: 1,
      name: 'Scott',
      designation: 'Dev',
      exp: 4
    },
    {
      id: 2,
      name: 'Billy',
      designation: 'QA',
      exp: 3
    },
    {
      id: 3,
      name: 'Frank',
      designation: 'Lead',
      exp: 8
    },
    {
      id: 4,
      name: 'Alan',
      designation: 'Manager',
      exp: 10
    },
  ];

  headings: any[] = [
    'Id',
    'Name',
    'Designation',
    'Experience'
  ];
  constructor() { }
  @ViewChild('id', { static: true }) id: any;
  @ViewChild('name', { static: true }) name: any;
  @ViewChild('des', { static: true }) des: any;
  @ViewChild('exp', { static: true }) exp: any;

  cols: TemplateRef<any>[] = [];

  ngOnInit(): void {
    this.cols.push(this.id, this.name, this.des, this.exp);
  }
}
