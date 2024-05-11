import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function SearchButton() {
  return (
    <Link href={'/booking'} className="mt-2 w-[240px] self-end xl:w-[180px] xl:justify-self-end">
      <Button variant={'default'} className="w-full">
        Find Bus
      </Button>
    </Link>
  );
}
