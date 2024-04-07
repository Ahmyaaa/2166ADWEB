import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder, Validators  } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';

 
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
 
export class AddBookComponent implements OnInit {
 
  bookForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private snackBar: MatSnackBar
  ) { 
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required], 
      book_type: ['']
    });
  }
 
  ngOnInit() { }
 
  onSubmit(): void {
    this.crudService.AddBook(this.bookForm.value).subscribe(() => {
      console.log('Data added successfully!');
      this.bookForm.reset();
      this.openSnackBar('Book added successfully!');
      this.ngZone.run(() => this.router.navigateByUrl('/add-book'));
    }, (err) => {
      console.log(err);
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
        duration: 1000 // set your desired duration in milliseconds
    });
  }
}
