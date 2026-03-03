import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Marching Frogs',
  description:
    'Privacy Policy and data protection guidelines for Marching Frogs.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className='min-h-screen bg-gray-50 pt-32 pb-20'>
      <div className='container mx-auto px-4 max-w-4xl'>
        <div className='bg-white rounded-[2.5rem] shadow-xl p-8 md:p-16 border border-border'>
          <div className='mb-12 border-b border-border pb-8'>
            <h1 className='text-4xl md:text-5xl font-serif font-bold text-foreground mb-4'>
              Privacy Policy
            </h1>
            <p className='text-muted-foreground'>Last updated: March 2025</p>
          </div>

          <div className='prose prose-lg max-w-none text-muted-foreground'>
            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mt-8 mb-4'>
                1. Introduction
              </h2>
              <p>
                Marching Frogs PVT LTD ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how your
                personal information is collected, used, and disclosed by
                Marching Frogs.
              </p>
              <p>
                This Privacy Policy applies to our website, and its associated
                subdomains (collectively, our "Service") alongside our
                application, Marching Frogs. By accessing or using our Service,
                you signify that you have read, understood, and agree to our
                collection, storage, use, and disclosure of your personal
                information as described in this Privacy Policy.
              </p>
            </section>

            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mt-8 mb-4'>
                2. Information We Collect
              </h2>
              <p>We collect information you provide directly to us when you:</p>
              <ul className='list-disc pl-6 space-y-2 mt-4'>
                <li>Submit a contact form or request a quote</li>
                <li>Register for one of our Bespoke Global Legal Summits</li>
                <li>Subscribe to our newsletters or updates</li>
                <li>Communicate with us via email or other channels</li>
              </ul>
              <p className='mt-4'>
                The types of information we may collect include your name, email
                address, phone number, company name, job title, and any other
                information you choose to provide.
              </p>
            </section>

            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mt-8 mb-4'>
                3. How We Use Your Information
              </h2>
              <p>
                We use the information we collect for various purposes,
                including to:
              </p>
              <ul className='list-disc pl-6 space-y-2 mt-4'>
                <li>Provide, operate, and maintain our Service</li>
                <li>Improve, personalize, and expand our Service</li>
                <li>Understand and analyze how you use our Service</li>
                <li>
                  Develop new products, services, features, and functionality
                </li>
                <li>
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the Service, and for
                  marketing and promotional purposes
                </li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>
            </section>

            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mt-8 mb-4'>
                4. Data Security
              </h2>
              <p>
                The security of your personal information is important to us. We
                have implemented internationally recognized technical and
                organizational measures designed to secure your personal
                information from accidental loss and from unauthorized access,
                use, alteration, and disclosure. However, no method of
                transmission over the Internet, or method of electronic storage
                is 100% secure, and we cannot guarantee its absolute security.
              </p>
            </section>

            <section className='mb-10'>
              <h2 className='text-2xl font-bold text-foreground mt-8 mb-4'>
                5. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <ul className='list-disc pl-6 mt-4'>
                <li>By email: hello@marchingfrogs.com</li>
                <li>By visiting our website: marchingfrogs.com/contact</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
