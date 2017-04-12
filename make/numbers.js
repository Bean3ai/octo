make.numbers = {
  bool: function () {
    return random.bool();
  },
  float: function () {
    let n;
    if (random.chance(32)) {
      switch(random.number(4)) {
        case 0: n = random.range(Number.MAX_VALUE, Number.MIN_VALUE); break;
        case 1: n = Math.pow(10, 1) / Math.pow(10, random.number(307)); break;
        case 2: n = Math.pow(2, random.float() * random.float() * 64); break;
        case 3: n = Math.pow(10, random.range(1, 9)) / Math.pow(10, random.range(1, 9)); break;
      }
      return n;
    }
    switch (random.number(6)) {
      default: n = random.float();
    }
    return n;
  },
  rangeNumber: function () {
    return random.pick([1, 2, 3, 4, 6, 8, 16, 32, 64, make.tinyNumber]);
  },
  tinyNumber: function () {
    return Math.pow(2, random.number(12));
  },
  unsignedNumber: function () {
    if (random.chance(2)) {
      return Math.abs(make.number());
    }
    return Math.pow(2, random.number(65)) + random.number(3) - 1;
  },
  evenNumber: function (number) {
    return number % 2 == 1 ? ++number : number;
  },
  number: function () {
    var value = random.choose([
      [10, make.float],
      [10, [make.rangeNumber, make.tinyNumber]],
      [ 1, Make.unsignedNumber]
    ]);
    return random.chance(10) ? -value : value;
  }
}