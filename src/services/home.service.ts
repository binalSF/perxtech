import { Injectable } from "@angular/core";
// Importing data from the json file
import data from "../assets/book.json";

@Injectable()
export class HomeService {
  constructor() {}
  /*
   * @name: getBooks
   * @description: Get all details from books.json
   * @returns {JSON}  object
   */

  getBooks() {
    const booksData = data.data.map((d) => {
      return {
        id: d.id,
        type: d.type,
        content: d.attributes.content,
        created_at: d.attributes.created_at,
        cover_type: d.attributes.display_properties.type,
      };
    });
    return booksData;
  }
}
