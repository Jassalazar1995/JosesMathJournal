// // Utility for Stripe integration
// // A dedicated file for Stripe API interaction logic. This could includes functions for creating charges, handling , etc

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// exports.processDonation = async (amount, source) => {
//     try {
//         const donation = await stripe.charges.create({
//             amount: amount, // Amount is in cents
//             currency: 'usd',
//             source: source,
//             description: 'Donation'
//         });
//         return donation;
//     } catch (error) {
//         console.error('Stripe error:', error);
//         throw error;
//     }
// };
