import { cn } from '@common/index';

/**
 * @param {import('react').AnchorHTMLAttributes} props
 */
function Anchor({ children, className, ...otherProps }) {
  return <a className={cn('hover:underline hover:decoration-half-baked hover:decoration-3 hover:underline-offset-4 cursor-pointer', className)} {...otherProps}>{children}</a>;
}

export default Anchor;
