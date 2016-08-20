import React, { PropTypes } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import s from './styles';
const { lineHeightScale: lhScale, typeScale: tScale } = s.config;

const textPropTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

/**
 * Lead Paragraph Text
 */
export function Lead({ style = [], ...props }) {
  return (
    <Text style={[ s.black, styles.lead, ...style ]} { ...props } />
  );
}
Lead.propTypes = textPropTypes;

/**
 * Body Text
 */
export function Body({ style = [], ...props }) {
  return (
    <Text style={[ s.black, styles.p, ...style ]} {...props } />
  );
}
Body.propTypes = textPropTypes;

/**
 * Headings h1 - h6
 * 	h1 - h4 has lineHeight level 2
 * 	h5 - h6 has lineHeight level 1
 */
export function Heading1({ style = [], ...props }) {
  return (
    <Text style={[ s.black, styles.h1, ...style ]} { ...props } />
  );
}
Heading1.propTypes = textPropTypes;

export function Heading2({ style = [], ...props }) {
  return (
    <Text style={[ s.black, styles.h2, ...style ]} { ...props } />
  );
}
Heading2.propTypes = textPropTypes;

export function Heading3({ style = [], ...props }) {
  return (
    <Text style={[ s.black, styles.h3, ...style ]} { ...props } />
  );
}
Heading3.propTypes = textPropTypes;

export function Heading4({ style = [], ...props }) {
  return (
    <Text style={[ s.black, styles.h4, ...style ]} { ...props } />
  );
}
Heading4.propTypes = textPropTypes;

export function Heading5({ style = [], ...props }) {
  return (
    <Text style={[ s.black, styles.h5, ...style ]} { ...props } />
  );
}
Heading5.propTypes = textPropTypes;

export function Heading6({ style = [], ...props }) {
  return (
    <Text style={[ s.black, styles.h6, ...style ]} { ...props } />
  );
}
Heading6.propTypes = textPropTypes;

/**
 * Utils
 */
function normalize(scale, size) {
  return Math.round(scale * size);
}

/**
 * Text Styles
 * font size and line height pairings
 */
const styles = StyleSheet.create({
  h1: {
    fontSize: tScale.f1,
    lineHeight: normalize(lhScale.title, tScale.f1),
  },
  h2: {
    fontSize: tScale.f2,
    lineHeight: normalize(lhScale.title, tScale.f2),
  },
  h3: {
    fontSize: tScale.f3,
    lineHeight: normalize(lhScale.title, tScale.f3),
  },
  h4: {
    fontSize: tScale.f4,
    lineHeight: normalize(lhScale.title, tScale.f4),
  },
  h5: {
    fontSize: tScale.f5,
    lineHeight: normalize(lhScale.solid, tScale.f5),
  },
  h6: {
    fontSize: tScale.f6,
    lineHeight: normalize(lhScale.solid, tScale.f6),
  },
  p: {
    fontSize: tScale.f4,
    lineHeight: normalize(lhScale.copy, tScale.f4),
  },
  lead: {
    fontSize: tScale.f2,
    lineHeight: normalize(lhScale.copy, tScale.f2),
  },
});
