 export default class Product
 {
     UserName;
     Password;
     statusMessage;
    _productName;

    get ProductName(){
        return this._productName;
    }
    set ProductName(newName){
        if(this.UserName=='John' && this.Password=='admin'){
            this._productName = newName;
         } else {
             this.statusMessage ="You are not authorized to set product Name";
         }
    }
 }