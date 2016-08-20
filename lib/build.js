import * as R from 'ramda';
import colors from './colors';
import whitespace from './whitespace';
import typography from './typography';
import flexbox from './flexbox';
import dimensions from './dimensions';
import border from './border';
import absolute from './absolute';
import baseConfig from './config';
import { StyleSheet } from 'react-native';

/**
 * Generate a flat map of classes
 */
function generateClasses({ clrs, scale, typeScale, rem, borderWidth }) {
  return {
    ...colors(clrs),
    ...whitespace(scale),
    ...typography(typeScale),
    ...flexbox,
    ...dimensions(rem),
    ...border(rem, borderWidth),
    ...absolute(rem),
  };
}

/**
 * Generate StyleSheet
 */
const generateStyleSheet = R.compose(
  R.assoc('fill', StyleSheet.absoluteFill),
  StyleSheet.create,
  generateClasses,
);

/**
 * Extend options for base config
 */
const extendOps = {
  clrs: R.merge(baseConfig.clrs),
  rem: R.defaultTo(baseConfig.rem),
  scale: R.defaultTo(baseConfig.scale),
  typeScale: R.merge(baseConfig.typeScale),
  borderWidth: R.defaultTo(baseConfig.borderWidth),
  lineHeightScale: R.merge(baseConfig.lineHeightScale),
};

/**
 * Converts a scale to rems
 */
function toRems(rem, type) {
  return R.compose(
    R.objOf(type),
    R.map(R.multiply(rem)),
    R.prop(type)
  );
}

/**
 * Convert the scale and typescale to rems
 */
function remScale(config) {
  return R.compose(
    R.merge(config),
    R.converge(R.merge, [
      toRems(config.rem, 'scale'),
      toRems(config.rem, 'typeScale'),
    ])
  )(config);
}

/**
 * Customize base config
 */
function extendConfig(options) {
  return R.mapObjIndexed((prop, type) =>
    prop(options[type]), extendOps);
}

/**
 * Generate the config
 */
export const getConfig = R.compose(
  remScale,
  extendConfig
);

/**
 * Build the styles
 */
const build = R.compose(
  R.converge(R.merge, [R.objOf('config'), generateStyleSheet]),
  getConfig,
);

export default build;
