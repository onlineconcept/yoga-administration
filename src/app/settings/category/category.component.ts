import { Component, OnInit, ViewChild } from '@angular/core';
import {environment} from '../../../environments/environment';
import { AlertifyService } from '../../../_services/alertify.service';
import { Category } from '../../../_models/category';
import { CategoryService } from '../../../_services/category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  category: Category = {id: '', name: ''};
  baseUrl = environment.apiUrl;
  categories: Category[];
  constructor( private alertify: AlertifyService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
    }, err => this.alertify.error(err));
  }

  addCategory() {
    this.categoryService.createCategory(this.category).subscribe(next => {
      this.alertify.success('Category created Successfully');
      this.categories.push(next);
      this.editForm.reset();
    }, err => this.alertify.error(err));
  }

  editCategory(id) {
    alert('edit ' + id);
    this.loadCategories();
  }

  deleteCategory(id) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.categories.splice(this.categories.findIndex(p => p.id === id), 1);
      this.alertify.success('Category deleted Successfully');
    }, err => this.alertify.error(err));
  }
}
