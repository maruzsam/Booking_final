import { Component, Input } from '@angular/core';
import { Table } from '../../shared/model/Table';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() table: Table = new Table();
}


