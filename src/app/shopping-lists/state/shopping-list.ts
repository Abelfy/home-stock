import { ProductInList } from "src/app/store/models/product-in-cart.model";

export interface ShoppingList {
  id: string;
  status: string;
  user_created: string;
  date_created: Date;
  user_updated?: string;
  date_updated?: Date;
  product: ProductInList[];
}
