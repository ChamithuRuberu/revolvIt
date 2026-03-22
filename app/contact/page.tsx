'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Loader2, User, PhoneCall, MailSearch, Package, Monitor, ShieldCheck, Zap, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    posPackage: "",
    completePackage: "",
    subscriptionPlan: "",
    addOnFeatures: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);
  const [posData, setPosData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/portal/public?fields=posPricing,hardwareCategories');
        const result = await response.json();
        setPosData(result);
      } catch (error) {
        console.error('Error fetching dynamic data:', error);
      } finally {
        setDataLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    try {
      setLoading(true);
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Inquiry received! We'll contact you within 24 hours.");
        setFormData({
          fullName: "", email: "", phone: "", posPackage: "", completePackage: "", subscriptionPlan: "", addOnFeatures: "", message: "",
        });
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-corporate-blue/10">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />

      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-[#0A0F1C] pt-40">
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-corporate-blue/10 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4 text-corporate-blue" />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Official Quote Request</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">Let's build your <br /><span className="text-corporate-blue">Ideal Setup.</span></h1>
          <p className="text-slate-400 font-bold max-w-2xl mx-auto text-lg leading-relaxed">
            Fill out the form below and our POS specialists will design a custom solution tailored for your business branch & budget.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Form Area */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-6 lg:p-10 border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Step 1: Merchant Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-blue-50 flex items-center justify-center text-corporate-blue border border-blue-100">
                      <User className="h-4 w-4" />
                    </div>
                    <h2 className="text-lg font-black text-slate-900 tracking-tight">Merchant Identity</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="space-y-1">
                       <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
                       <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Lead name" className="w-full bg-slate-50 border-none rounded-lg px-4 py-2 text-sm font-bold focus:ring-4 focus:ring-blue-100 transition-all outline-none" />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Hotline</label>
                       <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+94..." className="w-full bg-slate-50 border-none rounded-lg px-4 py-2 text-sm font-bold focus:ring-4 focus:ring-blue-100 transition-all outline-none" />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Email</label>
                       <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="corp@email.com" className="w-full bg-slate-50 border-none rounded-lg px-4 py-2 text-sm font-bold focus:ring-4 focus:ring-blue-100 transition-all outline-none" />
                    </div>
                  </div>
                </div>

                {/* Step 2: License Selection */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100">
                      <Zap className="h-4 w-4" />
                    </div>
                    <h2 className="text-lg font-black text-slate-900 tracking-tight">Licensing Framework</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={`p-4 rounded-lg border transition-all ${formData.posPackage ? 'border-corporate-blue bg-blue-50/20' : 'bg-slate-50/50 border-slate-100'} hover:border-corporate-blue`}>
                       <div className="mb-2">
                          <label className="text-[9px] font-black text-corporate-blue uppercase tracking-widest block">Lifetime Ownership</label>
                          <p className="text-[9px] font-bold text-slate-400 leading-none">One-time payment.</p>
                       </div>
                       <select 
                        name="posPackage" 
                        value={formData.posPackage} 
                        onChange={(e) => {
                           handleChange(e);
                           setFormData(prev => ({ ...prev, [e.target.name]: e.target.value, subscriptionPlan: "" }));
                        }} 
                        className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-xs font-black outline-none focus:ring-2 focus:ring-blue-100">
                          <option value="">Select Plan</option>
                          {posData?.posPricing?.softwarePlans?.map((plan: any, idx: number) => (
                            <option key={idx} value={plan.name}>{plan.name} - LKR {plan.price}</option>
                          ))}
                       </select>
                    </div>

                    <div className={`p-4 rounded-lg border transition-all ${formData.subscriptionPlan ? 'border-indigo-600 bg-indigo-50/20' : 'bg-slate-50/50 border-slate-100'} hover:border-indigo-600`}>
                       <div className="mb-2">
                          <label className="text-[9px] font-black text-indigo-600 uppercase tracking-widest block">Monthly Subscription</label>
                          <p className="text-[9px] font-bold text-slate-400 leading-none">Cloud updates included.</p>
                       </div>
                       <select 
                        name="subscriptionPlan" 
                        value={formData.subscriptionPlan} 
                        onChange={(e) => {
                           handleChange(e);
                           setFormData(prev => ({ ...prev, [e.target.name]: e.target.value, posPackage: "" }));
                        }} 
                        className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-xs font-black outline-none focus:ring-2 focus:ring-indigo-100">
                          <option value="">Select Plan</option>
                          {posData?.posPricing?.softwarePlans?.map((plan: any, idx: number) => (
                            <option key={idx} value={plan.name}>{plan.name} - LKR {plan.monthlyPrice}/mo</option>
                          ))}
                       </select>
                    </div>
                  </div>
                </div>

                {/* Step 3: Hardware */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded bg-orange-50 flex items-center justify-center text-orange-600 border border-orange-100">
                      <Package className="h-4 w-4" />
                    </div>
                    <h2 className="text-lg font-black text-slate-900 tracking-tight">Hardware Infrastructure</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                       <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Recommended Hardware Bundles</label>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {posData?.posPricing?.hardwareBundles?.map((bundle: any, idx: number) => (
                            <button key={idx} type="button" 
                              onClick={() => setFormData({ ...formData, completePackage: bundle.name })}
                              className={`p-3 rounded-lg border-2 text-left transition-all ${formData.completePackage === bundle.name ? 'border-corporate-blue bg-white shadow-lg' : 'border-slate-100 bg-white/50 hover:bg-white hover:border-slate-200'}`}>
                              <h4 className="font-black text-slate-900 text-[11px]">{bundle.name}</h4>
                              <p className="text-[9px] font-bold text-slate-400">LKR {bundle.price}</p>
                            </button>
                          ))}
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest pl-1">Standalone Equipment Interests</label>
                       <div className="flex flex-wrap gap-2">
                          {posData?.hardwareCategories?.map((cat: any) => (
                            <label key={cat.id} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[9px] font-black uppercase tracking-widest cursor-pointer transition-all ${formData.addOnFeatures.includes(cat.name) ? 'bg-corporate-blue border-corporate-blue text-white shadow-md' : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'}`}>
                              <input type="checkbox" className="hidden" onChange={(e) => {
                                const feature = cat.name;
                                const currentFeatures = formData.addOnFeatures ? formData.addOnFeatures.split(', ') : [];
                                let nextFeatures = e.target.checked ? [...currentFeatures, feature] : currentFeatures.filter(f => f !== feature);
                                setFormData({ ...formData, addOnFeatures: nextFeatures.join(', ') });
                              }} />
                              {cat.name}
                            </label>
                          ))}
                       </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded bg-blue-50 flex items-center justify-center text-corporate-blue border border-blue-100">
                      <MailSearch className="h-4 w-4" />
                    </div>
                    <h2 className="text-lg font-black text-slate-900 tracking-tight">Tell us more</h2>
                  </div>
                  
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Counters, Branch locations, etc..."
                    rows={3}
                    required
                    className="w-full bg-slate-50 border-none rounded-lg px-4 py-3 text-sm font-bold focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-slate-300 resize-none outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || dataLoading}
                  className="w-full bg-corporate-blue text-white py-4 rounded-lg font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-500/10 hover:bg-slate-900 transition-all flex items-center justify-center gap-3 group"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : (
                    <>Submit Configuration <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Quick Contact Sidebar */}
          <div className="lg:col-span-4">
            <div className="space-y-4 sticky top-32">
              <div className="p-6 rounded-lg bg-[#0A0F1C] text-white shadow-xl relative overflow-hidden group border border-white/5">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                  <PhoneCall className="h-20 w-20" />
                </div>
                <h3 className="text-lg font-black mb-4 tracking-tight relative z-10">Prefer to Talk?</h3>
                <div className="space-y-4 relative z-10">
                  <a href="tel:+94781508252" className="flex items-center gap-4 group/call">
                    <div className="h-10 w-10 rounded bg-corporate-blue flex items-center justify-center group-hover/call:bg-white group-hover/call:text-corporate-blue transition-all">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase text-blue-300 tracking-widest leading-none mb-1">Direct Hotline</p>
                      <p className="text-lg font-bold">+94 78 150 82 52</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded bg-white/10 flex items-center justify-center text-slate-300">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase text-slate-500 tracking-widest leading-none mb-1">Operations</p>
                      <p className="text-lg font-bold text-slate-200">9AM - 6PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-slate-50 border border-slate-100">
                 <h3 className="text-base font-black text-slate-900 mb-4 tracking-tight">Our Location</h3>
                 <div className="flex items-start gap-4 mb-4">
                    <div className="h-10 w-10 rounded bg-white border border-slate-100 flex items-center justify-center text-slate-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">Colombo Branch</p>
                      <p className="text-sm font-bold text-slate-900 text-pretty">Wewala, piliyandala, Colombo</p>
                    </div>
                 </div>
                 <div className="w-full h-32 rounded-lg overflow-hidden grayscale contrast-[1.1] border border-slate-200">
                    <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31694.701039363683!2d79.89510966767261!3d6.789603611051199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24f91d281cc5d%3A0xea4b2fcd3ce0e74e!2sPiliyandala!5e0!3m2!1sen!2slk!4v1743535860454!5m2!1sen!2slk" loading="lazy" />
                 </div>
              </div>

              <div className="flex justify-center gap-8 opacity-20 contrast-125 pt-4">
                 <Building2 className="h-8 w-8 text-corporate-blue" />
                 <Building2 className="h-8 w-8 text-corporate-blue" />
                 <Building2 className="h-8 w-8 text-corporate-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}