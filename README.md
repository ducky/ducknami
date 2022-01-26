# Ducknami

## A Half-Arse Konami/Custom Key Pattern Checker

Currently only supports events (`window.keyup`, `input.change`, etc), but could easily be extended to use whatever.

### Base Usage

This is the basic usage, that uses the Konami Code by default. `Arrow Keys + A + B` on your keyboard.

> `Up Up Down Down Left Right Left Right B A`

```html
<script type="text/javascript" src="./build/ducknami.js"></script>
<script type="text/javascript">
  const duck = new Ducknami({ 
    onSuccess: () => console.log('%YOU DID IT!', 'font-size: 24px'),
  });

  window.addEventListener('keyup', duck.run);
</script>
```

### Custom Code Usage

This is the advanced usage, if you want to set your own code sequence.

#### **Setup: Easy way to figure out your code sequence.**

The `setup` method will log your current sequence to the console. It uses the default `800ms` delay between presses. Once you stop pressing or press too slow it will output the full sequence that you can use.

```html
<script type="text/javascript" src="./build/ducknami.js"></script>
<script type="text/javascript">
  const duck = new Ducknami();
  window.addEventListener('keyup', duck.setup);
</script>
```

#### **Usage: How to use your sequence.**

Setup is similar to the basic usage, but with your new code.

```html
<script type="text/javascript" src="./build/ducknami.js"></script>
<script type="text/javascript">
  const duck = new Ducknami({
    code: [65, 83, 68, 70, 65, 83, 68, 70], // asdfasdf
    onSuccess: () => console.log('%YOU DID IT!', 'font-size: 24px'),
  });

  window.addEventListener('keyup', duck.run);
</script>
```

## Options

All options currently available for customizing your code entry.

| Option      | Default                                    | Description                                                                                            |
|-------------|--------------------------------------------|--------------------------------------------------------------------------------------------------------|
| `code`      | `[38, 38, 40, 40, 37, 39, 37, 39, 66, 65]` | Code sequence - Default is Konami code. Use the `setup` method to figure yours out easier.             |
| `debug`     | `false`                                    | Useful for seeing why your code isn't triggering. Outputs the current sequence to the console.         |
| `delay`     | `800`                                      | The delay between keypresses. The sequence resets if you take longer than the `delay` between buttons. |
| `onSuccess` | `() => {}`                                 | The function to call when a successful sequence is entered.                                            |
| `onReset`   | `() => {}`                                 | The function to call when a sequence resets (from being entered wrong/too slowly).                     |

