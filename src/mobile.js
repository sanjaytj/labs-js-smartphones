//SmartPhone
class SmartPhone {
    constructor(ram, batteryPower, price) {
        this.ram = ram;
        this.batteryPower = batteryPower;
        this.price = price;
    }
    displayFeatures() {
        return this.ram + '\n' + this.batteryPower + '\n' + this.price;
    }

    remainingAmount(priceIHave) {
        this.priceIHave = priceIHave;
        this.price = this.price - this.priceIHave;
    }
}


// AndroidPhone
class AndroidPhone extends SmartPhone {
    constructor (modelName, ram, batteryPower, price) {
        this.modelName = modelName;
        super(ram, batteryPower, price);
    }

    displayFeatures() {
        return this.modelName + '\n' + this.ram + '\n' + this.batteryPower + '\n' + this.price;
    }

    remainingAmount(priceIHave){
        this.priceIHave = priceIHave;
        this.price = this.price - this.priceIHave;
        if(this.price <= 0){
            return "Customer has no more amount"
        }
        else {
            return 'Customer has remaining Rs.'+this.price +' after buying the android phone';
        }
    }
}


// IPhone
class IPhone extends SmartPhone {
    constructor(seriesName, ram, batteryPower, price) {
        this.seriesName = seriesName;
        super(ram, batteryPower, price);
    }
    displayFeatures() {
        return this.seriesName +'\n' + this.ram + '\n' + this.batteryPower + '\n' + this.price;
    }

    remainingAmount(priceIHave){
        this.priceIHave = priceIHave;
        this.price = this.price - this.priceIHave;
        if(this.price <= 0) {
            return 'Customer has no more amount';
        }
        else if(this.priceIHave < this.price ) {
            return 'Customer cant able to buy a phone due to insufficient amount'
        }
        else {
            return 'Customer has remaining Rs.'+this.price +' after buying the Iphone';
        }
    }
}


//MobileCampus
class MobileCampus {
    constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles) {
        this.NoOfMobiles = NoOfMobiles;
        this.NoOfAndroidMobiles = NoOfAndroidMobiles;
        this.NoOfIPhoneMobiles = NoOfIPhoneMobiles;
    }

    changeMobileAvailabilityNumber(count,type) {
        this.count = count;
        this.type = type;
        if(type === 'android'){
            this.NoOfAndroidMobiles = this.NoOfAndroidMobiles - count;
            return 'Available android mobiles are '+this.NoOfAndroidMobiles;

        }
        if(type === 'iphone'){
            this.NoOfIPhoneMobiles = this.NoOfIPhoneMobiles - count;
            return 'Available iphone mobiles are '+this.NoOfIPhoneMobiles;
        }
        else { 
            this.count = this.NoOfAndroidMobiles - this.NoOfIPhoneMobiles;
            return this.count;
        }
    }
}