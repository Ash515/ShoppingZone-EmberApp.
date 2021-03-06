import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  @tracked color = this.model.colors[0].color; //1st color red 

  get productImage() {
    return this.model.colors.find(({ color }) => color === this.color).image;
  }

  @action
  onChangeColor(newcolor) {
    //after user clicking the color input is passed as a arg in this action function
    this.color = newcolor;
  }
}
