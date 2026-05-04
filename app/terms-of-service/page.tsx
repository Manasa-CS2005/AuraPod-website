'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Please read these terms carefully before using our website and making purchases.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Effective Date: May 4, 2026
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="space-y-8">
            {/* Section 1 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  By accessing and using the AuraPod website (aurapod.com) and making purchases, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or purchase our products.
                </p>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the revised terms.
                </p>
              </div>
            </Card>

            {/* Section 2 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Eligibility</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  You must be at least 18 years old to use this website and make purchases. By using our website, you represent and warrant that you are of legal age to form a binding contract with AuraPod. We do not knowingly sell to or solicit purchases from minors.
                </p>
                <p>
                  You are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account.
                </p>
              </div>
            </Card>

            {/* Section 3 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Product Information and Accuracy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We strive to provide accurate product descriptions, images, and pricing on our website. However, we do not warrant that product descriptions, images, pricing, or other content is completely accurate, complete, or error-free.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Product images are representative and may not perfectly match the actual product</li>
                  <li>Actual product colors may vary due to monitor/device display settings</li>
                  <li>Product dimensions, weights, and specifications are approximate</li>
                  <li>Prices are subject to change without notice</li>
                </ul>
                <p className="mt-4">
                  If you notice an error in pricing or product information, please contact us immediately at <a href="mailto:hello@aurapod.in" className="text-amber-600 hover:text-amber-700">hello@aurapod.in</a>
                </p>
              </div>
            </Card>

            {/* Section 4 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pricing and Payment</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>All prices are in Indian Rupees (₹)</strong> unless otherwise specified. Prices include applicable taxes where required. Shipping charges are calculated separately based on location and shipping method selected.
                </p>
                <p className="mt-4">
                  <strong>Payment Methods:</strong> We accept credit/debit cards, net banking, UPI, and other payment methods as displayed during checkout. Payment must be received before order processing begins.
                </p>
                <p className="mt-4">
                  <strong>Failed Transactions:</strong> If your payment fails, your order will not be processed. We are not responsible for any charges by your bank for failed transactions.
                </p>
                <p className="mt-4">
                  <strong>Security:</strong> All payment transactions are processed through secure payment gateways. We do not store your complete credit card information on our servers.
                </p>
              </div>
            </Card>

            {/* Section 5 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Order Placement and Acceptance</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Placing an order on our website constitutes an offer to purchase. We reserve the right to accept or reject any order in our sole discretion for any reason, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Out of stock items</li>
                  <li>Fraudulent orders</li>
                  <li>Delivery address restrictions</li>
                  <li>Other legitimate business reasons</li>
                </ul>
                <p className="mt-4">
                  Once your order is confirmed via email, a binding contract is formed between you and AuraPod. You will receive an order confirmation email with order details.
                </p>
              </div>
            </Card>

            {/* Section 6 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Shipping and Delivery</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Standard Delivery:</strong> 3-5 business days (Delivery in major cities)<br />
                  <strong>Express Delivery:</strong> 1-2 business days (Available in select metro cities)
                </p>
                <p className="mt-4">
                  <strong>Shipping Address:</strong> You are responsible for providing accurate delivery address. We are not liable for delivery failures due to incorrect or incomplete addresses provided by you.
                </p>
                <p className="mt-4">
                  <strong>Delivery Attempts:</strong> Our courier partners typically attempt delivery 2-3 times. If delivery fails after maximum attempts, the package may be returned to us at your expense.
                </p>
                <p className="mt-4">
                  <strong>Risk of Loss:</strong> Risk of loss and title for all products passes to you upon delivery to the shipping address you provided.
                </p>
                <p className="mt-4">
                  <strong>Delivery Delays:</strong> While we strive to meet delivery timeframes, unforeseen circumstances may cause delays. We are not liable for delays caused by weather, natural disasters, courier delays, or other factors beyond our control.
                </p>
              </div>
            </Card>

            {/* Section 7 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Returns, Refunds, and Exchanges</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Please refer to our <a href="/return-policy" className="text-amber-600 hover:text-amber-700 font-semibold">Return Policy</a> for detailed information on returns, exchanges, and refund procedures.
                </p>
                <p className="mt-4">
                  <strong>15-Day Return Window:</strong> Products can be returned within 15 days of delivery in unused condition with original packaging.
                </p>
                <p className="mt-4">
                  <strong>Refund Timeline:</strong> Approved refunds are processed within 5-7 business days to the original payment method.
                </p>
              </div>
            </Card>

            {/* Section 8 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property Rights</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  All content on the AuraPod website, including but not limited to text, images, graphics, logos, designs, and product descriptions, is the exclusive property of AuraPod or its content suppliers and is protected by international copyright laws.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>AuraPod™, its logo, and product names are trademarks of AuraPod</li>
                  <li>You may not use, reproduce, or distribute any content without express written permission</li>
                  <li>Unauthorized use of our intellectual property may result in legal action</li>
                </ul>
                <p className="mt-4">
                  <strong>Limited License:</strong> We grant you a limited, non-exclusive license to view and print content for personal, non-commercial use only.
                </p>
              </div>
            </Card>

            {/* Section 9 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. User-Generated Content</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Any content you submit to our website, including reviews, comments, and feedback (collectively "User Content"), grants AuraPod a worldwide, royalty-free, non-exclusive license to use, reproduce, modify, and distribute such content.
                </p>
                <p className="mt-4">
                  <strong>Content Rules:</strong> User Content must not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Be defamatory, abusive, or threatening</li>
                  <li>Infringe on any intellectual property rights</li>
                  <li>Contain inappropriate, obscene, or offensive material</li>
                  <li>Be spam, misleading, or false advertising</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to remove any User Content that violates these terms without notice.
                </p>
              </div>
            </Card>

            {/* Section 10 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, AUROPOD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITY, REGARDLESS OF THE CAUSE OF ACTION.
                </p>
                <p className="mt-4">
                  Our total liability to you for any claim arising from these terms or your use of the website shall not exceed the amount you paid for the product in question.
                </p>
                <p className="mt-4">
                  <strong>Disclaimer:</strong> The website and all products are provided "AS IS" without warranties of any kind, express or implied.
                </p>
              </div>
            </Card>

            {/* Section 11 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Prohibited Activities</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  You agree not to engage in any of the following activities:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Attempting to hack or gain unauthorized access to our systems</li>
                  <li>Transmitting viruses, malware, or harmful code</li>
                  <li>Scraping, crawling, or automated data collection without permission</li>
                  <li>Impersonating other users or misrepresenting affiliation</li>
                  <li>Engaging in any form of fraud or deception</li>
                  <li>Harassing, threatening, or abusing other users</li>
                  <li>Violating any applicable laws or regulations</li>
                </ul>
                <p className="mt-4">
                  Violation of these terms may result in account suspension or legal action.
                </p>
              </div>
            </Card>

            {/* Section 12 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Product Warranty</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  AuraPod products are warranted to be free from defects in materials and workmanship under normal use for a period of <strong>12 months from the date of delivery</strong>.
                </p>
                <p className="mt-4">
                  <strong>Warranty Coverage:</strong> Manufacturing defects, broken components, malfunctioning parts
                </p>
                <p>
                  <strong>Warranty Exclusions:</strong> Normal wear and tear, customer misuse, accidents, unauthorized repairs, improper storage
                </p>
                <p className="mt-4">
                  To claim warranty, contact us with proof of purchase and description of the defect. We will arrange repair or replacement at our discretion.
                </p>
              </div>
            </Card>

            {/* Section 13 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Third-Party Links</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external websites. Your use of third-party websites is governed by their own terms and conditions.
                </p>
                <p className="mt-4">
                  We do not endorse any third-party websites or services linked from our website.
                </p>
              </div>
            </Card>

            {/* Section 14 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law and Jurisdiction</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  These Terms of Service are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
                </p>
                <p className="mt-4">
                  Any dispute arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, India. You agree to submit to the jurisdiction of these courts.
                </p>
              </div>
            </Card>

            {/* Section 15 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Dispute Resolution</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Informal Resolution:</strong> Before initiating legal proceedings, we encourage you to contact us to resolve any disputes informally. Please email us at <a href="mailto:hello@aurapod.in" className="text-amber-600 hover:text-amber-700">hello@aurapod.in</a> with details of your concern. We will attempt to resolve the issue within 30 days.
                </p>
                <p className="mt-4">
                  <strong>Legal Action:</strong> If informal resolution is unsuccessful, disputes may be brought in the courts of Bangalore, India.
                </p>
              </div>
            </Card>

            {/* Section 16 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Severability</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If any provision of these Terms of Service is found to be invalid or unenforceable, that provision shall be severed, and the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
                </p>
              </div>
            </Card>

            {/* Section 17 */}
            <Card className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4 space-y-2">
                  <p>
                    <strong>AuraPod Customer Service</strong><br />
                    Email: <a href="mailto:hello@aurapod.in" className="text-amber-600 hover:text-amber-700">hello@aurapod.in</a><br />
                    Phone: +91 7019489467<br />
                    Address: RV University campus, Mysuru road, Bangalore - 560059
                  </p>
                </div>
                <p className="mt-4">
                  We will respond to all inquiries within 2 business days.
                </p>
              </div>
            </Card>

            {/* Acknowledgment */}
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded">
              <p className="text-gray-800">
                <strong>By using AuraPod's website and making purchases, you acknowledge that you have read, understood, and agree to all terms and conditions outlined above.</strong>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
