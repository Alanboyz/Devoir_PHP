import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {InscriptionModalComponent} from "./inscription-modal/inscription-modal/inscription-modal.component";
import {UserService} from "../../_core/_services/user-service/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dialogOpen = false;
  addForm: FormGroup;
  pseudo = new FormControl('');
  psw = new FormControl('');


  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, public userService: UserService) {
  }

  ngOnInit(): void {
    this.addForm = this.initForm();
  }

  private initForm() {
    return this.formBuilder.group({
      pseudo: ['', [Validators.required]],
      psw: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.pseudo);
  }

  openModalInscr() {
    if (!this.dialogOpen) {
      this.dialogOpen = true;
      this.dialog.open(InscriptionModalComponent, {
        height: '500px',
        width: '500px'
      }).afterClosed().subscribe(x => {
        this.dialogOpen = false;
      });
    }
  }

  login() {
    this.userService.userToggleConnect(this.pseudo.value);
  }
}
