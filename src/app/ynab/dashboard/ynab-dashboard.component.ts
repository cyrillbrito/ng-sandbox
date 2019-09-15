import { Component, OnInit } from '@angular/core';
import { API } from 'ynab';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-ynab-dashboard',
  templateUrl: './ynab-dashboard.component.html',
  styleUrls: ['./ynab-dashboard.component.css']
})
export class YnabDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const ynabAPI = new API(environment.ynabAccessToken);

    const budgetsResponse = ynabAPI.budgets
      .getBudgets()
      .then(budgetsResponse => {
        // Won't get here because an error will be thrown
      })
      .catch(e => {
        console.log(e);
        // {
        //   error: {
        //    id: "401",
        //    name: "unauthorized",
        //    detail: "Unauthorized"
        //   }
        // }
      });
  }





}
