'use client'
import DropdownSelect from '@/components/DropdownSelect'
import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/datepicker'
import { TripsContext } from '@/context/TripsContext'
import { ArrowLeftRight, Search } from 'lucide-react'
import { useContext } from 'react'

type Props = {
  departure: Array<string>
  destinations: Array<string>
}

export default function SearchAvailableTripsBooking({ departure, destinations }: Props) {
  const tripsContext = useContext(TripsContext)
  const selectedDeparture = tripsContext?.departure
  const selectedDestination = tripsContext?.destination
  const selectedDate = tripsContext?.travelDate

  const uniqueDepartures = Array.from(new Set(departure))
  const departureDropdownOptions = uniqueDepartures.map((departure) => ({
    value: departure,
    text: departure,
  }))

  const uniqueDestinations = Array.from(new Set(destinations))
  const destinationDropdownOptions = uniqueDestinations.map((destination) => ({
    value: destination,
    text: destination,
  }))
  return (
    <div className="hidden lg:flex lg:flex-row lg:items-end lg:justify-center lg:gap-5">
      <div className="flex flex-row items-end  gap-8">
        <DropdownSelect
          placeholder={selectedDeparture}
          options={departureDropdownOptions}
          handleSelect={() => console.log('selected')}
          label="Travelling From"
        />
        <div className=" inline-flex items-center rounded-full bg-card p-2  text-card-foreground ">
          <ArrowLeftRight />
        </div>
        <DropdownSelect
          placeholder={selectedDestination}
          options={destinationDropdownOptions}
          handleSelect={() => console.log('selected')}
          label="Travelling To"
        />
      </div>

      <DatePicker initialDate={selectedDate} />
      <Button variant={'default'} size={'lg'} className=" inline-flex gap-4">
        <Search className=" size-4" />
        Find Bus
      </Button>
    </div>
  )
}
