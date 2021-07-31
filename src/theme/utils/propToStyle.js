import breakpointsMedia from './breakpointsMedia';

export default function propToStyle(propName) {
  // eslint-disable-next-line consistent-return
  return (props) => {
    const propValue = props.cssinline[propName];

    if (typeof propValue === 'string') {
      return {
        [propName]: props.cssinline[propName],
      };
    }

    if (typeof propValue === 'object') {
      return breakpointsMedia({
        xs: {
          [propName]: propValue.xs,
        },
        sm: {
          [propName]: propValue.sm,
        },
        md: {
          [propName]: propValue.md,
        },
        lg: {
          [propName]: propValue.lg,
        },
        xl: {
          [propName]: propValue.xl,
        },
      });
    }
  };
}
