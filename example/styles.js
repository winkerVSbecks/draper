import draper from '../dist';
import { StyleSheet } from 'react-native';

export default {
  ...StyleSheet.create({
    myCustomClass: { color: 'magenta' },
    o0: { opacity: 0 },
    o10: { opacity: 0.1 },
    o20: { opacity: 0.2 },
    o30: { opacity: 0.3 },
    o40: { opacity: 0.4 },
    o50: { opacity: 0.5 },
    o60: { opacity: 0.6 },
    o70: { opacity: 0.7 },
    o80: { opacity: 0.8 },
    o90: { opacity: 0.9 },
    o100: { opacity: 1 },
  }),
  ...draper(),
};
