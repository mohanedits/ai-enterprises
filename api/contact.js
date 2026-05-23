export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { name, email, service, message } = req.body;
    
    // You can add email sending here using SendGrid, Resend, etc.
    
    res.status(200).json({ success: true, message: 'Form submitted' });
}
