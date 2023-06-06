// class of donut maker and all the functions of it
// 3 main variables donut clicker auto clicker 100 donuts setting intial values
class DonutMaker {

constructor(){

this.donutClick = 0;
this.donutCount = 1;

this.autoClickerCount = 0;
this.autoClickerCost = 100;

// this.multiplierCount = 0;
// this.multiplierCost = 10

}

donutclicked(){

this.donutClick = this.donutClick + this.donutCount







}

getDonutClicked(){

    return this.donutClick;


addautoClicker(){ 

// will have to add to if statement later to increase cost

if (this.donutClick >= this.autoClickerCost)
{ this.donutClick = this.donutClick - this.autoClickerCost;
this.autoClickerCount ++; 
this.increaseAutoClickerCost()}}


}

increaseAutoClickerCost(){

    this.autoClickerCost = this.autoClickerCost + this.autoClickerCost + this.autoClickerCost * .1;


getAutoClickerCount() {
    return this.autoClickerCount;
    }

getAutoClickerCost() {
    return this.autoClickerCost;
}

}

getDonutValue(){
    return this.donutCount;
}

}