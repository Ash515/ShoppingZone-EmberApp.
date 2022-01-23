import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
export default class GeneralContainerComponent extends Component {
@service('shopping-cart')cart;

//displays item count by clicking single product everytime
get itemCount(){
    return this.cart.itemList.reduce((total,item)=>{
        return total += item.count;
    },0);
}

}
