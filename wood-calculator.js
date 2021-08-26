//per chair wood=3cft
//per table wood=5cft
//per bed wood=10cft
const perChairWood=3;
const perTableWood=5;
const perBedWood=30;
function woodCalculator(chairNumber,tableNumber,bedNumber) {
    chariWood=perChairWood*chairNumber;
    tableWood=perTableWood*tableNumber;
    bedWood=perBedWood*bedNumber;
    const totalWood=chariWood+tableWood+bedWood;
    return totalWood;
}
const totalWoodCount=woodCalculator(1,2,1);
console.log(totalWoodCount);