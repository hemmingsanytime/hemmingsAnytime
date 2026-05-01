import { Phone, Mail, MapPin } from 'lucide-react';
import imgAviationDetailing from "@/assets/aviation-interior-detailing-image.avif";



export const ContactInformationSidebar = ({title, description}: {title: string, description: string}) => {
    return <div className="relative lg:w-2/5 overflow-hidden p-12 text-white">
        <img
        src={imgAviationDetailing}
        alt="Hemmings Anytime team at work"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[30%_0%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(155deg,#0e3a6de6_0%,#081630e6_100%)]" />

        <div className="relative z-[2]">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-blue-100 text-lg mb-12">{description}</p>

        <div className="space-y-8">
            <div className="flex items-center gap-6">
            <div className="bg-white/10 p-4 rounded-2xl">
                <Phone className="w-6 h-6" />
            </div>
            <div>
                <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">Call Us</p>
                <p className="text-lg font-bold">07557 460940</p>
                <p className="text-lg font-bold">07429 312968</p>
            </div>
            </div>
            
            <div className="flex items-center gap-6">
            <div className="bg-white/10 p-4 rounded-2xl">
                <Mail className="w-6 h-6" />
            </div>
            <div>
                <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">Email Us</p>
                <p className="text-lg font-bold break-all">hemmingsanytime@gmail.com</p>
            </div>
            </div>

            <div className="flex items-center gap-6">
            <div className="bg-white/10 p-4 rounded-2xl">
                <MapPin className="w-6 h-6" />
            </div>
            <div>
                <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">Service Areas</p>
                <p className="text-lg font-bold">Commercial & Residential</p>
            </div>
            </div>
        </div>

        <div className="mt-20">
            <p className="text-blue-200 text-sm mb-4">Available for After-Hours Services</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F4C430]/20 text-[#F4C430] rounded-full border border-[#F4C430]/30">
            <span className="w-2 h-2 bg-[#F4C430] rounded-full animate-pulse"></span>
            <span className="text-sm font-bold uppercase tracking-widest">Ready to Help</span>
            </div>
        </div>
        </div>
    </div>
}