import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { HomeService } from "src/services";

// Importing data from the json file
import data from "../../../assets/book.json";
// Importing interfaces
import { Books } from "./interface/books";
import { BookFilter } from "./interface/book-filter";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements AfterViewInit {
  displayedColumns: string[] = [
    "id",
    "type",
    "content",
    "cover_type",
    "created_at",
  ];
  booksData: Books[] = [];
  dataSource = new MatTableDataSource(this.booksData);
  bookFilters: BookFilter[] = [];
  filterDictionary = new Map<string, string>();

  constructor(private homeService: HomeService) {}
  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit(): void {
    this.bookList();
  }
  /*
   * @name: bookList
   * @description: Fetch all books data
   */
  public bookList() {
    this.booksData = this.homeService.getBooks();
    this.dataSource = new MatTableDataSource(this.booksData);
    /* All filter Options */
    this.bookFilters.push(
      {
        name: "id",
        options: this.filterdOption([
          "All",
          ...data.data.map((book) => book.id),
        ]),
        defaultValue: "All",
      },
      {
        name: "type",
        options: this.filterdOption([
          "All",
          ...data.data.map((book) => book.type),
        ]),
        defaultValue: "All",
      },
      {
        name: "content",
        options: this.filterdOption([
          "All",
          ...data.data.map((book) => book.attributes.content),
        ]),
        defaultValue: "All",
      },
      {
        name: "cover_type",
        options: this.filterdOption([
          "All",
          ...data.data.map((book) => book.attributes.display_properties.type),
        ]),
        defaultValue: "All",
      }
    );
    /* Filtering Data from available records */
    this.dataSource.filterPredicate = function (record: any, filters) {
      const map = new Map(JSON.parse(filters));
      let isMatch = false;
      for (const [key, value] of map) {
        isMatch = value == "All" || record[key as keyof Books] == value;
        if (!isMatch) return false;
      }
      return isMatch;
    };
  }

  /*
   * @name: ngAfterViewInit
   * @description:  Set sort order
   * @returns {string} sort
   */

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /*
   * @name: filterdOption
   * @param {object} ob
   * @param {object} datafilter
   * @description:  Called when filter gets changed
   * @returns {JSON} object
   */
  applyBookFilter(ob: MatSelectChange, datafilter: BookFilter) {
    this.filterDictionary.set(datafilter.name, ob.value);
    this.dataSource.filter = JSON.stringify(
      Array.from(this.filterDictionary.entries())
    );
  }

  /*
   * @name: filterdOption
   * @param {string} d
   * @description: Filter out the duplicate option in the filter
   * @returns {JSON} array
   */

  filterdOption = (d: string[]) => d.filter((v, i, a) => a.indexOf(v) === i);
}
