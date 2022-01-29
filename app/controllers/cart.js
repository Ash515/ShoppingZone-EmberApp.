import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service('shopping-cart') cart; //use service by using decorator

  get subtotal() {
    //taking price from itemList array
    return this.cart.itemList.reduce((accumulator, curr_item) => {
      return accumulator + curr_item.price * curr_item.count; //multipling item count also when user increaseing the item counts
    }, 0);
  } 
  get tax() {
    return 0.08 * this.subtotal;
  }
  get total() {
    return this.subtotal + this.tax;
  }

  @action
  updateItemCount(item, event) {
    //event is default arg when passed due to on helper function here we explicitely used
    const count = event.target.value;
    if (count >= 0) {
      item.count = count;
    } else {
      item.count = 0;
    }
  }
}
