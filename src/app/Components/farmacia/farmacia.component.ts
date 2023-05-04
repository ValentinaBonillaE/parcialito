import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.component.html',
  styleUrls: ['./farmacia.component.css']
})
export class FarmaciaComponent implements OnInit{
  dataSource: MatTableDataSource<any>;
  data: any[]

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.GetAsistencia();
  }

  public async GetAsistencia() {
    this.api.Get('Drogueriums').then((res) => {
      this.dataSource.data = res;
      this.data = res
    });
  }
}