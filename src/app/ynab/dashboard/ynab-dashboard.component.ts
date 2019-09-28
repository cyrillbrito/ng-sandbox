import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ynab-dashboard',
  templateUrl: './ynab-dashboard.component.html',
  styleUrls: ['./ynab-dashboard.component.css']
})
export class YnabDashboardComponent implements OnInit {

  public content: string;

  constructor() { }

  ngOnInit() {
    // const ynabAPI = new API(environment.ynabAccessToken);

    // ynabAPI.budgets.getBudgets().then(budgetsResponse => {
    //   console.log(budgetsResponse);
    //   // Won't get here because an error will be thrown
    // }).catch(e => {
    //   console.error(e);
    // });
  }

  public fileChange(e: any): void {

    const file = e.target.files[0] as File;

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = event => this.processCsv(event.target.result as string);
    reader.readAsText(file, 'UTF-16');
  }

  private processCsv(csv: string): void {

    const lines = csv.split(/\r?\n/).map(x => x.split(';'));

    let newCsv = 'Date;Payee;Amount\n';
    for (const line of lines) {

      const firstChar = line[0].charAt(0);
      if (!firstChar || isNaN(firstChar as unknown as number)) {
        continue;
      }

      newCsv += `${line[0]};${line[2]};${line[3]}\n`;
    }

    const filename = `${lines[9][1]}___${lines[10][1]}.csv`;

    this.download(filename, newCsv);
  }

  private download(filename: string, text: string): void {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-16,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}

