import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
 
export class BookDetailComponent implements OnInit {
 
  getId: any;
  updateForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService,
    private snackBar: MatSnackBar
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.updateForm = this.formBuilder.group({
      title: [''],
      price: [''],
      description: [''],
      book_type: ['']
    });

    this.crudService.GetBook(this.getId).subscribe(res => {
      this.updateForm.patchValue({
        title: res['title'],
        price: res['price'],
        description: res['description'],
        book_type: res['book_type']
      });
    });
  }
 
  ngOnInit() { }

  onUpdate(): void {
    this.crudService.updateBook(this.getId, this.updateForm.value).subscribe(() => {
      console.log('Data updated successfully!');
      this.ngZone.run(() => {
        this.router.navigateByUrl('/books-list');
        this.openSnackBar('Book updated successfully!');
      });
    }, (err) => {
      console.error(err);
      this.openSnackBar('Failed to update book. Please try again later.');
    });
  }

  
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
        duration: 1000 // set your desired duration in milliseconds
    });
  }
}
