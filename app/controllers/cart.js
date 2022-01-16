import Controller from '@ember/controller';

export default class CartController extends Controller {
  get subtotal() {
    return this.model.reduce((accumulator, curr_item) => {
      return accumulator + curr_item.price;
    }, 0);
  }
  get tax() {
    return 0.08 * this.subtotal;
  }
  get total() {
    return this.subtotal + this.tax;
  }
}
