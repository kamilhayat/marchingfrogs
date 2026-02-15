'use client';
import { CONTACT_DATA } from '@/constants';
import { MapPin, ExternalLink } from 'lucide-react';
import { GridPattern } from '@/components/sections/svg';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const geoUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-110m.json';

const Footprint = () => {
  return (
    <section
      className='py-8 bg-background relative overflow-hidden'
      id='footprint'
    >
      <GridPattern />

      <div className='container mx-auto px-6 md:px-0 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          {/* Content Side */}
          <div className='w-full lg:w-1/2 space-y-12 lg:order-1'>
            <div className='space-y-6'>
              <div className='section-subtitle'>Global Scale</div>
              <h2 className='section-title font-sans font-bold text-foreground leading-tight tracking-tight'>
                Operational{' '}
                <span className='text-primary italic font-serif'>
                  Footprint
                </span>
              </h2>
              <p className='section-desc text-lg'>
                Leveraging strategically positioned hubs across India, UAE, and
                SE Asia to deliver 24/7 excellence and rapid-response
                scalability.
              </p>
            </div>

            <div className='grid gap-6'>
              {CONTACT_DATA.locations.map((loc) => (
                <div
                  key={loc.city}
                  className='group p-6 rounded-[2.5rem] bg-card border border-border hover:border-primary/30 transition-all duration-500 flex items-center justify-between shadow-sm hover:shadow-md'
                >
                  <div className='flex items-center gap-6'>
                    <div className='w-14 h-14 rounded-3xl bg-secondary border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500'>
                      <MapPin className='w-6 h-6' />
                    </div>
                    <div className='space-y-1'>
                      <h4 className='text-xl font-bold text-foreground group-hover:text-primary transition-colors'>
                        {loc.city} Hub
                      </h4>
                      <p className='text-muted-foreground font-medium tracking-wide uppercase text-[10px]'>
                        {loc.details}
                      </p>
                    </div>
                  </div>
                  <div className='w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground/30 group-hover:text-primary group-hover:bg-primary/10 transition-all cursor-pointer'>
                    <ExternalLink className='w-4 h-4' />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Side */}
          <div className='w-full lg:w-1/2 relative lg:order-2'>
            <div className='relative w-full aspect-square md:aspect-video lg:aspect-square bg-linear-to-br from-primary/5 to-accent/5 rounded-[3rem] border border-border overflow-hidden shadow-2xl'>
              <div className='absolute inset-0 bg-primary/2 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' />

              <ComposableMap
                projection='geoMercator'
                projectionConfig={{
                  scale: 140,
                  center: [60, 20],
                }}
                className='w-full h-full'
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }: { geographies: any[] }) =>
                    geographies.map((geo: any) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill='#EAEAEC'
                        stroke='#D6D6DA'
                        strokeWidth={0.5}
                        style={{
                          default: { outline: 'none' },
                          hover: {
                            fill: 'var(--primary)',
                            opacity: 0.1,
                            outline: 'none',
                          },
                          pressed: { outline: 'none' },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {CONTACT_DATA.locations.map((loc) => (
                  <Marker
                    key={loc.city}
                    coordinates={loc.coordinates as [number, number]}
                  >
                    <g className='group/pin cursor-pointer'>
                      {/* Pulse Effect */}
                      <circle r={8} fill='var(--primary)' opacity={0.3}>
                        <animate
                          attributeName='r'
                          from='4'
                          to='12'
                          dur='1.5s'
                          repeatCount='indefinite'
                        />
                        <animate
                          attributeName='opacity'
                          from='0.6'
                          to='0'
                          dur='1.5s'
                          repeatCount='indefinite'
                        />
                      </circle>

                      <circle
                        r={4}
                        fill='var(--primary)'
                        stroke='#fff'
                        strokeWidth={1.5}
                      />

                      {/* Tooltip on Marker */}
                      <text
                        textAnchor='middle'
                        y={-15}
                        className='text-[10px] font-bold fill-foreground opacity-0 group-hover/pin:opacity-100 transition-opacity duration-300 pointer-events-none'
                        style={{ fontFamily: 'sans-serif' }}
                      >
                        {loc.city}
                      </text>
                    </g>
                  </Marker>
                ))}
              </ComposableMap>

              {/* Legend / Overlay */}
              <div className='absolute bottom-8 left-8 p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-border shadow-lg'>
                <div className='flex items-center gap-3'>
                  <div className='w-3 h-3 rounded-full bg-primary animate-pulse' />
                  <span className='text-xs font-bold text-foreground'>
                    Active Strategic Hubs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footprint;
