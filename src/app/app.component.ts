import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogFront';

  {
    $(document).on("scroll", function(){
      if
        ($(document).scrollTop() > 86){
        $("#banner").addClass("shrink");
      }
      else
      {
        $("#banner").removeClass("shrink");
      }
    });
  }

}
