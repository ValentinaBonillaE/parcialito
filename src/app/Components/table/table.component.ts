import { ChangeDetectionStrategy, Input, SimpleChanges } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements AfterViewInit {

  @Input() dataSource: MatTableDataSource<any>;
  displayedColumns: string[];
  @Input() data: any[]


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api: ApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.data)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && this.data) {
      this.loadTable();
    }
  }

  public loadTable() {
    this.displayedColumns = [];
    let objeto = this.data[0];

    for (let nombre of Object.keys(objeto)) {
      this.displayedColumns.push(nombre);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}