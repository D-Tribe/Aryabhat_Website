"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Building2, Globe, Zap, Mail, MessageCircle } from "lucide-react"
import { useState } from "react"
import logo from '../app/logo.png';

export default function HomePage() {

  const [notebookGifSrc] = useState('/light_notebook.webm');
  const [adminGifSrc] = useState('/light_admin.webm');

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setNotebookGifSrc(`/dark_notebook.webm?t=${Date.now()}`);
  //     setAdminGifSrc(`${adminGif.src}?t=${new Date().getTime()}`);
  //   }, 20000); // 20900 milliseconds = 20 seconds
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                 <img
                      src={logo.src}
                      alt="App Favicon"
                      className="h-6 w-8 group-hover:text-blue-400 transition-colors duration-300"
                      style={{ filter: 'invert(1)' }}/>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 tracking-wide">
                ARYABHAT
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Features
              </Link>
              <Link
                href="#solutions"
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Solutions
              </Link>
              <Link
                href="#integration"
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Integration
              </Link>
              <Link
                href="#review"
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Product Preview
              </Link>
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
              >
                <a href="mailto:hello@aryabhat.ai?subject=Demo Request&body=Hi, I'm interested in scheduling a demo of Aryabhat.ai. Please get in touch with me.">
                  Contact Us
                </a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%234F46E5' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 px-4 py-2 text-sm font-medium">
                  AI-Powered Platform
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  AI-Powered{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Insights & Automation
                  </span>{" "}
                  for Enterprises and Governments
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                  Aryabhat.ai helps you optimize workflows, generate real-time insights, and enhance communication with
                  advanced AI solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <a href="mailto:hello@aryabhat.ai?subject=Demo Request&body=Hi, I'm interested in scheduling a demo of Aryabhat.ai. Please get in touch with me.">
                    <span>Schedule a Free Demo</span>
                  </a>
                </Button>

                
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-700">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <Zap className="h-8 w-8 text-blue-400 mb-2" />
                    <p className="text-sm text-slate-300">Real-time Analytics</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <MessageCircle className="h-8 w-8 text-purple-400 mb-2" />
                    <p className="text-sm text-slate-300">AI Automation</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <Globe className="h-8 w-8 text-green-400 mb-2" />
                    <p className="text-sm text-slate-300">Smart Communication</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <Building2 className="h-8 w-8 text-red-400 mb-2" />
                    <p className="text-sm text-slate-300">Enterprise Security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 px-4 py-2 text-sm font-medium mb-4">
              KEY FEATURES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Enhancing Productivity, Step by Step</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-900/50 border-slate-700 hover:border-blue-600/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                    <Zap className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">AI-Driven Workflow Automation</h3>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Boost efficiency and streamline operations with intelligent automation designed to handle repetitive
                  tasks at scale.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:border-purple-600/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600/30 transition-colors duration-300">
                    <MessageCircle className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-Time Multimodal Data Insights</h3>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Transform data into actionable insights using our AI engine that processes information from various
                  data sources in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:border-green-600/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600/30 transition-colors duration-300">
                    <Globe className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Multilingual Communication and Collaboration
                  </h3>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Facilitate seamless cross-language communication to serve customers and citizens, breaking down
                  language barriers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:border-red-600/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors duration-300">
                    <Building2 className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Enterprise-Grade AI Security and Compliance</h3>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Maintain data security and comply with regulations through state-of-the-art privacy measures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section id="solutions" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 px-4 py-2 text-sm font-medium mb-4">
              SOLUTIONS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">For Enterprises</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <MessageCircle className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Data-Driven Decision Making</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Empower your business with Gen AI-powered insights to make faster, more informed decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-600/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">AI Customer Support Automation</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Improve customer engagement with AI that delivers prompt and accurate responses 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-green-600/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">AI Process Optimization</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Enhance productivity and streamline operations with AI-enabled process improvements.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Government Solutions */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">For Governments</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-600/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">AI-Enhanced Public Services</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Deliver better services to citizens through AI-driven communication and support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-600/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <MessageCircle className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Data-Driven AI Policy Development</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Utilize data analysis to create effective and impactful policies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-green-600/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">AI in Healthcare and Rural Development</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Leverage AI to improve healthcare delivery and support rural development initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bhashini Integrations Section */}
       <section id="integration" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-600/20 text-green-400 border-green-600/30 px-4 py-2 text-sm font-medium mb-4">
              BHASHINI INTEGRATIONS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Advanced Language Technologies</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Powered by Bhashini, India&apos;s National Language Translation Mission, we offer cutting-edge language
              processing capabilities for seamless multilingual communication.
            </p>
          </div>

          {/* Bhashini Logo */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hNdbQw01WSqAaqXjz1YBQZPjZiD7VT.png"
                alt="Bhashini Logo"
                className="h-16 w-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-slate-700 hover:border-blue-600/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors duration-300">
                  <MessageCircle className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Automatic Speech Recognition</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Powerful technology that enables computers and devices to recognize and interpret human speech.
                  Converts spoken language into text, making it possible for machines to understand and process verbal
                  commands, transcriptions, or conversations.
                </p>
                <div className="bg-blue-600/10 rounded-lg p-3 mb-4">
                  <p className="text-blue-400 font-semibold text-sm">Total Languages Supported: 23</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:border-purple-600/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors duration-300">
                  <MessageCircle className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Neural Machine Translation</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Advanced AI technology that automatically translates text from one language to another. Unlike
                  traditional rule-based systems, NMT uses deep learning models and neural networks to understand and
                  generate more accurate and contextually relevant translations.
                </p>
                <div className="bg-purple-600/10 rounded-lg p-3 mb-4">
                  <p className="text-purple-400 font-semibold text-sm">Total Languages Supported: 36</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 hover:border-green-600/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600/30 transition-colors duration-300">
                  <MessageCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Optical Character Recognition</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Technology that converts different types of text, such as scene text, printed text, and handwritten
                  text, into machine-readable data. Advanced OCR models tailored for various types of text, including
                  both printed and handwritten forms.
                </p>
                <div className="bg-green-600/10 rounded-lg p-3 mb-4">
                  <p className="text-green-400 font-semibold text-sm">Total Languages Supported: 19</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
       <section id="review" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 px-4 py-2 text-sm font-medium mb-4">
              PRODUCT PREVIEW
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">See Aryabhat.ai in Action</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get a sneak peek of our intuitive interface and powerful analytics dashboard that makes AI accessible to
              everyone.
            </p>
          </div>

          <div className="space-y-16">
            {/* AI Notebook Interface */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 px-3 py-1 text-sm">
                    AI Notebook Interface
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Intuitive Chat & Knowledge Management</h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Our notebook interface makes it easy to organize conversations, access different AI models, and
                    manage your knowledge base. Ask anything and get intelligent responses powered by advanced AI.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Organized project notebooks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Smart suggestion cards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Natural language queries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Multiple AI model support</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                  {/* <img
                    src={notebookGifSrc}
                    alt="Aryabhat.ai Notebook Interface showing AI chat functionality with organized projects and smart suggestions"
                    className="w-620 h-80 brightness-100"
                  /> */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={notebookGifSrc}
                  className="w-[620px] h-auto brightness-100 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback noautoplay"
                  translate="no"/>

                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              </div>
            </div>

            {/* Admin Dashboard */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                  {/* <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TgObZuc7w7RxIBJMLJZHuCv0R122QV.png"
                    alt="Aryabhat.ai Admin Dashboard showing user analytics, engagement metrics, and comprehensive reporting"
                    className="w-full h-auto"
                  /> */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={adminGifSrc}
                  className="w-[620px] h-auto brightness-100 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback noautoplay"
                  translate="no"/>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
              </div>
              <div className="space-y-6 lg:order-2">
                <div className="space-y-4">
                  <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 px-3 py-1 text-sm">
                    Admin Panel
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Admin Control Center</h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Easily manage every aspect of your platform from a centralized admin interface. Gain real-time insights, control user access, manage files and tags, configure licenses, connect storage devices, integrate databases, and fine-tune system settings — all in one place. Streamline operations, improve security, and make data-driven decisions with powerful management tools.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-slate-300">Real-time analytics & reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-slate-300">User and role management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-slate-300">Secure file repository</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-slate-300">Database connector integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Simplified */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Marketing Copy */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Ready to Transform Your{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Organization
                  </span>{" "}
                  with AI?
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Contact Aryabhat.ai today! Take the first step towards intelligent automation. Connect with our AI
                  specialists now and let&apos;s embark on a journey of digital transformation together.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">Boost productivity by up to 40%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">Real-time insights and automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">Multilingual support for global reach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">Enterprise-grade security & compliance</span>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <p className="text-slate-300 italic mb-4">
                  &quot;At Aryabhat.ai, we are passionate about helping organizations like yours thrive in the AI age.
                  Whether you&apos;re seeking cutting-edge automation solutions, intelligent data insights, or expert AI
                  consulting, our team of professionals is here to guide you every step of the way.&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                     <img
                      src={logo.src}
                      alt="App Favicon"
                      className="h-5 w-5"
                      style={{ filter: 'invert(1)' }} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Aryabhat.ai Team</p>
                    <p className="text-slate-400 text-sm">AI Solutions Specialists</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <img
                      src={logo.src}
                      alt="App Favicon"
                      className="h-10 w-10"
                      style={{ filter: 'invert(1)' }}
                    />
                  </div>
                </div>

                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Talk to Aryabhat.ai! 🚀</h3>
                  <p className="text-slate-600">AI Solutions Specialist</p>
                </div>

                <div className="space-y-6">
                  {/* Email Contact */}
                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <a href="mailto:hello@aryabhat.ai?subject=Quick Inquiry&body=Hi, I'd like to get in touch regarding Aryabhat.ai solutions.">
                        <Mail className="mr-2 h-5 w-5" />
                        hello@aryabhat.ai
                      </a>
                    </Button>
                    <p className="text-slate-500 text-sm text-center">📧 Quick questions &amp; inquiries</p>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="flex-1 border-t border-slate-200"></div>
                    <span className="px-4 text-slate-400 text-sm">or</span>
                    <div className="flex-1 border-t border-slate-200"></div>
                  </div>

                  {/* Detailed Contact Options */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="border-slate-300 text-slate-700 hover:bg-slate-50 py-3 rounded-lg font-medium transition-all duration-200 bg-transparent"
                    >
                      <a href="mailto:hello@aryabhat.ai?subject=Demo Request&body=Hi, I'm interested in scheduling a demo of Aryabhat.ai. Please get in touch with me.">
                        Schedule Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-slate-300 text-slate-700 hover:bg-slate-50 py-3 rounded-lg font-medium transition-all duration-200 bg-transparent"
                    >
                      <a href="mailto:hello@aryabhat.ai?subject=Explore Solutions&body=Hi, I'd like to explore Aryabhat.ai solutions for my organization. Please provide more details.">
                        Explore More
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                  <p className="text-slate-500 text-xs">
                    ⚡ Typically respond within 24 hours • 🌟 Free consultation • 🔒 No commitment required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
            <div
              className="h-6 w-6 bg-slate-400"
              style={{
                maskImage: `url(${logo.src})`,
                WebkitMaskImage: `url(${logo.src})`,
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
              }}
            />
            <span className="text-slate-400 font-medium">Aryabhat.ai</span>
          </div>
            <p className="text-slate-500 text-sm">Copyright © 2025 Aryabhat.ai. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
