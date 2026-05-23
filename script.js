// Live AI Demo (uses OpenAI - add your key later)
document.getElementById('runDemo').addEventListener('click', async () => {
    const type = document.getElementById('demoType').value;
    const topic = document.getElementById('demoInput').value;
    
    if (!topic) {
        alert('Please enter a topic');
        return;
    }
    
    document.getElementById('demoLoading').style.display = 'block';
    
    // For demo without backend, show sample response
    // Replace this with actual API call when you have backend
    
    setTimeout(() => {
        let response = '';
        if (type === 'captions') {
            response = `📱 INSTAGRAM CAPTIONS:\n\n1. "${topic}" but make it aesthetic ✨\n2. Your daily dose of ${topic} 💪\n3. Stop scrolling, start ${topic.split(' ')[0]}ing 🚀\n4. The secret to ${topic} nobody tells you 🤫\n5. ${topic.toUpperCase()} = best decision ever 🔥\n\n#${topic.split(' ')[0]} #motivation #success`;
        } else if (type === 'script') {
            response = `🎬 YOUTUBE SCRIPT OUTLINE:\n\nINTRO (0:00-0:30): Hook about ${topic}\nSECTION 1 (0:30-2:00): Why ${topic} matters\nSECTION 2 (2:00-4:00): Step-by-step guide\nSECTION 3 (4:00-6:00): Common mistakes\nOUTRO (6:00-7:00): Call to action`;
        } else {
            response = `💡 VIDEO IDEAS FOR "${topic}":\n\n1. "I tried ${topic} for 30 days - here's what happened"\n2. "10 ${topic} hacks that actually work"\n3. "The dark side of ${topic}"\n4. "${topic} for beginners - complete guide"\n5. "How I make $1000 with ${topic}"`;
        }
        document.getElementById('demoOutput').innerHTML = response;
        document.getElementById('demoLoading').style.display = 'none';
    }, 1000);
});

// Contact Form
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };
    
    document.getElementById('formStatus').innerHTML = 'Sending...';
    
    // This will work when you add backend
    // For now, simulate success
    setTimeout(() => {
        document.getElementById('formStatus').innerHTML = '✅ Message sent! We will contact you within 24 hours.';
        document.getElementById('contactForm').reset();
    }, 1000);
});

// Smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
