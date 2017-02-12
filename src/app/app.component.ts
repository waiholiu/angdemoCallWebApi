import { Component, OnInit } from '@angular/core';
import { WidgetService } from './widget.service';
import { Widget } from './widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  allWidgets: Widget[];

  constructor(private widgetService: WidgetService) { }
  ngOnInit() {
    this.widgetService.getAllWidgets().subscribe(widgets => this.allWidgets = widgets);

  }

  onDeleteWidget(widget : Widget) {
    this.widgetService.deleteWidget(widget.id).subscribe((res) => {
      var index = this.allWidgets.indexOf(widget, 0);
      if (index > -1)
      {
          this.allWidgets.splice(index, 1);
          
      }
      this.widgetService.getAllWidgets().subscribe(widgets => this.allWidgets = widgets);

    });;
  }
}
