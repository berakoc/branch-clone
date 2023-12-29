import Button from '@components/Button';
import { IconBrandAdobe, IconBrandAirbnb, IconBrandApple } from '@tabler/icons-react';

function Home() {
  return (
    <main>
      <div className="relative">
        <img src="/src/assets/hero-image.webp" alt="Hero" />
        <div className="absolute top-36 left-40 w-410 text-lunar-green">
          <h1 className="text-5xl">
            Last Chance For
            {' '}
            <u className="decoration-half-baked">Holiday Savings</u>
          </h1>
          <p className="mt-8 text-lg">Save 10% on our bestselling office chairs for the holidays—and get free shipping.</p>
          <Button className="py-4 uppercase mt-10 w-10/12">Shop Now</Button>
        </div>
        <div className="bg-lunar-green px-56 text-center text-pampas flex flex-col gap-4 items-center py-8">
          <div className="text-lg uppercase font-semibold">Press</div>
          <h2 className="text-3xl font-serif mx-24">Branch&apos;s affordable, well-made chairs are a major upgrade on their sad swivel counterparts.</h2>
          <div className="flex gap-10">
            <div className="flex gap-1 items-center cursor-pointer">
              <IconBrandAdobe size={36} />
              <p className="text-xl">Adobe</p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer">
              <IconBrandAirbnb size={36} />
              <p className="text-xl">Airbnb</p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer">
              <IconBrandApple size={28} />
              <p className="text-xl">Apple</p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer">
              <IconBrandAdobe size={36} />
              <p className="text-xl">Adobe</p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer">
              <IconBrandAirbnb size={36} />
              <p className="text-xl">Airbnb</p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer">
              <IconBrandApple size={28} />
              <p className="text-xl">Apple</p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer">
              <IconBrandAdobe size={36} />
              <p className="text-xl">Adobe</p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer mt-4">
              <IconBrandAirbnb size={36} />
              <p className="text-xl">Airbnb</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
