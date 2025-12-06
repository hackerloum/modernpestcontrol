'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Megaphone, 
  Calendar, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff,
  LogOut,
  Settings,
  BarChart3,
  Menu,
  X,
  Home,
  Users,
  Bell,
  Search,
  Filter,
  Download,
  CheckCircle2,
  Clock,
  XCircle,
  MapPin,
  LayoutDashboard,
  User,
  Shield
} from 'lucide-react'

interface Advertisement {
  id: string
  title: string
  message: string
  isActive: boolean
  createdAt: string
}

interface Booking {
  id: string
  name: string
  email: string
  phone: string
  serviceType: string
  message: string
  address?: string
  coordinates?: { lat: number; lng: number }
  date: string
  time: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: string
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState<'dashboard' | 'bookings' | 'ads' | 'settings' | 'profile'>('dashboard')
  const [ads, setAds] = useState<Advertisement[]>([])
  const [bookings, setBookings] = useState<Booking[]>([])
  const [showAdForm, setShowAdForm] = useState(false)
  const [editingAd, setEditingAd] = useState<Advertisement | null>(null)
  const [adForm, setAdForm] = useState({ title: '', message: '', isActive: true })
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [profileData, setProfileData] = useState({
    name: 'Admin User',
    email: 'admin@kingopestcontrol.co.tz',
    phone: '+255 616 041 390',
    role: 'Administrator',
  })

  // Admin password (in production, use proper authentication)
  const ADMIN_PASSWORD = 'kingopest2024'

  useEffect(() => {
    // Check if already authenticated
    const authStatus = localStorage.getItem('admin_authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }

    // Load data from localStorage
    loadAds()
    loadBookings()

    // Listen for storage changes to refresh bookings
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'admin_bookings') {
        loadBookings()
      }
      if (e.key === 'admin_ads') {
        loadAds()
      }
    }

    window.addEventListener('storage', handleStorageChange)

    // Also poll for changes (in case same window)
    const interval = setInterval(() => {
      loadBookings()
      loadAds()
    }, 2000) // Check every 2 seconds

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [])

  const loadAds = () => {
    const savedAds = localStorage.getItem('admin_ads')
    if (savedAds) {
      setAds(JSON.parse(savedAds))
    }
  }

  const loadBookings = () => {
    try {
      const savedBookings = localStorage.getItem('admin_bookings')
      if (savedBookings) {
        const parsed = JSON.parse(savedBookings)
        // Ensure it's an array
        if (Array.isArray(parsed)) {
          setBookings(parsed)
        } else {
          setBookings([])
        }
      } else {
        setBookings([])
      }
    } catch (error) {
      console.error('Error loading bookings:', error)
      setBookings([])
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem('admin_authenticated', 'true')
      setPassword('')
    } else {
      alert('Incorrect password')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('admin_authenticated')
  }

  const saveAds = (newAds: Advertisement[]) => {
    setAds(newAds)
    localStorage.setItem('admin_ads', JSON.stringify(newAds))
  }

  const handleSaveAd = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingAd) {
      // Update existing ad
      const updatedAds = ads.map(ad => 
        ad.id === editingAd.id 
          ? { ...ad, ...adForm, updatedAt: new Date().toISOString() }
          : ad
      )
      saveAds(updatedAds)
      setEditingAd(null)
    } else {
      // Create new ad
      const newAd: Advertisement = {
        id: Date.now().toString(),
        ...adForm,
        createdAt: new Date().toISOString(),
      }
      saveAds([...ads, newAd])
    }
    setAdForm({ title: '', message: '', isActive: true })
    setShowAdForm(false)
  }

  const handleDeleteAd = (id: string) => {
    if (confirm('Are you sure you want to delete this advertisement?')) {
      saveAds(ads.filter(ad => ad.id !== id))
    }
  }

  const handleToggleAdStatus = (id: string) => {
    const updatedAds = ads.map(ad =>
      ad.id === id ? { ...ad, isActive: !ad.isActive } : ad
    )
    saveAds(updatedAds)
  }

  const handleEditAd = (ad: Advertisement) => {
    setEditingAd(ad)
    setAdForm({ title: ad.title, message: ad.message, isActive: ad.isActive })
    setShowAdForm(true)
  }

  const updateBookingStatus = (id: string, status: Booking['status']) => {
    const updatedBookings = bookings.map(booking =>
      booking.id === id ? { ...booking, status } : booking
    )
    setBookings(updatedBookings)
    localStorage.setItem('admin_bookings', JSON.stringify(updatedBookings))
  }

  const handleDeleteBooking = (id: string) => {
    if (confirm('Are you sure you want to delete this booking?')) {
      const updatedBookings = bookings.filter(booking => booking.id !== id)
      setBookings(updatedBookings)
      localStorage.setItem('admin_bookings', JSON.stringify(updatedBookings))
    }
  }

  // Statistics
  const stats = {
    totalAds: ads.length,
    activeAds: ads.filter(ad => ad.isActive).length,
    totalBookings: bookings.length,
    pendingBookings: bookings.filter(b => b.status === 'pending').length,
    confirmedBookings: bookings.filter(b => b.status === 'confirmed').length,
    completedBookings: bookings.filter(b => b.status === 'completed').length,
    cancelledBookings: bookings.filter(b => b.status === 'cancelled').length,
  }

  // Filter bookings
  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.phone.includes(searchQuery) ||
      booking.serviceType.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h1>
            <p className="text-gray-600">Enter password to access admin dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                placeholder="Enter admin password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 bg-white shadow-2xl transition-all duration-300 ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-primary">Kingo Admin</h1>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'dashboard'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <LayoutDashboard size={20} />
              {sidebarOpen && <span className="font-semibold">Dashboard</span>}
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'bookings'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Calendar size={20} />
              {sidebarOpen && <span className="font-semibold">Bookings</span>}
            </button>
            <button
              onClick={() => setActiveTab('ads')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'ads'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Megaphone size={20} />
              {sidebarOpen && <span className="font-semibold">Manage Ads</span>}
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'settings'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Settings size={20} />
              {sidebarOpen && <span className="font-semibold">Settings</span>}
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'profile'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <User size={20} />
              {sidebarOpen && <span className="font-semibold">Profile</span>}
            </button>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut size={20} />
              {sidebarOpen && <span className="font-semibold">Logout</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Top Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {activeTab === 'dashboard' && 'Dashboard Overview'}
                  {activeTab === 'bookings' && 'Bookings Management'}
                  {activeTab === 'ads' && 'Advertisements Management'}
                  {activeTab === 'settings' && 'Settings'}
                  {activeTab === 'profile' && 'Profile'}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {activeTab === 'dashboard' && 'View statistics and overview of your business'}
                  {activeTab === 'bookings' && 'Manage and track customer bookings'}
                  {activeTab === 'ads' && 'Create and manage advertisements'}
                  {activeTab === 'settings' && 'Configure system settings and preferences'}
                  {activeTab === 'profile' && 'Manage your profile information'}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary w-64"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {activeTab === 'bookings' ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase">Total Bookings</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalBookings}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase">Pending</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stats.pendingBookings}</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase">Completed</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stats.completedBookings}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase">Confirmed</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stats.confirmedBookings}</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase">Total Ads</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalAds}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Megaphone className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 uppercase">Active Ads</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stats.activeAds}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {activeTab === 'bookings' && (
              <div className="p-6">
                {/* Filters */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                  <div className="flex items-center space-x-3">
                    <Filter size={20} className="text-gray-500" />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="all">All Status</option>
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                  <button
                    onClick={loadBookings}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <BarChart3 size={18} />
                    <span>Refresh</span>
                  </button>
                </div>

                {/* Bookings Table */}
                {filteredBookings.length === 0 ? (
                  <div className="text-center py-16">
                    <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-lg font-semibold text-gray-700 mb-2">No bookings found</p>
                    <p className="text-sm text-gray-500">
                      {bookings.length === 0 
                        ? 'Bookings will appear here when customers submit the booking form.'
                        : 'No bookings match your search criteria.'}
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Customer</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Service</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date & Time</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Contact</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredBookings.map((booking) => (
                          <motion.tr
                            key={booking.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <p className="text-sm font-semibold text-gray-900">{booking.name}</p>
                                {booking.address && (
                                  <p className="text-xs text-gray-500 mt-1 flex items-center">
                                    <MapPin size={12} className="mr-1" />
                                    {booking.address.length > 40 ? booking.address.substring(0, 40) + '...' : booking.address}
                                  </p>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm text-gray-900 capitalize">{booking.serviceType}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <p className="text-sm text-gray-900">{booking.date}</p>
                              <p className="text-xs text-gray-500">{booking.time}</p>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <p className="text-sm text-gray-900">{booking.email}</p>
                              <p className="text-xs text-gray-500">{booking.phone}</p>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <select
                                value={booking.status}
                                onChange={(e) =>
                                  updateBookingStatus(booking.id, e.target.value as Booking['status'])
                                }
                                className={`px-3 py-1 rounded-full text-xs font-semibold border-0 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                                  booking.status === 'pending'
                                    ? 'bg-orange-100 text-orange-700 focus:ring-orange-500'
                                    : booking.status === 'confirmed'
                                    ? 'bg-blue-100 text-blue-700 focus:ring-blue-500'
                                    : booking.status === 'completed'
                                    ? 'bg-green-100 text-green-700 focus:ring-green-500'
                                    : 'bg-red-100 text-red-700 focus:ring-red-500'
                                }`}
                              >
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="completed">Completed</option>
                                <option value="cancelled">Cancelled</option>
                              </select>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handleDeleteBooking(booking.id)}
                                  className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded-lg transition-colors"
                                  title="Delete"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'ads' && (
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Advertisements</h3>
                  <button
                    onClick={() => {
                      setEditingAd(null)
                      setAdForm({ title: '', message: '', isActive: true })
                      setShowAdForm(true)
                    }}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-lg"
                  >
                    <Plus size={20} />
                    <span>Add New Ad</span>
                  </button>
                </div>

                {/* Ad Form */}
                {showAdForm && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-primary"
                  >
                    <h4 className="text-lg font-bold mb-4">
                      {editingAd ? 'Edit Advertisement' : 'Create New Advertisement'}
                    </h4>
                    <form onSubmit={handleSaveAd} className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Title
                        </label>
                        <input
                          type="text"
                          value={adForm.title}
                          onChange={(e) => setAdForm({ ...adForm, title: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                          placeholder="e.g., Special Offer!"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Message
                        </label>
                        <textarea
                          value={adForm.message}
                          onChange={(e) => setAdForm({ ...adForm, message: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                          rows={4}
                          placeholder="Enter advertisement message..."
                          required
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="isActive"
                          checked={adForm.isActive}
                          onChange={(e) => setAdForm({ ...adForm, isActive: e.target.checked })}
                          className="w-4 h-4 text-primary rounded focus:ring-primary"
                        />
                        <label htmlFor="isActive" className="text-sm font-semibold text-gray-700">
                          Active (Show on website)
                        </label>
                      </div>
                      <div className="flex space-x-3">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                        >
                          {editingAd ? 'Update' : 'Create'} Advertisement
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setShowAdForm(false)
                            setEditingAd(null)
                            setAdForm({ title: '', message: '', isActive: true })
                          }}
                          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* Ads List */}
                <div className="space-y-4">
                  {ads.length === 0 ? (
                    <div className="text-center py-16">
                      <Megaphone className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                      <p className="text-lg font-semibold text-gray-700 mb-2">No advertisements yet</p>
                      <p className="text-sm text-gray-500">Create your first advertisement to get started!</p>
                    </div>
                  ) : (
                    ads.map((ad) => (
                      <motion.div
                        key={ad.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-primary transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="text-xl font-bold text-primary">{ad.title}</h4>
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  ad.isActive
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-gray-100 text-gray-700'
                                }`}
                              >
                                {ad.isActive ? 'Active' : 'Inactive'}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-2">{ad.message}</p>
                            <p className="text-xs text-gray-500">
                              Created: {new Date(ad.createdAt).toLocaleString()}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            <button
                              onClick={() => handleToggleAdStatus(ad.id)}
                              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                              title={ad.isActive ? 'Deactivate' : 'Activate'}
                            >
                              {ad.isActive ? (
                                <EyeOff className="w-5 h-5 text-gray-600" />
                              ) : (
                                <Eye className="w-5 h-5 text-gray-600" />
                              )}
                            </button>
                            <button
                              onClick={() => handleEditAd(ad)}
                              className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Edit className="w-5 h-5 text-blue-600" />
                            </button>
                            <button
                              onClick={() => handleDeleteAd(ad.id)}
                              className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-5 h-5 text-red-600" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="p-6">
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                      <Shield size={24} />
                      <span>Security Settings</span>
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Change Admin Password
                        </label>
                        <div className="flex space-x-3">
                          <input
                            type="password"
                            placeholder="New password"
                            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                          />
                          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold">
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                      <Bell size={24} />
                      <span>Notification Settings</span>
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">Email Notifications</p>
                          <p className="text-sm text-gray-600">Receive email alerts for new bookings</p>
                        </div>
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-primary rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">SMS Notifications</p>
                          <p className="text-sm text-gray-600">Receive SMS alerts for urgent bookings</p>
                        </div>
                        <input type="checkbox" className="w-5 h-5 text-primary rounded" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">General Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Auto-refresh Interval (seconds)
                        </label>
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none">
                          <option value="2">2 seconds</option>
                          <option value="5">5 seconds</option>
                          <option value="10">10 seconds</option>
                          <option value="30">30 seconds</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Date Format
                        </label>
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none">
                          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold">
                      Save Settings
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="p-6">
                <div className="max-w-2xl mx-auto space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                      <User size={24} />
                      <span>Profile Information</span>
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={profileData.name}
                          onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Role
                        </label>
                        <input
                          type="text"
                          value={profileData.role}
                          disabled
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-100 text-gray-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Current Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
                      Cancel
                    </button>
                    <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
