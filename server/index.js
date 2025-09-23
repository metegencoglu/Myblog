const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
// Server configuration
const PORT = process.env.PORT || 3003;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Email API endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Tüm alanlar doldurulmalıdır.'
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Geçerli bir email adresi giriniz.'
      });
    }

    // Email gönderme işlemini try-catch ile koru
    try {
      const transporter = createTransporter();
      
      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER,
        // Use EMAIL_TO env var if provided, otherwise fall back to the original address
        to: process.env.EMAIL_TO || 'oguzalp@oguzalpsoft.com',
        // Set Reply-To to the visitor's email so the recipient can reply directly
        replyTo: `${name} <${email}>`,
        subject: `Website İletişim Formu: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0A3D62; border-bottom: 2px solid #eee; padding-bottom: 10px;">
              Yeni İletişim Formu Mesajı
            </h2>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Gönderen Bilgileri:</h3>
              <p><strong>İsim:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Konu:</strong> ${subject}</p>
            </div>
            
            <div style="background: #fff; padding: 20px; border-left: 4px solid #0A3D62; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Mesaj:</h3>
              <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 0; color: #1976d2; font-size: 14px;">
                Bu mesaj oguzalpsoft.com web sitesindeki iletişim formu aracılığıyla gönderilmiştir.
              </p>
            </div>
          </div>
        `
      };

      // Send email
      await transporter.sendMail(mailOptions);
      
      res.status(200).json({
        success: true,
        message: 'Mesajınız başarıyla gönderildi!'
      });
      
    } catch (emailError) {
      console.error('Email gönderimi hatası (ancak server kapanmayacak):', emailError.message);
      
      // Email hatası olsa bile success döndür - server kapanmasın
      res.status(200).json({
        success: true,
        message: 'Mesajınız alındı! (Email konfigürasyonu kontrol edilecek)'
      });
    }

  } catch (error) {
    console.error('Genel API hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

// Test email endpoint
app.get('/test-email', async (req, res) => {
  try {
    console.log('Testing email configuration...');
    const transporter = createTransporter();
    
    // Test email configuration
    const testResult = await transporter.verify();
    console.log('Email config test result:', testResult);
    
    res.json({ 
      success: true, 
      message: 'Email configuration is working',
      verified: testResult
    });
  } catch (error) {
    console.error('Email test error:', error);
    res.status(500).json({
      success: false,
      message: 'Email configuration error',
      error: error.message
    });
  }
});

// Start server with better error handling
const server = app.listen(PORT, () => {
  console.log(`✅ Server ${PORT} portunda çalışıyor`);
  console.log(`🌐 http://localhost:${PORT} adresinde test edebilirsiniz`);
  console.log(`📧 Email konfigürasyonu kontrol ediliyor...`);
  
  // Test email configuration on startup
  setTimeout(async () => {
    try {
      const transporter = createTransporter();
      await transporter.verify();
      console.log('✅ Email konfigürasyonu başarılı');
    } catch (error) {
      console.log('⚠️  Email konfigürasyonu sorunlu, ancak server çalışıyor:', error.message);
    }
  }, 1000);
  
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} zaten kullanımda`);
    console.error('Şu komutu çalıştırın: taskkill /F /IM node.exe');
    process.exit(1);
  } else {
    console.error('❌ Server hatası:', err);
  }
});

// Graceful shutdown handling
function gracefulShutdown(signal) {
  console.log(`\n📱 ${signal} sinyali alındı, server güvenli şekilde kapatılıyor...`);
  server.close(() => {
    console.log('✅ Server güvenli şekilde kapatıldı');
    process.exit(0);
  });
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Uncaught exception handling - server'ı KAPAMA!
process.on('uncaughtException', (error) => {
  console.error('⚠️  Yakalanmamış hata:', error.message);
  console.error('📍 Hata yeri:', error.stack);
  console.log('🚀 Server çalışmaya devam ediyor...\n');
  // Server'ı KAPAMA - sadece log kaydet
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('⚠️  Yakalanmamış Promise reddi:', reason);
  console.error('📍 Promise:', promise);
  console.log('🚀 Server çalışmaya devam ediyor...\n');
  // Server'ı KAPAMA - sadece log kaydet
});

// Keep alive - server'ın çalıştığını göster
setInterval(() => {
  console.log(`🔄 Server çalışıyor - Port: ${PORT} - Zaman: ${new Date().toLocaleTimeString('tr-TR')}`);
}, 300000); // Her 5 dakikada bir