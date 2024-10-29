import { Category } from "./category.js";

export default interface Party {
  partyId: number;
  title: string;
  place:string;
  date: string;  
  category?: Category;
}