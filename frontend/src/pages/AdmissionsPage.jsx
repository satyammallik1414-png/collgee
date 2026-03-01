import { motion } from 'framer-motion'
import { FaCheckCircle, FaCalendarAlt, FaFileAlt, FaMoneyBillWave, FaUserGraduate, FaClipboardList } from 'react-icons/fa'

const AdmissionsPage = () => {
  const admissionSteps = [
    {
      step: 1,
      title: 'Online Application',
      description: 'Fill out the online application form with your personal and academic details',
      icon: <FaFileAlt className="text-4xl" />
    },
    {
      step: 2,
      title: 'Submit Documents',
      description: 'Upload required documents including transcripts, ID proof, and certificates',
      icon: <FaClipboardList className="text-4xl" />
    },
    {
      step: 3,
      title: 'Entrance Exam',
      description: 'Take the entrance examination or submit standardized test scores',
      icon: <FaUserGraduate className="text-4xl" />
    },
    {
      step: 4,
      title: 'Interview',
      description: 'Attend a personal interview with our admissions committee',
      icon: <FaCheckCircle className="text-4xl" />
    }
  ]

  const requirements = [
    'High school diploma or equivalent',
    'Minimum GPA of 3.0 on a 4.0 scale',
    'Official transcripts from all previous institutions',
    'Two letters of recommendation',
    'Personal statement or essay',
    'Standardized test scores (SAT/ACT)',
    'Valid government-issued ID',
    'Passport-size photographs'
  ]

  const importantDates = [
    { event: 'Application Opens', date: 'October 1, 2025' },
    { event: 'Early Decision Deadline', date: 'November 15, 2025' },
    { event: 'Regular Decision Deadline', date: 'January 15, 2026' },
    { event: 'Entrance Exam', date: 'February 20, 2026' },
    { event: 'Admission Results', date: 'March 30, 2026' },
    { event: 'Enrollment Deadline', date: 'May 1, 2026' }
  ]

  const feeStructure = [
    { category: 'Application Fee', amount: '$100' },
    { category: 'Tuition Fee (Annual)', amount: '$25,000' },
    { category: 'Hostel Fee (Annual)', amount: '$8,000' },
    { category: 'Library & Lab Fee', amount: '$1,500' },
    { category: 'Sports & Activities', amount: '$500' },
    { category: 'Total (Estimated)', amount: '$35,000', highlight: true }
  ]

  const scholarships = [
    {
      name: 'Merit Scholarship',
      amount: 'Up to 100% tuition',
      criteria: 'Based on academic excellence'
    },
    {
      name: 'Sports Scholarship',
      amount: 'Up to 50% tuition',
      criteria: 'For outstanding athletes'
    },
    {
      name: 'Need-Based Aid',
      amount: 'Varies',
      criteria: 'Based on financial need'
    },
    {
      name: 'Diversity Scholarship',
      amount: 'Up to 30% tuition',
      criteria: 'Promoting campus diversity'
    }
  ]

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
              <span className="text-gradient-education">Admissions</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Start your journey to excellence. Join our community of future leaders.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-md"
            >
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-neutral-800 mb-4">
              Admission <span className="text-gradient-education">Process</span>
            </h2>
            <p className="text-xl text-neutral-600">Follow these simple steps to apply</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 border-2 border-neutral-200 hover:border-primary-400 transition-all shadow-md hover:shadow-education text-center"
              >
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600">
                  {step.icon}
                </div>
                <div className="text-primary-500 font-bold text-lg mb-3">Step {step.step}</div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eligibility Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-neutral-800 mb-8">
                Eligibility <span className="text-gradient-education">Requirements</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border-2 border-neutral-200 shadow-md">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="text-primary-500 text-xl mt-1 flex-shrink-0" />
                      <span className="text-neutral-700 text-lg">{req}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Important Dates */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-neutral-800 mb-8">
                Important <span className="text-gradient-education">Dates</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border-2 border-neutral-200 shadow-md">
                <ul className="space-y-5">
                  {importantDates.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 pb-5 border-b border-neutral-200 last:border-0"
                    >
                      <FaCalendarAlt className="text-primary-500 text-xl mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-neutral-800 text-lg mb-1">{item.event}</h4>
                        <p className="text-neutral-600">{item.date}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-neutral-800 mb-4">
              Fee <span className="text-gradient-education">Structure</span>
            </h2>
            <p className="text-xl text-neutral-600">Transparent and competitive pricing</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-2 border-neutral-200 shadow-education overflow-hidden"
          >
            {feeStructure.map((fee, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-6 border-b border-neutral-200 last:border-0 ${
                  fee.highlight ? 'bg-gradient-to-r from-primary-50 to-secondary-50' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <FaMoneyBillWave className={`text-2xl ${fee.highlight ? 'text-primary-600' : 'text-neutral-400'}`} />
                  <span className={`text-lg ${fee.highlight ? 'font-bold text-neutral-800' : 'text-neutral-700'}`}>
                    {fee.category}
                  </span>
                </div>
                <span className={`text-2xl font-bold ${fee.highlight ? 'text-gradient-education' : 'text-neutral-800'}`}>
                  {fee.amount}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-neutral-800 mb-4">
              Scholarships & <span className="text-gradient-education">Financial Aid</span>
            </h2>
            <p className="text-xl text-neutral-600">We believe in making education accessible to all</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 border-2 border-neutral-200 hover:border-primary-400 transition-all shadow-md hover:shadow-education"
              >
                <h3 className="text-2xl font-bold text-neutral-800 mb-3">{scholarship.name}</h3>
                <p className="text-3xl font-bold text-gradient-education mb-4">{scholarship.amount}</p>
                <p className="text-neutral-600">{scholarship.criteria}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Take the first step towards a brighter future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-md"
              >
                Start Application
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AdmissionsPage
