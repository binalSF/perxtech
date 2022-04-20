import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.scss"],
})
export class DirectivesComponent implements OnInit {
  currentStyles: Record<string, string> = {};
  textInput: string;
  constructor() {
    this.textInput = "";
  }

  ngOnInit(): void {
    this.setCurrentStyles();
  }

  /*
   * @name: setCurrentStyles
   * @description: CSS styles- Set some styles for text input
   */
  setCurrentStyles() {
    this.currentStyles = {
      "font-style": "italic",
      "font-weight": "bold",
      "font-size": "24px",
    };
  }

  /*
   * @name: modelChangeFn
   * @param {string} value
   * @description:change input value
   */
  modelChangeFn(value: any) {
    this.textInput = value;
  }
}
