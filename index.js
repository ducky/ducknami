class Ducknami {
  constructor(options = {}) {
    this.cache = [];
    this.defaults = {
      code: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
      debug: false,
      delay: 800,
    };

    this.options = { ...this.defaults, ...options };
    this.onReset = typeof this.options.onReset === 'function' ? () => { this._clear(); this.options.onReset(); } : this._onDefaultReset;
    this.onSuccess = typeof this.options.onSuccess === 'function' ? this.options.onSuccess : this._onDefaultSuccess;
  }

  setup = (e) => {
    this.cache = [...this.cache, e.keyCode];

    clearTimeout(this._timer);
    this._timer = setTimeout(this._onSetupReset, this.options.delay);

    console.log('CURRENT SEQUENCE: ', this.cache.join(' '));
  };

  run = (e) => {
    this.cache = [...this.cache, e.keyCode].slice(this.options.code.length * -1);
    if (this.options.debug) {
      console.log('CURRENT SEQUENCE: ', this.cache.join(' '));
    }

    clearTimeout(this._timer);
    this._timer = setTimeout(this.onReset, this.options.delay);

    if (this._checkValidCode(this.cache)) {
      if (this.options.debug) console.log('VALID CODE ENTERED');

      clearTimeout(this._timer);
      this._clear();
      this.onSuccess();
    }
  };

  //

  _checkValidCode = (keys) => {
    if (keys.length !== this.options.code.length) return false;
    return keys.every((val, i) => val === this.options.code[i]);
  };

  _clear = () => {
    this.cache = [];
  };

  _onDefaultReset = () => {
    this._clear();
  };

  _onDefaultSuccess = () => {
    console.log('%cPEAK NERD UNLOCKED', 'font-size: 36px;');
  };

  _onSetupReset = () => {
    console.log('');
    console.log('HERE IS YOUR SEQUENCE');
    console.log(JSON.stringify(this.cache));
    console.log('');
    this._clear();
  };
};

window.Ducknami = Ducknami;

export default Ducknami;
