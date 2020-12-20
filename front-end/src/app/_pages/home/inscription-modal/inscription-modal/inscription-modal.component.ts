import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-inscription-modal',
  templateUrl: './inscription-modal.component.html',
  styleUrls: ['./inscription-modal.component.css']
})
export class InscriptionModalComponent implements OnInit {

  addForm: FormGroup;
  pseudo = new FormControl('');
  firstName = new FormControl('');
  secName = new FormControl('');
  psw = new FormControl('');
  pswConf = new FormControl('');
  mail = new FormControl('');

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<InscriptionModalComponent>) {
    this.addForm = this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm() {
    return this.formBuilder.group({
      pseudo: ['', [Validators.required, Validators.minLength(4)]],
      psw: ['', [Validators.required], Validators.minLength(4)],
      pswConf: ['', [Validators.required], Validators.minLength(4)],
      firstName: ['', [Validators.required], Validators.minLength(3)],
      secName: ['', [Validators.required], Validators.minLength(3)],
      mail: ['', [Validators.required], Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ],
    })
      ;
  }

  onSubmit() {
    console.log(this.pseudo);
    console.log(this.addForm.valid);
  }


  close() {
    this.dialogRef.close();
  }
}
