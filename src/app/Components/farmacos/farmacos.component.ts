import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-farmacos',
  templateUrl: './farmacos.component.html',
  styleUrls: ['./farmacos.component.css']
})

export class FarmacosComponent implements OnInit{
  dataSource: MatTableDataSource<any>;
  data: any[]

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetFarmacos();
  }

  public async GetFarmacos() {
    this.api.Get('farmacoes').then((res) => {
      this.dataSource.data = res;
      this.data = res
    });
  }
}