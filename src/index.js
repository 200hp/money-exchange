module.exports = function makeExchange(currency) {
    var coins = {"H": 50, "Q": 25, "D": 10, "N": 5, "P": 1};

    if(currency <= 0) {
        return {};
    }
    else if(currency >= 10000){
        return {"error": "You are rich, my friend! We don\'t have so much coins for exchange"};
    }
    for (const i in coins) {
        var calculation = Math.floor(currency/coins[i]);
        currency-=coins[i]*calculation;
        coins[i] = calculation;
        if(coins[i] == 0) {
            delete coins[i];
        }
    } return coins;
}