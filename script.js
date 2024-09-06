let value = 0;
let coinsValue = 0;
let coinUpdater = 1;
let interval = null;
let interval2 = null;
let modulo = 10;
function increment()
{
   value++;
   const clickSound = new Audio('click.mp3');
   const coinSound = new Audio('coin.mp3');
   clickSound.play();
   if(value%modulo == 0)
   {
      coinsValue = coinsValue + coinUpdater;
      coinSound.play();
   }
   document.getElementById("points").textContent = value;
   document.getElementById("coins").textContent = coinsValue;
}
function buy(cost, title)
{
   let upgradeInfo = "";
   switch(cost){
      case 100:
         upgradeInfo = "Automatic clicker activation";
         break;
      case 10:
         upgradeInfo = "2x Coins";
         break;
      case 500:
         upgradeInfo = "Coin counter updates every 5 clicks";
         break;
      case 1000:
         upgradeInfo = "10x Coins";
         break;
      case 3000:
         upgradeInfo = "Automatic clicker upgrade";
         break;
   }
   if(coinsValue >= cost)
   {
      coinsValue = coinsValue - cost;
      document.getElementById("coins").textContent = coinsValue;
      document.getElementById(title).innerHTML = `
            <label for="${title}">${upgradeInfo} (bought)</label>
            <input type="button" value="Use" id="b${cost}"onclick="${title}()">`;
   }
   else
   {
      alert(`You cannot buy this upgrade yet, you still need to colect ${cost-coinsValue} Coins.`)
   }
}
function doubleCoins()
{
   coinUpdater++;
   document.getElementById("doubleCoins").innerHTML = `
            <label for="doubleCoins">2x Coins (bought)</label>
            <input type="button" value="Use" id="b2" onclick="doubleCoins()">`;
   document.getElementById("b2").disabled = true;
   document.getElementById("buyx10").disabled = false;
}
function tenXCoins()
{
   coinUpdater = 10;
   document.getElementById("tenXCoins").innerHTML = `
            <label>10x Coins (bought)</label>
            <input type="button" value="Use" id="b10">`;
   document.getElementById("b10").disabled = true;
}
function autoClicker()
{
   interval = setInterval(increment, 1000);
   document.getElementById("autoClicker").innerHTML = `
            <label>Automatic clicker activation (bought)</label>
            <input type="button" value="Use" id="b100" onclick="autoClicker()">
            <input type="button" value="Disable" id="stop" onclick="stop()">`;
   document.getElementById("b100").disabled = true;
   document.getElementById("autoClickerUpgradeButton").disabled = false;
}
function autoClickerUpgrade()
{
   interval2 = setInterval(increment, 200);
   document.getElementById("autoClickerUpgrade").innerHTML = `
            <label>Automatic clicker upgrade (bought)</label>
            <input type="button" value="Use" id="b3000" onclick="autoClickerUpgrade()">
            <input type="button" value="Disable" id="stop2" onclick="stop2()">`;
   document.getElementById("b3000").disabled = true;
}
function stop()
{
   clearInterval(interval);
   document.getElementById("stop").disabled = true;
   document.getElementById("b100").disabled = false;
}
function stop2()
{
   clearInterval(interval2);
   document.getElementById("stop2").disabled = true;
   document.getElementById("b3000").disabled = false;
}
function coinsEvery5Sec()
{
   modulo = 5;
   document.getElementById("coinsEvery5Sec").innerHTML = `
            <label>Coin counter updates every 5 clicks (bought)</label>
            <input type="button" value="Use" id="b500">`;
            document.getElementById("b500").disabled = true;
}
