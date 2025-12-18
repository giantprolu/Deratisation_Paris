import { PhoneCall, Mail, MapPin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import ProtectedEmail from './ProtectedEmail';

const Contact = () => {
  const [state, handleSubmit] = useForm("mkgqybgb");
  const handlePhoneClick = () => {
    window.location.href = 'tel:0767393885';
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
              Demande de devis
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Contactez-Nous</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obtenez un devis gratuit et sans engagement en 24h
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              {state.succeeded ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé avec succès !</h3>
                  <p className="text-gray-600 mb-6">Nous vous répondrons dans les plus brefs délais.</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center gap-2 px-6 py-3 text-white bg-primary-600 hover:bg-primary-dark rounded-lg transition-colors duration-300"
                  >
                    Envoyer un nouveau message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                      placeholder="votre@email.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service souhaité</label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option>Dératisation</option>
                      <option>Désinsectisation</option>
                      <option>Désinfection</option>
                      <option>Dépigeonnage</option>
                      <option>Hygiène du bâtiment</option>
                      <option>Débarras Pro</option>
                      <option>Assainissement</option>
                      <option>Nids de Guêpes et Frelons</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors resize-none"
                      placeholder="Décrivez votre besoin..."
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg p-8 border border-primary-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h3>
                <div className="space-y-6">
                  <button onClick={handlePhoneClick} className="flex items-start gap-4 w-full text-left group">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-dark transition-colors">
                      <PhoneCall className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Téléphone</div>
                      <div className="text-primary-600 hover:text-primary-dark">07 67 39 38 85</div>
                      <div className="text-sm text-gray-500">Disponible 24h/24 & 7j/7</div>
                    </div>
                  </button>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Zone d'intervention</div>
                      <div className="text-gray-600">Île-de-France</div>
                      <div className="text-sm text-gray-500">Basés à Bondy (93)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80717.75810027313!2d2.2646344809035113!3d48.858825492060404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e1!3m2!1sfr!2sfr!4v1739204594932!5m2!1sfr!2sfr"
                  width="600"
                  height="450"
                  loading="lazy"
                  title="Carte de localisation"
                  className="w-full h-full"
                ></iframe>
              </div> */}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;