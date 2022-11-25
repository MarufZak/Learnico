import Icon from "./Icon";


const Button = ({className,color,children,icon, iconClassName}) => {
  return <button className={`btn btn--${color} ${className} ${icon && 'btn--icon'}`}>
    {children}
    {icon && <Icon className={iconClassName} icon={icon} />}
    </button>
}

export default Button;