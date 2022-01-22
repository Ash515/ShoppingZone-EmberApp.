import Component from '@glimmer/component';

export default class ProductComponent extends Component {
  productImage = this.args.product.colors[0].image;
  productDetails = this.args.product.discription;
  //args is a passing argument property
}
