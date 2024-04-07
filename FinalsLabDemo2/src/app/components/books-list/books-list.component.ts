import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';
import { MatSort, Sort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

 
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
 
export class BooksListComponent implements OnInit {
   
  Books:any = [];
  
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private crudService: CrudService, private snackBar: MatSnackBar) { }
 
  ngOnInit(): void {
    this.crudService.GetBooks().subscribe(res => {
      console.log(res)
      this.Books =res;
    });    
  }
 
  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteBook(id).subscribe(() => {
        this.Books.splice(i, 1);
        this.openSnackBar('Book deleted successfully!');
      });
    }
  }
  
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000, // duration in milliseconds
      horizontalPosition: 'center', // center the snackbar horizontally
      verticalPosition: 'bottom' // show the snackbar at the bottom of the screen
    });
  }
    

  sortData(event: any) {
    const data = this.Books.slice();
    if (event.active === 'price') {
      // Sort numeric data
      if (event.direction === 'asc') {
        this.Books = data.sort((a: any, b: any) => a[event.active] - b[event.active]);
      } else if (event.direction === 'desc') {
        this.Books = data.sort((a: any, b: any) => b[event.active] - a[event.active]);
      }
    } else {
      // Sort string data for other columns
      if (event.direction === 'asc') {
        this.Books = data.sort((a: any, b: any) => a[event.active].localeCompare(b[event.active]));
      } else if (event.direction === 'desc') {
        this.Books = data.sort((a: any, b: any) => b[event.active].localeCompare(a[event.active]));
      }
    }
  }
}
