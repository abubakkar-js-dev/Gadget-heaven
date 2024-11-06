
const ContactForm = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div className="bg-primary/30 w-full flex items-center justify-center p-6 rounded-3xl">
        <div className="bg-white p-8 rounded-3xl shadow-md w-full">
          <h2 className="text-3xl font-bold text-black mb-4">
          Get in Touch with Us
          </h2>
          <p className="text-gray-800 mb-8">
            Tell us more about yourself and what you’ve got in mind.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold text-base">Your name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-bold text-base">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-bold text-base mb-2">Tell us a little about our services...</label>
              <textarea
                placeholder="Tell us a little about ours services..."
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
                required
              />
            </div>
            
            <fieldset className="mt-6">
              <legend className="text-gray-700 mb-2 font-bold text-base">How can we help?</legend>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-black" />
                  <span>Order Status</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-black" />
                  <span>Product Info</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-black" />
                  <span>Tech Support</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-black" />
                  <span>Returns/Exchanges</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-black" />
                  <span>Shipping Details</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-black" />
                  <span>Other</span>
                </label>
              </div>
            </fieldset>
            
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
            >
              Let’s get started!
            </button>
          </form>
        </div>
      </div>
    );
};

export default ContactForm;