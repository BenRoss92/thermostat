function Thermostat() {
  this.temperature = 20;
  this._MINIMUM = 10;
  this._MAX = 25;
}

Thermostat.prototype = {
  checkTemperature: function() {
    return this.temperature;
  },

  increaseTemperature: function() {
    if(this.temperature >= this._MAX) {
      throw new Error('cannot exceed max temperature');
    }
    this.temperature += 1;
  },

  decreaseTemperature: function() {
    if(this.temperature <= this._MINIMUM) {
      throw new Error('temperature cannot go below 10');
    }
    this.temperature -= 1;
  },

  powerSaveOn: function() {
    if (this.temperature >25) {
      this.temperature = 25;
    }
    this._MAX = 25;
  },

  powerSaveOff: function() {
    this._MAX = 32;
  },

  resetTemp: function() {
    this.temperature = 20;
  },

  energyChecker: function() {
    if(this.temperature < 18) {
        return 'low';
    } else if (this.temperature >= 18 && this.temperature < 25) {
        return 'medium';
    } else {
        return 'high';
    }
  }

};
