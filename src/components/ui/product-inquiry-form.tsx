"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Modal from "@/components/ui/modal"
import Image from "next/image"

interface ProductInquiryFormProps {
  isOpen: boolean
  onClose: () => void
  productName?: string
  productImage?: string
}

const ProductInquiryForm: React.FC<ProductInquiryFormProps> = ({
  isOpen,
  onClose,
  productName = "Custom Item",
  productImage = "/assets/placeholders/adore_placeholder.jpg?height=400&width=300",
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContact: "email",
    requirements: "",
    measurements: "",
    occasion: "",
    budget: "",
  })

  const [formStep, setFormStep] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Reset form state when modal is opened with a new product
  useEffect(() => {
    if (isOpen) {
      setFormStep(0)
      setSubmitted(false)
      setSubmitting(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredContact: "email",
        requirements: "",
        measurements: "",
        occasion: "",
        budget: "",
      })
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real app, you would send the form data to your backend here
    console.log("Form submitted:", formData)

    setSubmitting(false)
    setSubmitted(true)

    // Reset form data for next submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      preferredContact: "email",
      requirements: "",
      measurements: "",
      occasion: "",
      budget: "",
    })
  }

  const handleNextStep = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent any form submission
    setFormStep((prev) => prev + 1)
  }

  const handlePrevStep = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent any form submission
    setFormStep((prev) => prev - 1)
  }

  const handleClose = () => {
    onClose()
    // Reset form after a short delay to prevent visual glitches
    setTimeout(() => {
      setFormStep(0)
      setSubmitted(false)
    }, 300)
  }

  const steps = [
    {
      title: "Personal Information",
      description: "Let us know who you are so we can contact you.",
      fields: (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium dark:text-amber-200">
                First Name *
              </label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Your first name"
                required
                className="border-amber-200 focus:border-amber-400 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-100 dark:focus:border-amber-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium dark:text-amber-200">
                Last Name *
              </label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Your last name"
                required
                className="border-amber-200 focus:border-amber-400 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-100 dark:focus:border-amber-600"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium dark:text-amber-200">
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
              className="border-amber-200 focus:border-amber-400 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-100 dark:focus:border-amber-600"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium dark:text-amber-200">
              Phone Number *
            </label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              required
              className="border-amber-200 focus:border-amber-400 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-100 dark:focus:border-amber-600"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="preferredContact" className="text-sm font-medium dark:text-amber-200">
              Preferred Contact Method
            </label>
            <select
              id="preferredContact"
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleChange}
              className="w-full rounded-md border border-amber-200 bg-background px-3 py-2 text-sm focus:border-amber-400 focus:outline-none dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-100 dark:focus:border-amber-600"
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>
        </div>
      ),
    },
    {
      title: "Your Requirements",
      description: "Tell us about your custom clothing needs.",
      fields: (
        <div className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="requirements" className="text-sm font-medium dark:text-amber-200">
              Design Requirements
            </label>
            <Textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Describe your design preferences, colors, style, etc."
              rows={4}
              className="border-amber-200 focus:border-amber-400 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-100 dark:focus:border-amber-600"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="measurements" className="text-sm font-medium dark:text-amber-200">
              Measurements (Optional)
            </label>
            <Textarea
              id="measurements"
              name="measurements"
              value={formData.measurements}
              onChange={handleChange}
              placeholder="Any specific measurements or size details you'd like to share."
              rows={3}
              className="border-amber-200 focus:border-amber-400 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-100 dark:focus:border-amber-600"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="occasion" className="text-sm font-medium dark:text-amber-200">
              Occasion
            </label>
            <Input
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              placeholder="What occasion is this outfit for?"
              className="border-amber-200 focus:border-amber-400 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-100 dark:focus:border-amber-600"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="budget" className="text-sm font-medium dark:text-amber-200">
              Budget Range (Optional)
            </label>
            <Input
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Your budget range for this outfit"
              className="border-amber-200 focus:border-amber-400 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-100 dark:focus:border-amber-600"
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      className="w-full max-w-2xl dark:bg-amber-950 dark:border-amber-800/50"
    >
      {submitted ? (
        <div className="text-center py-8 sm:py-10">
          <div className="text-4xl sm:text-5xl mb-6 sm:mb-8">✨</div>
          <h3 className="text-xl sm:text-2xl font-bold text-amber-800 dark:text-amber-300 mb-4 sm:mb-5">Thank You!</h3>
          <p className="text-muted-foreground mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed">
            We{"'"}ve received your inquiry about <span className="font-semibold">{productName}</span>. One of our stylists
            will contact you shortly to discuss your requirements and book an appointment.
          </p>
          <Button
            onClick={handleClose}
            className="bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 rounded-full px-8 sm:px-10 py-2.5 sm:py-3 text-sm sm:text-base"
          >
            Close
          </Button>
        </div>
      ) : (
        <div>
          <div className="flex items-start gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden flex-shrink-0">
              <Image src={productImage || "/assets/placeholders/adore_placeholder.jpg"} alt={productName} width={96} height={96} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-amber-800 dark:text-amber-300 mb-2">
                Inquiry for {productName}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fill out this form to request information or book a consultation for this item. Our team will get back
                to you shortly.
              </p>
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center">
                  <div
                    className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center text-sm ${
                      idx <= formStep
                        ? "bg-amber-600 text-white"
                        : "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  {idx < steps.length - 1 && (
                    <div
                      className={`h-1 w-12 sm:w-16 md:w-28 ${idx < formStep ? "bg-amber-600" : "bg-amber-100 dark:bg-amber-900"}`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <h4 className="text-base sm:text-lg font-medium text-amber-800 dark:text-amber-300 mb-1.5">
              {steps[formStep].title}
            </h4>
            <p className="text-muted-foreground text-sm mb-6 sm:mb-8 leading-relaxed">{steps[formStep].description}</p>

            <form onSubmit={handleSubmit}>
              {steps[formStep].fields}

              <div className="mt-8 sm:mt-10 flex justify-between">
                {formStep > 0 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevStep}
                    className="border-amber-700 text-amber-700 dark:border-amber-400 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded-full text-sm"
                  >
                    Back
                  </Button>
                )}

                {formStep < steps.length - 1 ? (
                  <Button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 rounded-full ml-auto text-sm"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 rounded-full ml-auto text-sm"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </Modal>
  )
}

export default ProductInquiryForm

