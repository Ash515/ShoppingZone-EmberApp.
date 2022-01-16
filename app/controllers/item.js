import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import {action} from '@ember/object';
export default class ItemController extends Controller {

@tracked color="red";

@action
onChangeColor(newcolor){  //after user clicking the color input is passed as a arg in this action function
    this.color=newcolor;
}
}
