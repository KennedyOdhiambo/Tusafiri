import Image from 'next/image';
import nairobi from '../../public/nairobi.webp';
import kisumu from '../../public/kisumu.webp';
import nakuru from '../../public/nakuru.webp';
import mombasa from '../../public/mombasa.webp';
import eldoret from '../../public/eldoret.webp';

export default function TopTravelledRoutes() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold tracking-wide ">
        Our Top <span className="text-red-400">Destinations</span>
      </h1>

      <div className="grid grid-cols-5 gap-2 md:gap-3.5 lg:gap-5">
        <Image
          src={nairobi}
          alt="nairobi"
          className="cursor-pointer rounded-2xl transition-opacity duration-200 hover:opacity-70"
        />
        <Image
          src={kisumu}
          alt="kisumu"
          className="cursor-pointer rounded-2xl transition-opacity duration-200 hover:opacity-70"
        />
        <Image
          src={mombasa}
          alt="mombasa"
          className="cursor-pointer rounded-2xl transition-opacity duration-200 hover:opacity-70"
        />
        <Image
          src={eldoret}
          alt="eldoret"
          className="cursor-pointer rounded-2xl transition-opacity duration-200 hover:opacity-70"
        />
        <Image
          src={nakuru}
          alt="nakuru"
          className=" cursor-pointer rounded-2xl transition-opacity duration-200 hover:opacity-70"
        />
      </div>
    </div>
  );
}
