import { cn } from '@common/index';
import Anchor from '@components/Anchor';
import Button from '@components/Button';
import Drawer from '@components/Drawer';
import { IconShoppingBag, IconTag, IconX } from '@tabler/icons-react';
import { useState } from 'react';

function Layout({ children }) {
  const [isCampaignClosed, setIsCampaignClosed] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const onCampaignCloseClick = () => {
    setIsCampaignClosed(true);
  };
  const onCartIconClick = () => {
    setIsCartOpen(true);
  };
  const onCloseCartDrawer = () => {
    setIsCartOpen(false);
  };

  return (
    <section>
      <div className={cn('bg-lunar-green text-pampas text-xs p-2 flex justify-between', {
        hidden: isCampaignClosed,
      })}
      >
        <div />
        <div>
          Ending soon:
          <a className="underline" href="/"> Save 10% on our top-rated office chairs </a>
          with code
          <p className="inline font-bold uppercase"> Holiday </p>
          and enjoy free shipping.
        </div>
        <IconX onClick={onCampaignCloseClick} className="cursor-pointer" size={14} />
      </div>
      <div className="flex justify-between mx-9 my-1.5 text-sm font-bold text-lunar-green">
        <Anchor href="/">For Teams</Anchor>
        <div className="flex gap-5">
          <Anchor href="/">Get 20$</Anchor>
          <Anchor href="/">Ergonomics 101</Anchor>
          <Anchor href="/">Resources</Anchor>
          <Anchor href="/">$USD</Anchor>
        </div>
      </div>
      <div className="sticky z-10 bg-white top-0 flex justify-between items-center px-9 h-18 border-y-solid border-y-lunar-green/40 border-y shadow">
        <div className="flex gap-8 items-center">
          <img className="h-8 mb-2" src="/src/assets/branch-logo.png" alt="Branch logo" />
          <nav className="flex gap-8 hover:*:underline-offset-28 *:uppercase *:font-semibold *:text-sm">
            <Anchor>Shop By</Anchor>
            <Anchor>Chairs</Anchor>
            <Anchor>Desks</Anchor>
            <Anchor>Accessories</Anchor>
            <Anchor>Workplace</Anchor>
            <Anchor>Bundles</Anchor>
            <Anchor>Sale</Anchor>
          </nav>
        </div>
        <div className="flex justify-between items-center gap-8">
          <Button>Design My Office</Button>
          <IconShoppingBag onClick={onCartIconClick} className="cursor-pointer" color="#314438" />
          <Drawer isOpen={isCartOpen}>
            <div className="flex justify-between py-4 px-6 items-center bg-lunar-green">
              <p className="text-pampas font-bold">{'My Office'.toUpperCase()}</p>
              <IconX className="text-pampas cursor-pointer" onClick={onCloseCartDrawer} />
            </div>
            <div className="text-lunar-green mt-8 flex flex-col items-center gap-2">
              <IconTag />
              <p className="font-light text-sm">Your cart is empty.</p>
              <Button className="mt-4 px-10 py-3">Start Shopping</Button>
            </div>
          </Drawer>
        </div>
      </div>
      <main>
        {children}
      </main>
    </section>
  );
}

export default Layout;
