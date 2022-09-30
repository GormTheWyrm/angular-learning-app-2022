import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formbuilder.group({
      name: ['John Doe', Validators.required],
      hp: [0, [Validators.required, Validators.min(1)]]
    })
  }

  myForm!:FormGroup;
  submitted:boolean=false;
  submitForm():void{
    /// validate
    this.submitted = true;
  }

}
