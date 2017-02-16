function Phone (make, price, color, system) {
	this.make = make;
	this.price = price;
	this.color = color || 'szary'; //podoba mi się ustalanie wartości domyślnych
	this.system = system || 'Android';
}

Phone.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.make + ", kolor to " + this.color + ", kosztuje " + this.price + "zł, a działa w oparciu o system " + this.system + ".");
};

var galaxyS6 = new Phone('Samsung', 1850, 'czarny');
var iPhone6S = new Phone('Apple', 2250, 'srebrny', "iOs");
var onePlusOne = new Phone ('OnePlus?', 1550);

galaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();