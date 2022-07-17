import { ProductInList } from "src/app/state/models/product-in-cart.model";

export interface ShoppingList {
  id: string;
  status: string;
  user_created: string;
  date_created: Date;
  user_updated?: string;
  date_updated?: Date;
  products: ProductInList[];
}
