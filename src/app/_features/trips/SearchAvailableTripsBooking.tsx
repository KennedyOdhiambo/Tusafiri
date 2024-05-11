'use client'
import DropdownSelect from '@/components/DropdownSelect'
import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/datepicker'
import { TripsContext } from '@/context/TripsContext'
import { ArrowLeftRight, Search } from 'lucide-react'
import { useContext, useState } from 'react'

type Props = {
  departure: Array<string>
  destinations: Array<string>
}

export default function SearchAvailableTripsBooking({ departure, destinations }: Props) {
  const tripsContext = useContext(TripsContext)
  const selectedDeparture = tripsContext?.departure
  const selectedDestination = tripsContext?.destination
  const selectedDate = tripsContext?.travelDate

  const [updatedDeparture, updateDeparture] = useState(selectedDeparture)
  const [updatedDestination, updateDestination] = useState(selectedDestination)
  const [updatedDate, updateDate] = useState<Date | undefined>(selectedDate)

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

  const handleDepartureChange = (departure: string) => {
    updateDeparture(departure)
  }
  const handleDestinationChange = (destination: string) => {
    updateDestination(destination)
  }
  const handleDateChange = (date: Date | undefined) => {
    updateDate(date)
  }

  const handleDeparture = () => {
    tripsContext?.setDeparture(updatedDeparture ?? '')
    tripsContext?.setDestination(updatedDestination ?? '')
    tripsContext?.setTravelDate(updatedDate)
    console.log('handleDeparture')
  }
  return (
    <div className="hidden lg:flex lg:flex-row lg:items-end lg:justify-center lg:gap-5">
      <div className="flex flex-row items-end  gap-8">
        <DropdownSelect
          placeholder={selectedDeparture}
          options={departureDropdownOptions}
          handleSelect={handleDepartureChange}
          label="Travelling From"
        />
        <div className=" inline-flex items-center rounded-full bg-card p-2  text-card-foreground ">
          <ArrowLeftRight />
        </div>
        <DropdownSelect
          placeholder={selectedDestination}
          options={destinationDropdownOptions}
          handleSelect={handleDestinationChange}
          label="Travelling To"
        />
      </div>

      <DatePicker initialDate={selectedDate} handleDateChange={handleDateChange} />
      <Button variant={'default'} size={'lg'} className=" inline-flex gap-4" onClick={handleDeparture}>
        <Search className=" size-4" />
        Find Bus
      </Button>
    </div>
  )
}
