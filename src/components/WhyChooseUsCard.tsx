import Image from 'next/image';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';

type WhyUsCardProps = {
  imageSrc: string;
  heading: string;
  description: string;
};
export default function WhyUsCard({ imageSrc, heading, description }: WhyUsCardProps) {
  return (
    <Card className="flex items-center justify-start bg-none py-5 shadow-md">
      <CardContent className="inline-flex items-center justify-center gap-3 pb-0">
        <Image src={imageSrc} alt={imageSrc} width={60} height={40} />
        <div className="flex flex-col gap-1.5">
          <CardTitle>{heading}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
