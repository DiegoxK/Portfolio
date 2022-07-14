function Svg({ size, className, path, width }) {
  return (
    <svg
      width={width ? size + width : size ? size : 24}
      height={size ? size : 24}
      className={className}
      viewBox="0 0 16 16"
    >
      {path}
    </svg>
  );
}

export default Svg;
