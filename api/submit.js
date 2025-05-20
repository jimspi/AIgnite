
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = '';
  await new Promise((resolve) => {
    req.on('data', chunk => body += chunk);
    req.on('end', resolve);
  });

  const formData = new URLSearchParams(body);
  console.log('Form submission:', Object.fromEntries(formData));

  res.status(200).json({ success: true, message: 'Form submitted successfully.' });
}
