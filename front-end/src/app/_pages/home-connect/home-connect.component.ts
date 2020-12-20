import {Component, OnInit} from '@angular/core';
import {ArticlesService} from "../../_core/_services/article-service/articles.service";
import {UserService} from "../../_core/_services/user-service/user.service";

@Component({
  selector: 'app-home-connect',
  templateUrl: './home-connect.component.html',
  styleUrls: ['./home-connect.component.scss']
})

export class HomeConnectComponent implements OnInit {
  instruments = [
    {name: 'Guitare', price: 150, color: 'Bleue', numeroSerie: 15263, user: 'tony'},
    {name: 'Piano', price: 400, color: 'Vert', numeroSerie: 15263, user: 'tony'},
    {name: 'Flûte', price: 941, color: 'Rouge', numeroSerie: 15263, user: 'tony'},
    {name: 'Harpe', price: 122, color: 'Jaune', numeroSerie: 15263, user: 'tony'},
  ];

  datasource = this.instruments;
  displayedColumns: string[] = ['name', 'price', 'color', 'numeroSerie'];
  currentUser = null;


  constructor(protected as: ArticlesService, public us: UserService) {
  }


  ngOnInit(): void {
    this.as.getArticles().subscribe(x => {
      // this.dataSource = x;
      console.log(x);
    });

    this.currentUser = this.us.currentUser;
  }


  deconnexion() {
    this.us.currentUser = null;
  }

  addElement() {

  }

  suprElement() {
    this.datasource = this.datasource.splice(-1, 2);
  }
}
