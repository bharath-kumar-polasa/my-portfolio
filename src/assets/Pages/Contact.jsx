import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-16">Get In Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaEnvelope className="text-blue-500 mt-1 mr-4" size={20} />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">bharath.polasa@example.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-blue-500 mt-1 mr-4" size={20} />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+1 (334) XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-4" size={20} />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-600">Montgomery, AL</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}