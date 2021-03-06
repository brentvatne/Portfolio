import React, { ClassAttributes } from 'react';
import { createElement, StyleSheet, Text } from 'react-native';
import { material, materialColors } from 'react-native-typography';

import { useREM } from 'react-native-web-hooks';
import CustomAppearanceContext from '../context/CustomAppearanceContext';

const getTextStyle = name => {
  const { isDark } = React.useContext(CustomAppearanceContext);
  return {
    ...material[`${name}${isDark ? 'White' : ''}`],
    color: materialColors[`${isDark ? 'white' : 'black'}Primary`],
  };
};

const Header = level =>
  React.forwardRef((props, ref: ClassAttributes<Text>['ref']) => (
    <Text
      aria-level={`${level}`}
      accessibilityRole="header"
      {...props}
      ref={ref}
    />
  ));

const Header2 = Header(2);

const Header4 = Header(4);

export const H2 = ({ style, ...props }: any) => {
  return (
    <Header2
      style={[getTextStyle('display2'), styles.header, style]}
      {...props}
    />
  );
};

export const H4 = ({ style, ...props }: any) => {
  return (
    <Header4 style={[getTextStyle('title'), styles.h4, style]} {...props} />
  );
};

export const P = ({ style, ...props }: any) => {
  return (
    <Text style={[styles.paragraph, getTextStyle('body1'), style]} {...props} />
  );
};

export const B = ({ style, ...props }: any) => (
  <Text
    style={[
      styles.paragraph,
      getTextStyle('body1'),
      { fontWeight: 'bold' },
      style,
    ]}
    {...props}
  />
);

export const UnorderedList: any = React.forwardRef((props, ref) =>
  createElement('ul', { ...props, ref })
);

export const ListItem = React.forwardRef((props, ref) =>
  createElement('li', { ...props, ref })
);

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: useREM(3),

    marginBottom: 24,
  },
  h2: {},
  h4: {
    marginVertical: 10,
  },
  li: {
    fontSize: 16,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 24,
  },
});
