'use client'
import DropdownSelect from '@/components/DropdownSelect'
import { DatePicker } from '@/components/ui/datepicker'
import { TripsContext } from '@/context/TripsContext'
import { useContext, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

type Props = {
  departures: Array<string>
  destinations: Array<string>
}

export default function AvailableTripsDropdown({ departures, destinations }: Props) {
  const [selectedDeparture, setSelectedDeparture] = useState('')
  const [selectedDestination, setSelectedDstination] = useState('')
  const [selectedDate, setselectedDate] = useState<Date>()

  const tripsContext = useContext(TripsContext)
  const navigate = useRouter()

  const uniqueDepartures = Array.from(new Set(departures))
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
    setSelectedDeparture(departure)
  }

  const handleDestinationChange = (destination: string) => {
    setSelectedDstination(destination)
  }

  const handleSubmit = () => {
    tripsContext?.setDeparture(selectedDeparture)
    tripsContext?.setDestination(selectedDestination)
    tripsContext?.setTravelDate(selectedDate)
    navigate.push('/booking')
  }

  return (
    <>
      <div className="flex w-fit flex-col items-center gap-3 md:grid md:grid-cols-3 md:items-end xl:col-span-3">
        <DropdownSelect
          handleSelect={handleDepartureChange}
          label="Travelling From"
          options={departureDropdownOptions}
        />
        <DropdownSelect
          handleSelect={handleDestinationChange}
          label="Travelling To"
          options={destinationDropdownOptions}
        />
        <DatePicker handleDateChange={(date) => setselectedDate(date)} />
      </div>
      <div className="mt-2 w-[240px] self-end xl:w-[180px] xl:justify-self-end">
        <Button
          variant={'default'}
          disabled={!selectedDeparture && !selectedDestination && !selectedDate}
          className="w-full"
          onClick={handleSubmit}
        >
          Find Bus
        </Button>
      </div>
    </>
  )
}
