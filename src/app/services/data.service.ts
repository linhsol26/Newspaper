import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient, public router: Router) { }

  db = null;

  fetchNews() {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.http.get
        ('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6401344e6b384eeebd40fe3023073941'
          ).toPromise();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  public query(name) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.db.articles.length; i++) {
      if (this.db.articles[i].source.name === name) {
        return this.db.articles[i];
      }
    }
    return this.router.navigate(['**']);
  }

  async randomRouting() {
    if (this.db === null) {
        this.db = await this.fetchNews();
    }
  }
}
