import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const TermsConditions = () => {
  const [expandedSections, setExpandedSections] = useState({
    terms: false,
    shipping: false,
    cancellation: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-[var(--banner-height)] pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <h1 className="text-5xl font-bold text-navy-dark mb-4">Terms & Conditions</h1>
          <p className="text-gray-600 mb-12">Last updated on Nov 28, 2025</p>

          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-700 mb-4">
              For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean <strong>MEDHAYA HOSPITALITY PRIVATE LIMITED</strong>, whose registered/operational office is:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700">
                Door No4-31(4), Rathna Kiran Complex, Opposite Govt.P.U.College, Eshwara Nagar, Thenkanidiyoor Village Tenkanidiyur Udupi, Udupi Karnataka 576106
              </p>
            </div>
            <p className="text-gray-700">
              "you", "your", "user", "visitor" shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.
            </p>
          </section>

          {/* Terms & Conditions Section */}
          <section className="mb-8 border rounded-lg">
            <button
              onClick={() => toggleSection('terms')}
              className="w-full p-6 bg-navy-dark text-white text-left font-bold text-xl hover:bg-navy transition-colors duration-300 flex justify-between items-center"
            >
              <span>Terms & Conditions</span>
              <span className="text-2xl">{expandedSections.terms ? '−' : '+'}</span>
            </button>
            
            {expandedSections.terms && (
              <div className="p-6 space-y-6 bg-white">
                <div>
                  <h3 className="text-lg font-semibold text-navy-dark mb-3">Your use of the website and/or purchase from us are governed by following Terms and Conditions:</h3>
                  
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-blue font-bold">•</span>
                      <span>The content of the pages of this website is subject to change without notice.</span>
                    </li>
                    
                    <li className="flex gap-3">
                      <span className="text-blue font-bold">•</span>
                      <span>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</span>
                    </li>
                    
                    <li className="flex gap-3">
                      <span className="text-blue font-bold">•</span>
                      <span>Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements.</span>
                    </li>
                    
                    <li className="flex gap-3">
                      <span className="text-blue font-bold">•</span>
                      <span>Our website contains material which is owned by or licensed to us. This material includes, but are not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</span>
                    </li>
                    
                    <li className="flex gap-3">
                      <span className="text-blue font-bold">•</span>
                      <span>All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.</span>
                    </li>
                    
                    <li className="flex gap-3">
                      <span className="text-blue font-bold">•</span>
                      <span>Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.</span>
                    </li>
                    
                    <li className="flex gap-3">
                      <span className="text-blue font-bold">•</span>
                      <span>From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information.</span>
                    </li>
                    
                    <li className="flex gap-3">
                      <span className="text-blue font-bold">•</span>
                      <span>You may not create a link to our website from another website or document without MEDHAYA HOSPITALITY PRIVATE LIMITED's prior written consent.</span>
                    </li>
                    
                    <li className="flex gap-3">
                      <span className="text-blue font-bold">•</span>
                      <span>Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.</span>
                    </li>
                    
                    <li className="flex gap-3">
                      <span className="text-blue font-bold">•</span>
                      <span>We shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2"><strong>More Information:</strong></p>
                  <a 
                    href="https://merchant.razorpay.com/policy/RjrDHqaAYjohG6/terms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue hover:text-navy-dark font-semibold transition-colors duration-300"
                  >
                    View Full Terms & Conditions →
                  </a>
                </div>
              </div>
            )}
          </section>

          {/* Shipping & Delivery Policy Section */}
          <section className="mb-8 border rounded-lg">
            <button
              onClick={() => toggleSection('shipping')}
              className="w-full p-6 bg-navy-dark text-white text-left font-bold text-xl hover:bg-navy transition-colors duration-300 flex justify-between items-center"
            >
              <span>Shipping & Delivery Policy</span>
              <span className="text-2xl">{expandedSections.shipping ? '−' : '+'}</span>
            </button>
            
            {expandedSections.shipping && (
              <div className="p-6 space-y-4 bg-white">
                <p className="text-sm text-gray-500">Last updated on Nov 28, 2025</p>
                
                <p className="text-gray-700">
                  For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and/or speed post only.
                </p>

                <p className="text-gray-700">
                  Orders are shipped within 0-7 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms.
                </p>

                <p className="text-gray-700">
                  <strong>MEDHAYA HOSPITALITY PRIVATE LIMITED</strong> is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 0-7 days from the date of the order and payment or as per the delivery date agreed at the time of order confirmation.
                </p>

                <p className="text-gray-700">
                  Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg my-4">
                  <p className="text-gray-700 mb-2"><strong>For any issues:</strong></p>
                  <p className="text-gray-700">
                    Contact our helpdesk:<br />
                    📞 <a href="tel:+918197681931" className="text-blue hover:text-navy-dark font-semibold">8197681931</a><br />
                    📧 <a href="mailto:medhaya@mazville.com" className="text-blue hover:text-navy-dark font-semibold">medhaya@mazville.com</a>
                  </p>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2"><strong>More Information:</strong></p>
                  <a 
                    href="https://merchant.razorpay.com/policy/RjrDHqaAYjohG6/shipping" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue hover:text-navy-dark font-semibold transition-colors duration-300"
                  >
                    View Full Shipping Policy →
                  </a>
                </div>
              </div>
            )}
          </section>

          {/* Cancellation & Refund Policy Section */}
          <section className="mb-8 border rounded-lg">
            <button
              onClick={() => toggleSection('cancellation')}
              className="w-full p-6 bg-navy-dark text-white text-left font-bold text-xl hover:bg-navy transition-colors duration-300 flex justify-between items-center"
            >
              <span>Cancellation & Refund Policy</span>
              <span className="text-2xl">{expandedSections.cancellation ? '−' : '+'}</span>
            </button>
            
            {expandedSections.cancellation && (
              <div className="p-6 space-y-4 bg-white">
                <p className="text-sm text-gray-500">Last updated on Nov 28, 2025</p>

                <p className="text-gray-700">
                  <strong>MEDHAYA HOSPITALITY PRIVATE LIMITED</strong> believes in helping its customers as far as possible, and has therefore a liberal cancellation policy.
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue pl-4">
                    <h4 className="font-semibold text-navy-dark mb-2">Cancellation Terms</h4>
                    <p className="text-gray-700">
                      Cancellations will be considered only if the request is made within 7 days of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue pl-4">
                    <h4 className="font-semibold text-navy-dark mb-2">Perishable Items</h4>
                    <p className="text-gray-700">
                      <strong>MEDHAYA HOSPITALITY PRIVATE LIMITED</strong> does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue pl-4">
                    <h4 className="font-semibold text-navy-dark mb-2">Damaged or Defective Items</h4>
                    <p className="text-gray-700">
                      In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 7 days of receipt of the products.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue pl-4">
                    <h4 className="font-semibold text-navy-dark mb-2">Product Quality Complaints</h4>
                    <p className="text-gray-700">
                      In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 7 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue pl-4">
                    <h4 className="font-semibold text-navy-dark mb-2">Manufacturer Warranty</h4>
                    <p className="text-gray-700">
                      In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue pl-4">
                    <h4 className="font-semibold text-navy-dark mb-2">Refund Processing</h4>
                    <p className="text-gray-700">
                      In case of any Refunds approved by the <strong>MEDHAYA HOSPITALITY PRIVATE LIMITED</strong>, it'll take 1-2 days for the refund to be processed to the end customer.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2"><strong>More Information:</strong></p>
                  <a 
                    href="https://merchant.razorpay.com/policy/RjrDHqaAYjohG6/refund" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue hover:text-navy-dark font-semibold transition-colors duration-300"
                  >
                    View Full Cancellation & Refunds Policy →
                  </a>
                </div>
              </div>
            )}
          </section>

          {/* Contact Info */}
          <section className="mt-12 p-6 bg-navy-dark text-white rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="mb-4">Contact our customer service team for any questions or concerns regarding these policies.</p>
            <div className="space-y-2">
              <p>📞 <a href="tel:+918197681931" className="hover:text-blue transition-colors duration-300">+91 8197681931</a></p>
              <p>📧 <a href="mailto:medhaya@mazville.com" className="hover:text-blue transition-colors duration-300">medhaya@mazville.com</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
