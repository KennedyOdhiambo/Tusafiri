import Image from 'next/image';
import heroImage from '../../public/heroImage.svg';
import SearchAvailableTrips from '@/features/trips/SearchAvailableTrips';
import WhyChooseUs from '@/components/WhyChooseUs';
import TopTravelledRoutes from '@/components/TopTravelledRoutes';

export default function Home() {
  return (
    <main className="mt-12 flex min-h-screen flex-col gap-5">
      <Image src={heroImage} alt="hero-image" priority height={420} width={1440} className="hero-image mt-5" />
      <div className="flex flex-col gap-10 md:gap-16 lg:gap-20">
        <SearchAvailableTrips />
        <div className=" flex flex-col gap-10 px-8 md:gap-16 lg:gap-20">
          <WhyChooseUs />
          <TopTravelledRoutes />
        </div>
      </div>
    </main>
  );
}
