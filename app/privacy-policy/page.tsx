'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: May 4, 2026
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="space-y-8">
            {/* Section 1 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We collect information you provide directly, such as when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Create an account or register on our website</li>
                  <li>Place an order or make a purchase</li>
                  <li>Sign up for our newsletter or marketing communications</li>
                  <li>Contact us via email, phone, or through our contact form</li>
                  <li>Leave reviews or feedback about our products</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="mt-4">
                  <strong>Personal Information may include:</strong> Name, email address, postal address, phone number, payment information, purchase history, and communication preferences.
                </p>
              </div>
            </Card>

            {/* Section 2 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Automatically Collected Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  When you visit our website, we automatically collect certain information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>IP address and browser type</li>
                  <li>Pages you visit and time spent on each page</li>
                  <li>Referral source and links clicked</li>
                  <li>Device type and operating system</li>
                  <li>General location information (city/country level)</li>
                </ul>
                <p className="mt-4">
                  This information is collected through cookies, analytics tools, and similar technologies to improve your browsing experience and understand how our website is used.
                </p>
              </div>
            </Card>

            {/* Section 3 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Processing and fulfilling your orders</li>
                  <li>Sending order confirmations and shipping updates</li>
                  <li>Responding to your inquiries and customer service requests</li>
                  <li>Sending promotional emails and marketing materials (with your consent)</li>
                  <li>Improving our website, products, and services</li>
                  <li>Personalizing your shopping experience</li>
                  <li>Detecting and preventing fraudulent transactions</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>
            </Card>

            {/* Section 4 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing Your Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We do not sell, trade, or rent your personal information. However, we may share your information in these limited circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>Service Providers:</strong> Third-party vendors who help us operate our website and conduct our business (payment processors, shipping partners, email service providers)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or in response to legal processes</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                  <li><strong>With Your Consent:</strong> With your explicit permission for purposes you authorize</li>
                </ul>
                <p className="mt-4">
                  All service providers are contractually obligated to keep your information confidential and use it only for the purposes we specify.
                </p>
              </div>
            </Card>

            {/* Section 5 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure password requirements for account creation</li>
                  <li>Regular security audits and updates</li>
                  <li>Restricted access to personal information by authorized personnel only</li>
                  <li>Secure servers and data centers</li>
                </ul>
                <p className="mt-4">
                  While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </Card>

            {/* Section 6 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>Access:</strong> Request a copy of the information we hold about you</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your information (subject to legal obligations)</li>
                  <li><strong>Marketing Communications:</strong> Opt out of promotional emails at any time</li>
                  <li><strong>Cookie Management:</strong> Control cookie preferences through your browser settings</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us at <a href="mailto:privacy@aurapod.in" className="text-amber-600 hover:text-amber-700 font-semibold">privacy@aurapod.in</a>
                </p>
              </div>
            </Card>

            {/* Section 7 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>Essential Cookies:</strong> Required for website functionality and security</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how you use our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your choices and settings</li>
                  <li><strong>Marketing Cookies:</strong> Track your interests for targeted advertising</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings and opt out of tracking at any time.
                </p>
              </div>
            </Card>

            {/* Section 8 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  AuraPod does not knowingly collect information from children under 13 years of age. Our website is not intended for children, and we do not intentionally market our products to minors. If we become aware that a child under 13 has provided us with information, we will promptly delete such information from our records.
                </p>
              </div>
            </Card>

            {/* Section 9 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any personal information. This privacy policy applies only to information collected through our website.
                </p>
              </div>
            </Card>

            {/* Section 10 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Policy Updates</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by updating the "Last updated" date at the top of this page. Your continued use of the website following the posting of changes constitutes your acceptance of the updated Privacy Policy.
                </p>
              </div>
            </Card>

            {/* Section 11 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4 space-y-2">
                  <p>
                    <strong>AuraPod Privacy Team</strong><br />
                    Email: <a href="mailto:privacy@aurapod.in" className="text-amber-600 hover:text-amber-700">privacy@aurapod.in</a><br />
                    Phone: +91 7019489467<br />
                    Address: RV University campus, Mysuru road, Bangalore - 560059
                  </p>
                </div>
                <p className="mt-4">
                  We will respond to all privacy inquiries within 15 business days.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
