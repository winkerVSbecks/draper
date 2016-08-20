# Draper [![](https://circleci.com/gh/winkerVSbecks/draper/tree/master.svg?style=shield)](https://circleci.com/gh/winkerVSbecks/draper)

Atomic, functional and modular styling for React Native. Inspired by Basscss and Tachyons.

<image alt="Don Draper smile" src="draper.gif" width="250">

### Usage

`npm i Draper -S`

Build draper styles in a `styles.js` module:

```js
import draper from 'Draper';
export default draper();
```

Then to use them:

```js
import s from './styles';

<View style={[ s.bgWhite, s.p2, s.mt2, s.rounded ]}>
  { ... }
</View>
```

#### Customizing

The [base config](https://github.com/winkerVSbecks/draper/blob/master/src/config.js) contains defaults for `rem`, `borderWidth`, `typeScale`, `(whitespace)scale`, `lineHeightScale` and `clrs`. You can modify these by passing in `options` to the build function. For example:

```js
import draper from '../src';
export default draper({
  clrs: { mauve: '#E0B0FF' },
  scale: [1, 2, 3, 4],
  typeScale: {
    f2: 1.5,
    f3: 1.25,
  },
});
```

### Modules

#### Absolute
Absolute positioning and `zIndex` utilities. It also aliases `StyleSheet.absoluteFill`.

📑[source](https://github.com/winkerVSbecks/draper/blob/master/src/absolute.js)


#### Border
Border radius and sizing utilities. Border radius scale: `1rem, 2rem, 3rem, 4rem, 8rem, 16rem`. Border sizing supports three options:

- `0`
- `StyleSheet.hairlineWidth`
- `config.borderWidth`

📑[source](https://github.com/winkerVSbecks/draper/blob/master/src/border.js)


#### Colors

Text, border and background colour utilities. The colour values used in this module are from [mrmrs/colors](http://clrs.cc). For example:

```js
{ black:        { color: '#515163' } }
{ bgBlack:      { backgroundColor: '#515163' } }
{ borderBlack:  { borderColor: '#515163' } }
```
📑[source](https://github.com/winkerVSbecks/draper/blob/master/src/colors.js)


#### Dimensions
Width and height utilities using this scale: `1rem, 2rem, 3rem, 4rem, 8rem, 16rem`.

📑[source](https://github.com/winkerVSbecks/draper/blob/master/src/dimensions.js)


#### Flexbox
These entire flexbox module as utilities.

📑[source](https://github.com/winkerVSbecks/draper/blob/master/src/flexbox.js)


#### Typography
Font style, weight and size utilities. Font weight: `normal, bold, 100 - 900`. Font sizes are generated using a type scale.

```js
const typeScale = {
  f1: 2, // * rem
  f2: 1.5, // * rem
  f3: 1.25, // * rem
  f4: 1, // * rem
  f5: 0.875, // * rem
  f6: 0.75, // * rem
};
```
📑[source](https://github.com/winkerVSbecks/draper/blob/master/src/typography.js)

In React Native `lineHeight` is not a multiplier. This makes it hard to create line height utilities. Instead you can create text components which have all the `fontSize` and `lineHeight` stylings. See [text.js](https://github.com/winkerVSbecks/draper/blob/master/example/flexbox.js) for an example.

#### Whitespace
Margin and padding utilities.

```
Padding
	base: p
	modifiers: h, v, t, r, b, l
	scale: 0, 1, 2, 3, 4, 5, 6

Margin
	base: m
	modifiers: h, v, t, r, b, l
	scale: 0, 1, 2, 3, 4, 5, 6

Example:
	mb1 = marginBottom: 0.5 * rem
	ph1 = paddingHorizontal: 4 * rem
```
📑[source](https://github.com/winkerVSbecks/draper/blob/master/src/whitespace.js)

### Example
To run the example:
- `npm install`
- `npm run dev:ios` for iOS and `npm run dev:android` for Android.


### Credits

- [Tachyons](http://tachyons.io)
- [Basscss](http://www.basscss.com)
- [react-native-style-tachyons](https://github.com/tachyons-css/react-native-style-tachyons)
