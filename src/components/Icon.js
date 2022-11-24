const Icon = ({ className, icon }) => {
  return (
    <svg className={`icon ${className ? className : ""}`}>
      <use href={`./img/sprite.svg#${icon}`}></use>
    </svg>
  );
};

export default Icon;
