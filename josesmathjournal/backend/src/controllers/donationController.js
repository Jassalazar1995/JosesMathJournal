// // Controller for handling donations
// // Handles the logic for processing donations, communicating with the Stripe API, and possibly recording transaction details in your database.

// const { processDonation } = require('../utils/stripeHelper');

// exports.donate = async (req, res) => {
//     try {
//         const { amount, source } = req.body; // `source` is the token created by Stripe on the frontend
//         if (!amount || !source) {
//             return res.status(400).json({ message: 'Amount and source are required' });
//         }

//         const donation = await processDonation(amount, source);
//         res.status(200).json({ success: true, donationId: donation.id, message: 'Donation successful' });
//     } catch (error) {
//         res.status(500).json({ success: false, message: 'Donation failed', error: error.message });
//     }
// };
