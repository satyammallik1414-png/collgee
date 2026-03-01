import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Campus Life', 'Events', 'Sports', 'Academics', 'Facilities']

  const galleryImages = [
    { id: 1, category: 'Campus Life', title: 'Main Campus Building', description: 'Our beautiful main campus building', emoji: '🏛️' },
    { id: 2, category: 'Campus Life', title: 'Student Plaza', description: 'Students gathering at the central plaza', emoji: '🌳' },
    { id: 3, category: 'Events', title: 'Annual Convocation', description: 'Graduation ceremony 2025', emoji: '🎓' },
    { id: 4, category: 'Events', title: 'Tech Fest', description: 'Annual technology festival', emoji: '🚀' },
    { id: 5, category: 'Sports', title: 'Basketball Court', description: 'State-of-the-art sports facility', emoji: '🏀' },
    { id: 6, category: 'Sports', title: 'Swimming Pool', description: 'Olympic-size swimming pool', emoji: '🏊' },
    { id: 7, category: 'Academics', title: 'Library', description: 'Modern library with 100,000+ books', emoji: '📚' },
    { id: 8, category: 'Academics', title: 'Computer Lab', description: 'Advanced computing facilities', emoji: '💻' },
    { id: 9, category: 'Facilities', title: 'Cafeteria', description: 'Spacious dining area', emoji: '🍽️' },
    { id: 10, category: 'Facilities', title: 'Auditorium', description: '1000-seat auditorium', emoji: '🎭' },
    { id: 11, category: 'Campus Life', title: 'Garden Area', description: 'Peaceful study spots', emoji: '🌺' },
    { id: 12, category: 'Events', title: 'Cultural Night', description: 'Annual cultural celebration', emoji: '🎨' }
  ]

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const ImageModal = ({ image, onClose, onNext, onPrev }) => {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-3xl hover:text-primary-400 transition-colors z-50"
          >
            <FaTimes />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 text-white text-4xl hover:text-primary-400 transition-colors"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 text-white text-4xl hover:text-primary-400 transition-colors"
          >
            <FaChevronRight />
          </button>

          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-96 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <span className="text-9xl">{image.emoji}</span>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-neutral-800 mb-2">{image.title}</h3>
                <p className="text-primary-600 font-semibold mb-4">{image.category}</p>
                <p className="text-neutral-600 text-lg">{image.description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
  }

  const handlePrev = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <div className="bg-neutral-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0 bg-education-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-neutral-800 mb-6">
              Campus <span className="text-gradient-education">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
              Explore our vibrant campus life through photos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all shadow-md ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border-2 border-neutral-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedImage(image)}
                className="bg-white rounded-2xl overflow-hidden border-2 border-neutral-200 hover:border-primary-400 transition-all cursor-pointer shadow-md hover:shadow-education"
              >
                <div className="h-64 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <span className="text-7xl">{image.emoji}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-neutral-800 mb-1">{image.title}</h3>
                  <p className="text-primary-600 text-sm font-semibold">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  )
}

export default GalleryPage
