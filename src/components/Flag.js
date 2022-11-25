

const Flag = ({className, color, children}) => {
  return <span className={`flag flag--${color} ${className}`}>{children}</span>
}

export default Flag;