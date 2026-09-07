import "./ServiceCard.css";

import img1 from "../../assets/servicepage/img1.png";
import img2 from "../../assets/servicepage/img2.png";
import img3 from "../../assets/servicepage/img3.png";
import img4 from "../../assets/servicepage/img4.png";
import img5 from "../../assets/servicepage/img5.png";
import img6 from "../../assets/servicepage/img6.png";
import img7 from "../../assets/servicepage/img7.png";
import img8 from "../../assets/servicepage/img8.png";


const services = [
  {
    imageSrc: img1,
    title: "Domestic Shifting",
    description:
      "Safe and hassle-free domestic shifting services ensuring careful packing, smooth transportation, and timely delivery nationwide.",
    buttonLink: "/services/domestic",
  },
  {
    imageSrc: img2,
    title: "Household Shifting",
    description:
      "Safe, reliable household shifting service ensuring careful packing, smooth transportation, and on-time delivery.",
    buttonLink: "/services/household",
  },
  {
    imageSrc: img3,
    title: "Office Shifting",
    description:
      "Professional office shifting services ensuring safe relocation of equipment, minimal downtime, and smooth transition.",
    buttonLink: "/services/office",
  },
  {
    imageSrc: img4,
    title: "International Shifting",
    description:
      "Seamless international shifting services ensuring safe packing, smooth customs clearance, and timely delivery.",
    buttonLink: "/services/international",
  },
  {
    imageSrc: img5,
    title: "Storage Facility",
    description:
      "Secure, spacious, and well-managed storage facilities ensuring complete protection and easy access to your goods.",
    buttonLink: "/services/storage",
  },
  {
    imageSrc: img6,
    title: "Bulk Shifting",
    description:
      "Efficient bulk shifting solutions ensuring safe handling, timely transportation, and seamless relocation.",
    buttonLink: "/services/bulk",
  },
  {
    imageSrc: img7,
    title: "Car Shifting",
    description:
      "Safe and professional car shifting service ensuring damage-free transportation, timely delivery, and complete peace of mind.",
    buttonLink: "/services/car",
  },
  {
    imageSrc: img8,
    title: "Corporate Shifting",
    description:
      "Professional corporate shifting services ensuring secure, planned, and timely relocation with minimal business disruption.",
    buttonLink: "/services/corporate",
  },
];

const ServiceCard = ({ imageSrc, title, description, buttonLink, index }) => (
  <article data-reveal className="service-tile group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white">
    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
      <img
        src={imageSrc}
        alt={title}
        loading="lazy"
        decoding="async"
        className="service-tile-image h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#002f6c]/30 via-transparent to-transparent" />
      <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/95 px-3 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-[#002f6c]">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-6">
      <h3 className="font-heading text-[20px] leading-[1.35] tracking-[-0.025em] text-[#092b4e] sm:min-h-[54px]">
        {title}
      </h3>
      <p className="mb-6 mt-3 text-[14px] leading-[1.8] text-slate-600">
        {description}
      </p>
      <a
        href={buttonLink}
        aria-label={`Explore ${title}`}
        className="service-tile-link mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-5 text-[13px] font-semibold text-[#002f6c]"
      >
        Explore service
        <span className="service-tile-arrow flex h-9 w-9 shrink-0 items-center justify-center rounded-full" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </a>
    </div>
  </article>
);

const ServiceSection = () => (
  <section aria-labelledby="services-heading" className="service-collection w-full px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-[1280px]">
      <div className="mb-10 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div>
          <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8f4b00]">
            <span className="h-px w-8 bg-[#ff9900]" aria-hidden="true" />
            Our services
          </div>
          <h2 id="services-heading" className="font-heading max-w-[640px] text-3xl leading-[1.15] tracking-[-0.035em] text-[#092b4e] sm:text-4xl lg:text-[44px]">
            Every move, handled with care.
          </h2>
        </div>
        <p className="max-w-[360px] text-[15px] leading-relaxed text-slate-600">
          From your home to your business, explore the right moving and storage service for your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.buttonLink} {...service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default ServiceSection;
