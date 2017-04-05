describe("Thermostat", function() {

var thermostat;

beforeEach(function() {
  thermostat = new Thermostat();
});

  it("starts at 20 degrees", function() {
    expect(thermostat.checkTemperature()).toEqual(20);
  });

  it("temperature can be increased by 1", function() {
    thermostat.increaseTemperature();
    expect(thermostat.checkTemperature()).toEqual(21);
  });

  it("temperature can be decreased by 1", function() {
    thermostat.decreaseTemperature();
    expect(thermostat.checkTemperature()).toEqual(19);
  });

  it("won't let temperature go below 10", function() {
    for(var i = 19; i >= thermostat._MINIMUM; i--) {
      thermostat.decreaseTemperature();
    }
    expect(function() { thermostat.decreaseTemperature(); }).toThrowError('temperature cannot go below 10');
  });

  it('in powersave mode sets max temperature to 25', function(){
    thermostat.powerSaveOn();
    expect(thermostat._MAX).toEqual(25);
  });

  it('when power save mode is off max temperature is 32', function(){
    thermostat.powerSaveOff();
    expect(thermostat._MAX).toEqual(32);
  });

  it('resets temperature to 20', function() {
    thermostat.resetTemp();
    expect(thermostat.checkTemperature()).toEqual(20);
  });

  it('energy is low when temperature is less than 18', function() {
    for(var i = 20; i >= 18; i--) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.energyChecker()).toEqual('low');
  });

  it('energy is medium when temperature is between 18 and 24', function() {
    expect(thermostat.energyChecker()).toEqual('medium');
  });

describe('powersave mode is on', function() {
  beforeEach(function() {
    thermostat.powerSaveOn();
  });

    it('cannot exceed max temperature', function() {
      for(var i = 20; i < thermostat._MAX; i++) {
        thermostat.increaseTemperature();
      }
      expect(function() { thermostat.increaseTemperature(); }).toThrowError('cannot exceed max temperature');
    });

});

  describe('powersave mode is off', function() {
    beforeEach(function() {
      thermostat.powerSaveOff();
    });

    it('energy is high when temperature is 25 or more', function() {
      for(var i = 20; i < 25; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.energyChecker()).toEqual('high');
    });

  });

});
