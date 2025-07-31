import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-white shadow-md z-10">
        <nav className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Terms & Conditions</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-8 text-gray-800 space-y-6">
        <p>
          <strong>Recognitions</strong>
        </p>
        <p>
          We want to start by saying Thank you for booking or even considering traveling with Iglo Tours & Travel as it is always an honor to add more names to the list of our satisfied clients.
        </p>

        <p>
          <strong>Payment & Cancellation Policy</strong>
        </p>
        <p>
          When conducting a form of official business dealings, there are always terms and conditions to govern all the aspects of this agreement. The moment you book one of our Tours Packages, you will, in turn, accept & agree on these terms and conditions so make sure you read them carefully.
        </p>

        <p>
          <strong>To Secure Your Payment</strong>
        </p>
        <p>
          In order to fully secure your payment, you should inform Iglo Tours & Travel of your request as from the moment you contact us, we will discuss and finalize all details and arrangements concerning your tour and send the completed itinerary for the final confirmation. After you have confirmed all the details in the itinerary as agreed, you will need to pay the deposit as discussed by wire transfer or a credit card or online transaction.
        </p>

        <p>
          <strong>Amendments by the Client</strong>
        </p>
        <p>
          While booking your tour with us, you will find it so easy and very flexible to book the tour you want and you may need to do some changes to the initial itinerary to fit your needs and we will discuss all options with you to arrange the best possible tour you deserve. You can let our operation department know all of your requirements, whether you would like to add or remove anything and they will inform you if it is a good choice from your side or not. Our team will check the availability, rates, and offer you the best possible organized tour you can imagine.
        </p>

        <p>
          <strong>Payment Policy</strong>
        </p>
        <p>
          All the reservations should be made very early before booking the required vacation. A spot on the given tour will be secured upon receiving the required deposit that is estimated based on the required tour, the number of travelers, and the required date of the tour. The deposit will of course count as part of your final payment.
        </p>

        <p>
          <strong>Confirmation of Travel Packages</strong>
        </p>
        <p>
          We request 50% of the total cost of your tour as a deposit payment. Kindly note that your booking should be made as early as possible to guarantee the availability of your tour and once we receive your deposit, it is going to be our responsibility to start your booking procedures based on the required date of the tour, the number of travelers, and of course, the required tour package.
        </p>
        <p>
          Paying the deposit is now much easier than ever as we will create a secured link for you with the agreed-on deposit and then you can use it in a very smooth way to send us the deposit.
        </p>
        <p>
          No need to send us any information regarding your Credit, or Debit Cards details and you can only use the secured link provided from our side to have a successful transaction throughout a secured payment gateway.
        </p>

        <p>
          <strong>Cancellation Policy of Iglo Tours & Travel</strong>
        </p>
        <p>
          All the cancellation requests should be sent through an email to provide the Company with written confirmation that confirms your reservation should be canceled. In case you cancel your trip, the following scale of charges will be applied:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>61 days before your arrival date: 25% of the entire tour price will be charged as a cancellation fee.</li>
          <li>Between 60 and 31 days before your arrival date: 50% of the total tour price will be charged as a cancellation fee.</li>
          <li>Between 30 and 15 days before your arrival date: 75% of the total tour price will be charged as a cancellation fee.</li>
          <li>Between 14 and 1 days before your arrival date: 100% of the total tour price will be charged as a cancellation fee.</li>
        </ul>

        <p>
          <strong>Non-refundable services:</strong> Some of our services may be considered non-refundable. This means that once the service has been booked and payment has been made, we cannot issue a refund regardless of the circumstances. We apologize for any inconvenience this may cause.
        </p>

        <p>
          <strong>Unforeseen Events:</strong> In situations where cancellations are requested due to events beyond our control, such as adverse weather conditions, natural disasters (e.g., earthquakes, hurricanes), political unrest, or other force majeure events, we regret to inform you that we cannot provide a refund. These events are unpredictable and beyond the scope of our responsibility. We will always be by your side to seek the best possible alternatives.
        </p>

        <p>
          <strong>How to make a cancellation:</strong> If you wish to cancel a service, we kindly ask that you notify us as soon as possible. Depending on the nature of the service and the timing of the cancellation, we may be able to offer alternative options or change dates for future use. However, please note that this is subject to our discretion and availability.
        </p>

        <p>
          <strong>Refunds</strong>
        </p>
        <p>
          All refunds will be performed through the same account, in the same method of the original payment. No Refunds will be possible in the event of a no-show for a present reservation.
        </p>
        <p>
          Once the tour has started, no refund for any unused portion or part of the tour or services to be provided will be given. If you want to make any changes to the tour, or depart the tour early, such alteration or departure will be entirely at your own expense and liability. You will also need to communicate in writing to the tour operator your reason for leaving the tour.
        </p>

        <p>
          <strong>Postponing Your Tour</strong>
        </p>
        <p>
          In case you need to modify or reschedule a service, we will do our best to attend to your request, subject to availability. However, please note that any changes made may be subject to additional charges. After reaching an agreement with us of postponing your tour and then you decide to cancel your booking for any reason, then our cancellation policy will be applicable.
        </p>

        <p>
          <strong>Price Stability Clause</strong>
        </p>
        <p>
          Once the full payment or deposit has been made, the agreed-upon price shall be considered final and binding for both parties. Under no circumstances will we request any additional payment or price increase, nor will the customer be permitted to request a reduction in the agreed-upon price. This ensures a fair and transparent agreement for all parties involved.
        </p>

        <p className="mt-8 text-sm text-gray-600">
          Last updated: July 29, 2025
        </p>
      </main>

      {/* Sticky Footer */}
      <footer className="sticky bottom-0 bg-white shadow-inner">
        <div className="max-w-3xl mx-auto px-4 py-3 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Iglo Tours & Travel. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
