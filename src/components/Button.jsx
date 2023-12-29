import { cn } from '@common/index';

/**
 * @param {HTMLButtonElement} props
 */
function Button({
  children, type, className, ...otherProps
}) {
  return <button className={cn('bg-lunar-green font-semibold uppercase text-pampas text-sm py-1 px-4 hover:text-lunar-green hover:bg-transparent border-lunar-green border-solid border-2', className)} type={type} {...otherProps}>{children}</button>;
}

export default Button;
