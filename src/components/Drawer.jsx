import { cn } from '@common/index';

/**
 * @param {HTMLSectionElement} props
 */
function Drawer({
  children, isOpen, className, ...otherProps
}) {
  return (
    <section className={cn('fixed top-0 w-96 shadow-lg transition-all bg-white h-full block', { 'right-0': isOpen }, { '-right-96': !isOpen }, className)} {...otherProps}>
      {children}
    </section>
  );
}

export default Drawer;
