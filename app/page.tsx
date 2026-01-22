"use client"
import Link from "next/link"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Building2, 
  Globe, 
  Zap, 
  Mail, 
  MessageCircle, 
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Sparkles
} from "lucide-react"
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion"
import { useState } from "react"
import logo from '../app/logo.png';

// --- Utility Components ---

const MouseSpotlight = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-white/10 bg-white/5 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const AnimatedNumber = ({ value, text }: { value: string, text: string }) => {
  return (
    <div className="flex flex-col">
        <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 font-mono">
            {value}
        </span>
        <span className="text-sm text-slate-400 mt-1 uppercase tracking-wider font-semibold">{text}</span>
    </div>
  )
}

// --- Main Page Component ---

export default function HomePage() {
  const notebookGifSrc = "aryabhat_website.webm";
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // Tabs for Solutions Section
  const [activeTab, setActiveTab] = useState<'enterprise' | 'government'>('enterprise');

  return (
    <div className="min-h-screen bg-[#000206] text-slate-200 selection:bg-blue-500/30 overflow-x-hidden font-sans">
      
      {/* --- Dynamic Background --- */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(60,20,130,0.15),rgba(255,255,255,0))]" />
         <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(0,100,255,0.1),rgba(255,255,255,0))]" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#000206]/60 backdrop-blur-xl supports-[backdrop-filter]:bg-[#000206]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                 <Image 
                    src={logo.src} 
                    alt="Logo" 
                    className="w-6 h-6 invert brightness-200"
                  />
              </div>
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-blue-200 transition-colors">ARYABHAT</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {['Features', 'Solutions', 'Integration', 'Product'].map((item) => (
                <Link key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all group-hover:w-full" />
                </Link>
              ))}
              <Button asChild className="rounded-full bg-white text-black hover:bg-slate-200 font-semibold px-6">
                <a href="mailto:hello@aryabhat.ai?subject=Demo Request">Contact Us</a>
              </Button>
            </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Platform</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8"
          >
            AI-Powered <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
              Insights & Automation
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Aryabhat.ai helps you optimize workflows, generate real-time insights, and enhance communication with advanced AI solutions for Enterprises and Governments.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-lg shadow-lg shadow-blue-600/25 transition-all hover:scale-105">
               <a href="mailto:hello@aryabhat.ai?subject=Demo Request">Schedule a Free Demo</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-full border-slate-700 hover:bg-white/5 text-black hover:text-white text-lg backdrop-blur-sm">
               <a href="#product">Watch Product Demo</a>
            </Button>
          </motion.div>
        </div>

        {/* Abstract Floating Elements (Parallax) */}
        <motion.div style={{ y }} className="absolute top-1/3 left-10 hidden lg:block opacity-20">
            <Zap className="w-24 h-24 text-blue-500" />
        </motion.div>
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }} className="absolute bottom-1/4 right-10 hidden lg:block opacity-20">
            <Cpu className="w-24 h-24 text-purple-500" />
        </motion.div>
      </section>

      {/* --- Bento Grid Features --- */}
      <section id="features" className="py-24 px-6 bg-[#02040a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Enhancing Productivity, <br /><span className="text-slate-500">Step by Step</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Feature 1 - Large Wide */}
            <MouseSpotlight className="md:col-span-4 rounded-3xl p-8 md:p-12 bg-[#0B0F19]">
              <div className="h-full flex flex-col justify-between relative z-10">
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                  <Zap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">AI-Driven Workflow Automation</h3>
                  <p className="text-slate-400 text-lg">Boost efficiency and streamline operations with intelligent automation designed to handle repetitive tasks at scale.</p>
                </div>
              </div>
            </MouseSpotlight>

            {/* Feature 2 - Tall */}
            <MouseSpotlight className="md:col-span-2 md:row-span-2 rounded-3xl p-8 bg-[#0B0F19]">
               <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Real-Time Data Insights</h3>
                    <p className="text-slate-400">Transform data into actionable insights using our AI engine that processes information from various data sources in real-time.</p>
                  </div>
                  {/* Decorative Chart Graphic */}
                  <div className="mt-8 flex items-end gap-1 h-20 opacity-50">
                    <div className="w-1/5 bg-purple-500/40 h-[40%] rounded-t-sm" />
                    <div className="w-1/5 bg-purple-500/60 h-[70%] rounded-t-sm" />
                    <div className="w-1/5 bg-purple-500/80 h-[50%] rounded-t-sm" />
                    <div className="w-1/5 bg-purple-500 h-[90%] rounded-t-sm" />
                    <div className="w-1/5 bg-purple-400 h-[60%] rounded-t-sm" />
                  </div>
               </div>
            </MouseSpotlight>

            {/* Feature 3 - Medium */}
            <MouseSpotlight className="md:col-span-2 rounded-3xl p-8 bg-[#0B0F19]">
               <div className="relative z-10">
                  <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 text-green-400">
                    <Globe className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Multilingual Collab</h3>
                  <p className="text-slate-400 text-sm">Facilitate seamless cross-language communication to serve customers and citizens.</p>
               </div>
            </MouseSpotlight>

            {/* Feature 4 - Medium */}
            <MouseSpotlight className="md:col-span-2 rounded-3xl p-8 bg-[#0B0F19]">
               <div className="relative z-10">
                  <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 text-red-400">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                  <p className="text-slate-400 text-sm">Maintain data security and comply with regulations through state-of-the-art privacy.</p>
               </div>
            </MouseSpotlight>
          </div>
        </div>
      </section>

      {/* --- Interactive Solutions Tabs --- */}
      <section id="solutions" className="py-32 px-6 relative border-y border-white/5 bg-[#000206]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Tailored Solutions</h2>
            
            {/* Custom Tab Switcher */}
            <div className="bg-white/5 p-1 rounded-full inline-flex border border-white/10 backdrop-blur-sm">
              <button 
                onClick={() => setActiveTab('enterprise')}
                className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'enterprise' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {activeTab === 'enterprise' && (
                  <motion.div layoutId="tab-pill" className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-900/50" />
                )}
                <span className="relative z-10 flex items-center gap-2"><Building2 className="w-4 h-4" /> For Enterprises</span>
              </button>
              <button 
                onClick={() => setActiveTab('government')}
                className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'government' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {activeTab === 'government' && (
                  <motion.div layoutId="tab-pill" className="absolute inset-0 bg-green-600 rounded-full shadow-lg shadow-green-900/50" />
                )}
                <span className="relative z-10 flex items-center gap-2"><Users className="w-4 h-4" /> For Governments</span>
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {activeTab === 'enterprise' ? (
                 <>
                   {[
                    { title: "Data-Driven Decisions", icon: MessageCircle, color: "text-blue-400", desc: "Empower your business with Gen AI-powered insights to make faster, more informed decisions." },
                    { title: "AI Customer Support", icon: Globe, color: "text-purple-400", desc: "Improve customer engagement with AI that delivers prompt and accurate responses 24/7." },
                    { title: "AI Process Optimization", icon: Building2, color: "text-green-400", desc: "Enhance productivity and streamline operations with AI-enabled process improvements." },
                  ].map((item, i) => (
                    <div key={i} className="group p-8 rounded-2xl bg-gradient-to-b from-[#0F121C] to-[#05070A] border border-white/5 hover:border-blue-500/30 transition-all hover:translate-y-[-5px]">
                      <item.icon className={`h-10 w-10 ${item.color} mb-6`} />
                      <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                 </>
              ) : (
                <>
                  {[
                    { title: "AI-Enhanced Public Services", icon: Users, color: "text-blue-400", desc: "Deliver better services to citizens through AI-driven communication and support." },
                    { title: "Policy Development", icon: MessageCircle, color: "text-purple-400", desc: "Utilize data analysis to create effective and impactful policies based on real needs." },
                    { title: "Rural Development", icon: Building2, color: "text-green-400", desc: "Leverage AI to improve healthcare delivery and support rural development initiatives." },
                  ].map((item, i) => (
                    <div key={i} className="group p-8 rounded-2xl bg-gradient-to-b from-[#0F121C] to-[#05070A] border border-white/5 hover:border-green-500/30 transition-all hover:translate-y-[-5px]">
                      <item.icon className={`h-10 w-10 ${item.color} mb-6`} />
                      <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- Integration Section (Stats) --- */}
      <section id="integration" className="py-24 px-6 relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-8">
               <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hNdbQw01WSqAaqXjz1YBQZPjZiD7VT.png"
                alt="Bhashini Logo"
                className="h-10 w-auto opacity-90"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Breaking Language Barriers</h2>
            <p className="text-lg text-slate-400">
              Powered by Bhashini, India&apos;s National Language Translation Mission, we offer cutting-edge language processing capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Speech Recognition", 
                count: "23", 
                desc: "Automatic Speech Recognition (ASR) enables devices to interpret human speech seamlessly." 
              },
              { 
                title: "Machine Translation", 
                count: "36", 
                desc: "Neural Machine Translation (NMT) uses deep learning for contextually accurate text translation." 
              },
              { 
                title: "Optical Character Rec", 
                count: "19", 
                desc: "OCR technology converts printed and handwritten text into machine-readable data instantly." 
              }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-3xl bg-[#0B0F19] border border-white/5 hover:border-blue-500/20 transition-colors text-center"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#000206] border border-white/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-blue-500" />
                </div>
                <div className="pt-4 space-y-4">
                  <AnimatedNumber value={stat.count} text="Languages" />
                  <h3 className="text-xl font-semibold text-white">{stat.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Product Showcase (3D Effect) --- */}
      <section id="product" className="py-32 px-6 bg-[#000206] perspective-1000">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16 space-y-4">
             <h2 className="text-4xl md:text-6xl font-bold text-white">Actionable Intelligence</h2>
             <p className="text-xl text-slate-400">Turn hours of document search into seconds of insight.</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 100, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ margin: "-100px" }}
            className="perspective-1000 relative max-w-5xl mx-auto"
          >
            {/* Laptop/Browser Frame */}
            <div className="relative rounded-2xl bg-[#1A1F2E] border border-slate-700 shadow-2xl overflow-hidden group">
              {/* Browser Header */}
              <div className="h-8 bg-[#0F131C] border-b border-slate-800 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 w-1/3 h-4 bg-slate-800 rounded-full opacity-50" />
              </div>
              
              <div className="relative aspect-video bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={notebookGifSrc}
                  className="w-full h-full object-contain group-hover:opacity-100 transition-opacity duration-500"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-20 pointer-events-none" />
              </div>
            </div>
            
            {/* Glow Under Video */}
            <div className="absolute -bottom-10 left-10 right-10 h-20 bg-blue-500/30 blur-[60px] rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* --- Contact Footer --- */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-gray-900 to-black-900">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-blue-400/30 rounded-full blur-[100px]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to <br/> Transform?
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-md">
                   Boost productivity by up to 40% with Aryabhat.ai. Connect with our AI specialists now.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 h-14 px-8 rounded-full text-lg font-semibold">
                    <a href="mailto:hello@aryabhat.ai?subject=Quick Inquiry">
                       <Mail className="mr-2 h-5 w-5" /> Email Us
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/30 text-black hover:text-white hover:bg-white/10 h-14 px-8 rounded-full text-lg">
                    <a href="mailto:hello@aryabhat.ai?subject=Demo Request">Schedule Demo</a>
                  </Button>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                 <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                       <Image src={logo.src} alt="Logo" className="w-8 h-8 invert-1 brightness-0" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">Aryabhat.ai Team</p>
                      <p className="text-blue-200 text-sm">AI Specialists</p>
                    </div>
                 </div>
                <p className="text-blue-50 italic text-lg leading-relaxed">
                  {"\"Whether you're seeking cutting-edge automation solutions, intelligent data insights, or expert AI consulting, our team of professionals is here to guide you every step of the way.\""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Simple Footer --- */}
      <footer className="border-t border-white/5 py-12 px-6 bg-[#000206]">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
               <Image src={logo.src} alt="Aryabhat" className="h-6 w-auto invert brightness-200" />
               <span className="text-slate-400 font-medium">Aryabhat.ai</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
               <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
               <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
               <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <p className="text-slate-600 text-sm">© 2025 Aryabhat.ai</p>
         </div>
      </footer>
    </div>
  )
}
