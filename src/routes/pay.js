import axios from 'axios';

export async function post({ body }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js

	const res = await axios({
		url: 'https://transactions-api.stagingsimpl.com/api/v4/check_eligibility',
		method: 'POST',
		headers: { Authorization: '2288e2698c572488c83b7409c04ffe19' },
		data: { amount_in_paise: 50000, phone_number: body.phone_number }
	});
	const redirection_url = res.data.data.redirection_url;

	return {
		body: { redirection_url }
	};
}
