'use client'

import { useState, useEffect, useRef } from 'react'
import { MapPin, Search, X, Navigation } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface AddressMapPickerProps {
  value: string
  onChange: (address: string, coordinates?: { lat: number; lng: number }) => void
  onCoordinatesChange?: (coordinates: { lat: number; lng: number }) => void
}

export default function AddressMapPicker({
  value,
  onChange,
  onCoordinatesChange,
}: AddressMapPickerProps) {
  const { language } = useLanguage()
  const [showMap, setShowMap] = useState(false)
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  // Default to Dar es Salaam, Tanzania
  const defaultCenter = { lat: -6.7924, lng: 39.2083 }

  // Simple geocoding using OpenStreetMap Nominatim (free, no API key needed)
  const geocodeAddress = async (address: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          address + ', Tanzania'
        )}&limit=1`,
        {
          headers: {
            'User-Agent': 'KingoPestControl/1.0',
          },
        }
      )
      const data = await response.json()
      if (data && data.length > 0) {
        const result = data[0]
        const coords = {
          lat: parseFloat(result.lat),
          lng: parseFloat(result.lon),
        }
        setCoordinates(coords)
        if (onCoordinatesChange) {
          onCoordinatesChange(coords)
        }
        setIsLoading(false)
        return coords
      }
    } catch (error) {
      console.error('Geocoding error:', error)
    }
    setIsLoading(false)
    return null
  }

  const reverseGeocode = async (coords: { lat: number; lng: number }) => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`,
        {
          headers: {
            'User-Agent': 'KingoPestControl/1.0',
          },
        }
      )
      const data = await response.json()
      if (data && data.display_name) {
        onChange(data.display_name, coords)
        if (onCoordinatesChange) {
          onCoordinatesChange(coords)
        }
      }
    } catch (error) {
      console.error('Reverse geocoding error:', error)
    }
    setIsLoading(false)
  }

  // Remove updateMapMarker - we'll use React state instead

  const handleSearch = async () => {
    if (!searchQuery.trim()) return
    const coords = await geocodeAddress(searchQuery)
    if (coords) {
      setShowMap(true)
    } else {
      alert(
        language === 'en'
          ? 'Address not found. Please try a different address or use the map to pin your location.'
          : 'Anwani haijapatikana. Tafadhali jaribu anwani nyingine au tumia ramani kuweka alama ya eneo lako.'
      )
    }
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      setIsLoading(true)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          setCoordinates(coords)
          reverseGeocode(coords)
          setShowMap(true)
          setIsLoading(false)
        },
        (error) => {
          console.error('Geolocation error:', error)
          alert(
            language === 'en'
              ? 'Unable to get your location. Please enter an address or use the map.'
              : 'Haiwezekani kupata eneo lako. Tafadhali ingiza anwani au tumia ramani.'
          )
          setIsLoading(false)
        }
      )
    } else {
      alert(
        language === 'en'
          ? 'Geolocation is not supported by your browser.'
          : 'Eneo halitumiki na kivinjari chako.'
      )
    }
  }

  return (
    <div className="space-y-4">
      {/* Address Input */}
      <div className="flex space-x-2">
        <div className="flex-1">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={
              language === 'en'
                ? 'Enter service address or click map to pin location'
                : 'Ingiza anwani ya huduma au bofya ramani ili kuweka alama'
            }
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
          />
        </div>
        <button
          type="button"
          onClick={() => setShowMap(!showMap)}
          className="px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center space-x-2"
        >
          <MapPin size={20} />
          <span className="hidden sm:inline">
            {showMap
              ? language === 'en'
                ? 'Hide Map'
                : 'Ficha Ramani'
              : language === 'en'
              ? 'Show Map'
              : 'Onyesha Ramani'}
          </span>
        </button>
      </div>

      {/* Map Container */}
      {showMap && (
        <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex-1 flex items-center space-x-2">
                <Search size={20} className="text-gray-500 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      handleSearch()
                    }
                  }}
                  placeholder={
                    language === 'en'
                      ? 'Search for an address in Tanzania...'
                      : 'Tafuta anwani nchini Tanzania...'
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleSearch}
                  disabled={isLoading}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold disabled:opacity-50"
                >
                  {isLoading
                    ? language === 'en'
                      ? 'Searching...'
                      : 'Inatafuta...'
                    : language === 'en'
                    ? 'Search'
                    : 'Tafuta'}
                </button>
              </div>
              <button
                type="button"
                onClick={getCurrentLocation}
                disabled={isLoading}
                className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors text-sm font-semibold flex items-center space-x-2 disabled:opacity-50"
              >
                <Navigation size={16} />
                <span>{language === 'en' ? 'My Location' : 'Eneo Langu'}</span>
              </button>
              <button
                type="button"
                onClick={() => setShowMap(false)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors flex-shrink-0"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <div
            ref={mapContainerRef}
            className="w-full h-96 bg-gray-200 relative"
            style={{ minHeight: '400px' }}
          >
            {!coordinates ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2 text-gray-400" />
                  <p className="text-sm">
                    {language === 'en'
                      ? 'Search for an address or use "My Location"'
                      : 'Tafuta anwani au tumia "Eneo Langu"'}
                  </p>
                </div>
              </div>
            ) : (
              <iframe
                key={`${coordinates.lat}-${coordinates.lng}`}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${coordinates.lng - 0.01},${coordinates.lat - 0.01},${coordinates.lng + 0.01},${coordinates.lat + 0.01}&layer=mapnik&marker=${coordinates.lat},${coordinates.lng}`}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                title="Location Map"
              />
            )}
          </div>
          <div className="bg-gray-50 p-3 text-sm text-gray-600 border-t border-gray-200">
            <p className="flex items-center space-x-2">
              <MapPin size={16} className="text-primary" />
              <span>
                {language === 'en'
                  ? 'Click on the map to set your service location, search for an address, or use "My Location" to get your current position.'
                  : 'Bofya kwenye ramani ili kuweka eneo la huduma yako, tafuta anwani, au tumia "Eneo Langu" ili kupata nafasi yako ya sasa.'}
              </span>
            </p>
            {coordinates && (
              <p className="mt-2 text-xs text-gray-500">
                {language === 'en' ? 'Coordinates: ' : 'Kuratibu: '}
                {coordinates.lat.toFixed(6)}, {coordinates.lng.toFixed(6)}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
