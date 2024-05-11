'use client'
import DropdownSelect from '@/components/DropdownSelect'
import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/datepicker'
import { formatDate } from '@/lib/utils'
import { ArrowLeftRight, Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

type Props = {
  departure: Array<string>
  destinations: Array<string>
}

export default function SearchAvailableTripsBooking({ departure, destinations }: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()

  const [updatedDeparture, updateDeparture] = useState(searchParams.get('from'))
  const [updatedDestination, updateDestination] = useState(searchParams.get('to'))
  const [updatedDate, updateDate] = useState<Date | undefined>(new Date(searchParams.get('date') ?? ''))

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
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    current.set('from', updatedDeparture!)
    current.set('to', updatedDestination!)
    current.set('date', formatDate(updatedDate!))
    const search = current.toString()
    const query = search ? `${search}` : ''
    router.push(`${pathName}?${query}`)
  }
  return (
    <div className="hidden lg:flex lg:flex-row lg:items-end lg:justify-center lg:gap-5">
      <div className="flex flex-row items-end  gap-8">
        <DropdownSelect
          placeholder={updatedDeparture ?? ''}
          options={departureDropdownOptions}
          handleSelect={handleDepartureChange}
          label="Travelling From"
        />
        <div className=" inline-flex items-center rounded-full bg-card p-2  text-card-foreground ">
          <ArrowLeftRight />
        </div>
        <DropdownSelect
          placeholder={updatedDestination ?? ''}
          options={destinationDropdownOptions}
          handleSelect={handleDestinationChange}
          label="Travelling To"
        />
      </div>

      <DatePicker initialDate={updatedDate} handleDateChange={handleDateChange} />
      <Button variant={'default'} size={'lg'} className=" inline-flex gap-4" onClick={handleDeparture}>
        <Search className=" size-4" />
        Find Bus
      </Button>
    </div>
  )
}
