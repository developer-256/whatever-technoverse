import React from "react";

const Form = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 py-6">
      <h2 className="flex items-center justify-center h-16 bg-amber-300 text-4xl font-bold">
        SSD
      </h2>

      <div className="flex items-center justify-center h-16 bg-amber-100 text-3xl font-semibold mt-4 mb-6">
        Citizen Complaint Form
      </div>

      <form className="max-w-3xl mx-auto space-y-6 bg-white p-6 rounded-xl shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="firstname" className="text-lg font-medium mb-1">
              First Name
            </label>
            <input
              className="h-12 px-3 rounded-md bg-amber-100 border border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              type="text"
              placeholder="Abdullah"
              id="firstname"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastname" className="text-lg font-medium mb-1">
              Last Name
            </label>
            <input
              className="h-12 px-3 rounded-md bg-amber-100 border border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              type="text"
              placeholder="Nadeem"
              id="lastname"
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="contact" className="text-lg font-medium mb-1">
            Contact Number
          </label>
          <input
            className="h-12 px-3 rounded-md bg-amber-100 border border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            type="tel"
            placeholder="+92-321-9876549"
            id="contact"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="text-lg font-medium mb-1">
            Choose Category
          </label>
          <select
            className="h-12 px-3 rounded-md bg-amber-100 border border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            id="category"
            required
          >
            <option value="">-- Select --</option>
            <option value="cleanness">Cleanness</option>
            <option value="gas">Gas</option>
            <option value="maintenance">Maintenance</option>
            <option value="security">Security</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-medium mb-1">
            Description
          </label>
          <textarea
            className="px-3 py-2 rounded-md bg-amber-100 border border-amber-400 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
            id="description"
            rows={5}
            placeholder="Describe your complaint..."
            required
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="upload" className="text-lg font-medium mb-1">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="upload"
            className="file:bg-amber-400 file:text-white file:rounded-md file:px-4 file:py-2 mt-2"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-amber-500 text-white text-lg font-semibold rounded-lg hover:bg-amber-600 transition"
          >
            Submit Complaint
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
