// 1. first problem solving
function seerToMon(seer) {
    if (typeof (seer) != 'number' || (seer <= -1)) {
        return 'Opps! Please input a positive ro valid number';
    }
    else {
        let mon = seer / 40;//since 1 mon ==40 seer
        return mon;
    }
}
const totalMon = seerToMon(120);
console.log(totalMon);


// 2. second problem solving
//product price declaration
let shirtPrice = 100;
let pantsPrice = 200;
let shoesPrice = 500;
function totalSales(shirtNumber, pantsNumber,shoesNumber) {
   if (typeof(shirtNumber)!='number' || (shirtNumber)<-0) {
       return 'Please, input a valid number'
   }else if(typeof(pantsNumber)!='number' || (pantsNumber)<-0) {
       return 'Please, input a valid number'
   }else if(typeof(shoesNumber)!='number' || (shoesNumber)<-1) {
       return 'Please, input a valid number'
   }
   else{
    shirtPrice=shirtPrice*shirtNumber;
    pantsPrice=pantsPrice*pantsNumber;
    shoesPrice=shoesPrice*shoesNumber;
    const total=shirtPrice+pantsPrice+shoesPrice;
    return total;
   }
}
const total = totalSales(1,3,1);
console.log(total);


// 3. problem solving 3rd
// price declaration
let firstPerCost=100;
let secondPerCost=80;
let thirdPerCost=50;
function deliveryCost(quantity) {
    if (typeof (quantity)=='number' && quantity>0) {
        if (quantity<=100) {
            const first100Cost=firstPerCost * quantity;
              const firstStep= first100Cost;
              return firstStep;
          }else if(quantity>100 && quantity<=200){
              const first100Cost=firstPerCost * 100;
              const restQuantity=quantity-100;//quantity count
              const second80Cost=secondPerCost*restQuantity;
              const secondStepCost= second80Cost+first100Cost;
              return secondStepCost;
          }else if(quantity>200){
              const first100Cost=firstPerCost * 100;
              const second80Cost=secondPerCost*100;
             const totalCostQuantity=quantity-200;
             const thirdRestCost=totalCostQuantity * thirdPerCost;
             const totalCost=first100Cost+second80Cost+thirdRestCost;
             return totalCost;
          }
    }
    else{
        return 'Opps! Please, input a valid or posivtive number';
    }

}
const totalDeliveryCost=deliveryCost(250);
console.log(totalDeliveryCost);


//4. problem solving 4th
const friends=['Sakib khan','Amir Khan','Anika','Sohel Mahmud','Asifur','Tania','Anika','Dalia','Misso','Robel Kahn'];
function perfectFriend(friends) {
    let tinyFriend=friends[0];
    for(const friend of friends){
        // console.log(friend);
        if (friend.length<tinyFriend.length && friend.length==5) {
            tinyFriend=friend;
        }
    }
    return tinyFriend;
}
const bestFriend=perfectFriend(friends);
console.log(bestFriend);

