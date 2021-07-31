import propToStyle from './propToStyle';

export default function cssInline() {
  // eslint-disable-next-line consistent-return
  return ({ cssinline }) => {
    if (cssinline) {
      const propertyCss = Object.keys(cssinline);
      return propertyCss.map((itemCss) => propToStyle(itemCss));
    }
  };
}
