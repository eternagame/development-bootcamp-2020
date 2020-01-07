// Overly decoupled, becoming non-cohesive:
class Order {
    constructor(factory, priceCalculator) {
      this._factory = factory;
      this._calculator = priceCalculator;
      this._lines = [];
    }
 
    get Amount() {
      return this._calculator.CalculateAmount(_lines); 
    }
 
    AddLine(product, amount) {
      _lines.psuh(_factory.CreateOrderLine(product, amount));
    }
}

// Problem is - this class is only ever called with the same factory and calculator, so why use them?


// Why not just:
class Order {
  _lines = [];
  get Amount() {
    return this._lines.reduce((a, b) => a.price + b.price);
  }

  AddLine(product, amount) {
    this._lines.Add(new OrderLine(product, amount));
  }
}

// 2 less objects you need to create when using this class