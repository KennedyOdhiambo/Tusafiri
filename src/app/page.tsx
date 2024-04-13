import Image from 'next/image';
import heroImage from '../../public/heroImage.svg';
import SearchAvailableTrips from '@/features/trips/SearchAvailableTrips';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <main className="mt-12 min-h-screen">
      <div className="relative">
        <Image src={heroImage} alt="hero-image" priority height={600} />

        <div className="absolute inset-x-0 bottom-0 m-auto mx-auto w-full translate-y-60 transform md:translate-y-20 xl:translate-y-14">
          <SearchAvailableTrips />
        </div>
      </div>

      <div className="mt-64 flex w-full flex-col items-center p-6 md:mt-24 md:px-12 lg:mt-20 lg:px-20">
        <WhyChooseUs />
      </div>
    </main>
  );
}
