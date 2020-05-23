import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "CHRISTMAS LIGHTS";
  flag = false;
  text = "Start";
  interval$;
  subscription;
  intervalValue = 1000;

  ngOnInit() {
  }

  toggle() {
    if (this.text === "Start") {
      this.interval$ = interval(this.intervalValue).pipe(
        map(() => {
          this.flag = !this.flag;
        })
      );
      this.subscription = this.interval$.subscribe();
      this.text = "Stop";
    } else if (this.text === "Stop") {
      this.subscription.unsubscribe();
      this.subscription = null;
      this.text = "Start";
    }
  }
}
