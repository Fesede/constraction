import { Truck, ShieldCheck, Clock, HardHat, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'About Us | Construction Logistics Platform',
  description: 'Streamlining construction supply chains, fleet dispatch, and site delivery slotting.',
};

export default function AboutPage() {
  const stats = [
    { label: 'Active Job Sites', value: '1,200+' },
    { label: 'On-Time Deliveries', value: '98.4%' },
    { label: 'Material Saved (Tons)', value: '45,000+' },
    { label: 'Fleet Vehicles Managed', value: '8,500+' },
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8 text-amber-500" />,
      title: 'Real-Time Fleet Dispatch',
      description: 'Live GPS tracking and dynamic routing for heavy machinery and haulage trucks.',
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      title: 'Precision Site Gate Slotting',
      description: 'Eliminate site gate congestion with time-slotted material delivery windows.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
      title: 'Safety & Compliance',
      description: 'Automated digital checklists for vehicle weight, driver certification, and load security.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
      title: 'Cost & Waste Reduction',
      description: 'Analytics dashboards tracking idle time, fuel consumption, and material overflow.',
    },
  ];

  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-20 px-6 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-amber-500/20">
          <HardHat className="w-4 h-4" /> Next-Gen Construction Logistics
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Streamlining Supply Chains for <br />
          <span className="text-amber-500">Smarter Job Sites</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          We build digital infrastructure that connects job sites, material suppliers, and freight fleets into a single, synchronized workflow.
        </p>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-amber-500">{stat.value}</div>
              <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Construction delays cost the global industry billions annually—over 30% of which stems from supply chain friction, uncoordinated truck arrivals, and misplaced inventory.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Our platform provides end-to-end visibility across every leg of the haul, giving site superintendents and logistics managers total control over site flow and material delivery schedules.
          </p>
        </div>
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-xl font-bold text-amber-500 mb-4">Why Logistics Matter</h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">✓</span> Eliminates truck idling & urban traffic congestion.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">✓</span> Ensures critical materials arrive right when crews need them.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">✓</span> Digitize paper tickets to speed up billing and auditing.
            </li>
          </ul>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-slate-950 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Built for the Field & the Office</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              Designed specifically for general contractors, sub-contractors, and material haulers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition-colors">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}