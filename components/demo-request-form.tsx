'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Clock, Users, Building, CheckCircle, Loader2 } from 'lucide-react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  jobTitle: string
  organizationType: string
  teamSize: string
  useCase: string
  preferredDate: string
  preferredTime: string
  message: string
  newsletter: boolean
  terms: boolean
}

export default function DemoRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    organizationType: '',
    teamSize: '',
    useCase: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    newsletter: false,
    terms: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required'
    if (!formData.organizationType) newErrors.organizationType = 'Please select organization type'
    if (!formData.teamSize) newErrors.teamSize = 'Please select team size'
    if (!formData.terms) newErrors.terms = 'You must accept the terms and conditions'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Demo Request Submitted!</h3>
        <p className="text-slate-300 mb-4">
          Thank you for your interest in Aryabhat.ai. Our team will contact you within 24 hours to schedule your personalized demo.
        </p>
        <div className="bg-slate-800 rounded-lg p-4 text-left">
          <h4 className="font-medium text-white mb-2">What happens next?</h4>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>• Our AI specialist will review your requirements</li>
            <li>• We'll prepare a customized demo based on your use case</li>
            <li>• You'll receive a calendar invite for your preferred time</li>
            <li>• Get ready to see AI transform your workflows!</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pb-4">
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-slate-200">First Name *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            placeholder="John"
          />
          {errors.firstName && <p className="text-red-400 text-sm">{errors.firstName}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-slate-200">Last Name *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            placeholder="Doe"
          />
          {errors.lastName && <p className="text-red-400 text-sm">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-200">Work Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-slate-200">Phone Number</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      {/* Company Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="company" className="text-slate-200">Company Name *</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            placeholder="Acme Corporation"
          />
          {errors.company && <p className="text-red-400 text-sm">{errors.company}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="jobTitle" className="text-slate-200">Job Title</Label>
          <Input
            id="jobTitle"
            value={formData.jobTitle}
            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
            className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
            placeholder="Chief Technology Officer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-slate-200">Organization Type *</Label>
          <Select value={formData.organizationType} onValueChange={(value) => handleInputChange('organizationType', value)}>
            <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
              <SelectValue placeholder="Select organization type" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-600 text-white">
              <SelectItem value="enterprise">Enterprise</SelectItem>
              <SelectItem value="government">Government</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="nonprofit">Non-profit</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.organizationType && <p className="text-red-400 text-sm">{errors.organizationType}</p>}
        </div>
        <div className="space-y-2">
          <Label className="text-slate-200">Team Size *</Label>
          <Select value={formData.teamSize} onValueChange={(value) => handleInputChange('teamSize', value)}>
            <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
              <SelectValue placeholder="Select team size" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-600 text-white">
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-50">11-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-1000">201-1000 employees</SelectItem>
              <SelectItem value="1000+">1000+ employees</SelectItem>
            </SelectContent>
          </Select>
          {errors.teamSize && <p className="text-red-400 text-sm">{errors.teamSize}</p>}
        </div>
      </div>

      {/* Use Case */}
      <div className="space-y-2">
        <Label className="text-slate-200">Primary Use Case</Label>
        <Select value={formData.useCase} onValueChange={(value) => handleInputChange('useCase', value)}>
          <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
            <SelectValue placeholder="What's your main interest in Aryabhat.ai?" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-slate-600 text-white">
            <SelectItem value="workflow-automation">Workflow Automation</SelectItem>
            <SelectItem value="data-insights">Real-time Data Insights</SelectItem>
            <SelectItem value="customer-support">AI Customer Support</SelectItem>
            <SelectItem value="multilingual-communication">Multilingual Communication</SelectItem>
            <SelectItem value="process-optimization">Process Optimization</SelectItem>
            <SelectItem value="policy-development">Policy Development</SelectItem>
            <SelectItem value="public-services">Public Services Enhancement</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Scheduling Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="preferredDate" className="text-slate-200 flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            Preferred Date
          </Label>
          <Input
            id="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={(e) => handleInputChange('preferredDate', e.target.value)}
            className="bg-slate-800 border-slate-600 text-white focus:border-blue-500"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-slate-200 flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            Preferred Time
          </Label>
          <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
            <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-600 text-white">
              <SelectItem value="9:00-10:00">9:00 AM - 10:00 AM</SelectItem>
              <SelectItem value="10:00-11:00">10:00 AM - 11:00 AM</SelectItem>
              <SelectItem value="11:00-12:00">11:00 AM - 12:00 PM</SelectItem>
              <SelectItem value="14:00-15:00">2:00 PM - 3:00 PM</SelectItem>
              <SelectItem value="15:00-16:00">3:00 PM - 4:00 PM</SelectItem>
              <SelectItem value="16:00-17:00">4:00 PM - 5:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Additional Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-slate-200">Additional Information</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 min-h-[80px] resize-none"
          placeholder="Tell us about your specific requirements, challenges, or questions..."
        />
      </div>

      {/* Checkboxes */}
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <Checkbox
            id="newsletter"
            checked={formData.newsletter}
            onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
            className="border-slate-600 data-[state=checked]:bg-blue-600 mt-0.5"
          />
          <Label htmlFor="newsletter" className="text-sm text-slate-300 leading-relaxed">
            I'd like to receive updates about Aryabhat.ai products, features, and industry insights.
          </Label>
        </div>
        <div className="flex items-start space-x-3">
          <Checkbox
            id="terms"
            checked={formData.terms}
            onCheckedChange={(checked) => handleInputChange('terms', checked as boolean)}
            className="border-slate-600 data-[state=checked]:bg-blue-600 mt-0.5"
          />
          <Label htmlFor="terms" className="text-sm text-slate-300 leading-relaxed">
            I agree to the <span className="text-blue-400 underline cursor-pointer">Terms of Service</span> and <span className="text-blue-400 underline cursor-pointer">Privacy Policy</span> *
          </Label>
        </div>
        {errors.terms && <p className="text-red-400 text-sm">{errors.terms}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-4 border-t border-slate-700 sticky bottom-0 bg-slate-900">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting Request...
            </>
          ) : (
            <>
              <Calendar className="mr-2 h-5 w-5" />
              Schedule My Demo
            </>
          )}
        </Button>
        <p className="text-xs text-slate-400 text-center mt-2">
          Our team typically responds within 24 hours. Demo sessions last 30-45 minutes.
        </p>
      </div>
    </form>
  )
}
