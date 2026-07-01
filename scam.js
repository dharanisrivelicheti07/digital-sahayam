// ===== UI TRANSLATION DICTIONARY =====
const UI_TEXT = {
  back: { te: '← తిరిగి వెళ్ళు', en: '← Back' },
  title: { te: '🛡️ స్కామ్ సిమ్యులేటర్', en: '🛡️ Scam Simulator' },
  subtitle: { te: 'రియల్ లేదా ఫేక్? కనుక్కోండి!', en: 'Real or Fake? Find out!' },
  scoreLabel: { te: 'మీ స్కోర్', en: 'Your Score' },
  restart: { te: '🔄 మళ్ళీ ఆడండి', en: '🔄 Play Again' },
  home: { te: '🏠 హోమ్ కి వెళ్ళు', en: '🏠 Go to Home' }
};

// ===== ALL SCAM QUESTIONS BANK (30 questions) =====
const ALL_QUESTIONS = [
  {
    type: 'whatsapp',
    badge: 'badge-whatsapp',
    isReal: false,
    sender: { te: 'WhatsApp మెసేజ్', en: 'WhatsApp Message' },
    message: {
      te: '🏆 అభినందనలు! మీరు KBC లాటరీ లో ₹25,00,000 గెలుచుకున్నారు! క్లెయిమ్ చేసుకోవడానికి ఈ నంబర్ కి కాల్ చేయండి: 9876543210. Tax కోసం ₹5,000 ముందే పంపాలి.',
      en: 'Congratulations! You won ₹25,00,000 in KBC Lottery! Call 9876543210 to claim. Send ₹5,000 tax first.'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! KBC అసలు ఎప్పుడూ WhatsApp లో prize announce చేయదు. "Tax కోసం ముందు డబ్బు పంపు" అంటే 100% scam. ఈ message delete చేయండి.',
      en: '❌ SCAM! KBC never announces prizes on WhatsApp. Asking for money upfront is always a scam. Delete this message.'
    }
  },
  {
    type: 'sms',
    badge: 'badge-sms',
    isReal: true,
    sender: { te: 'SBI-SMS', en: 'SBI-SMS' },
    message: {
      te: 'SBI: రూ.500 మీ A/c XX1234 లో debit అయింది తేది 14-06-2026. Balance: రూ.12,450. Not you? sbi.co.in/report కి వెళ్ళండి.',
      en: 'SBI: Rs.500 debited from A/c XX1234 on 14-06-2026. Balance: Rs.12,450. Not you? Visit sbi.co.in/report'
    },
    explanation: {
      te: '✅ ఇది real! Bank SMS ఎప్పుడూ OTP, password, లేదా link click అడగదు. ఇది just balance notification. ఇది safe.',
      en: '✅ REAL! Bank SMS never asks for OTP, password, or to click links. This is just a balance notification. Safe.'
    }
  },
  {
    type: 'whatsapp',
    badge: 'badge-whatsapp',
    isReal: false,
    sender: { te: 'Aadhaar Official (అని claim చేస్తోంది)', en: 'Aadhaar Official (claimed)' },
    message: {
      te: '⚠️ మీ Aadhaar card 24 గంటల్లో block అవుతుంది! వెంటనే ఈ link click చేయండి: aadhaar-update.in/verify మీ phone నంబర్ మరియు OTP enter చేయండి.',
      en: '⚠️ Your Aadhaar will be blocked in 24 hours! Click: aadhaar-update.in/verify and enter your phone and OTP.'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! UIDAI (Aadhaar) ఎప్పుడూ WhatsApp messages పంపదు. "Block అవుతుంది" అని భయపెట్టడం scam technique. uidai.gov.in మాత్రమే official site.',
      en: '❌ SCAM! UIDAI never sends WhatsApp messages. Threatening "account will be blocked" is a scare tactic. Official site is only uidai.gov.in'
    }
  },
  {
    type: 'call',
    badge: 'badge-call',
    isReal: false,
    sender: { te: 'Phone Call — 9988776655', en: 'Phone Call — 9988776655' },
    message: {
      te: '"నమస్కారం, నేను SBI bank officer మాట్లాడుతున్నాను. మీ account లో suspicious activity కనుగొన్నాం. మీ debit card OTP చెప్పండి, account protect చేస్తాం."',
      en: '"Hello, I am calling from SBI bank. Suspicious activity found in your account. Please tell me your debit card OTP to protect your account."'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! Bank ఎప్పుడూ phone లో OTP అడగదు. అడిగిన వెంటనే call disconnect చేయండి. OTP = PIN = Password — ఎవరికీ చెప్పకండి!',
      en: '❌ SCAM! Banks NEVER ask for OTP on phone. Disconnect immediately. Never share OTP/PIN/Password with anyone!'
    }
  },
  {
    type: 'sms',
    badge: 'badge-sms',
    isReal: true,
    sender: { te: 'AMZN-IN', en: 'AMZN-IN' },
    message: {
      te: 'Amazon: మీ order #408-123456 dispatch అయింది. Delivery by 16-Jun-2026. Track: amzn.in/tr?id=ABC123',
      en: 'Amazon: Your order #408-123456 has been dispatched. Expected delivery 16-Jun-2026. Track: amzn.in/tr?id=ABC123'
    },
    explanation: {
      te: '✅ ఇది real! Amazon SMS లో అధికారిక order number, amzn.in link మాత్రమే ఉంటాయి. Payment, OTP అడగదు. ఇది safe.',
      en: '✅ REAL! Amazon SMS only contains official order numbers and amzn.in links. Never asks for payment or OTP. Safe.'
    }
  },
  {
    type: 'email',
    badge: 'badge-email',
    isReal: false,
    sender: { te: 'email: income-tax-refund@gmail.com', en: 'email: income-tax-refund@gmail.com' },
    message: {
      te: '💰 Income Tax Department: మీకు ₹18,500 refund వస్తుంది! 48 గంటల్లో claim చేయకపోతే cancel అవుతుంది. ఇప్పుడే click చేయండి: incometax-refund.co.in',
      en: '💰 Income Tax Dept: You have a ₹18,500 refund! Claim within 48 hours or it will be cancelled. Click now: incometax-refund.co.in'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! Government ఎప్పుడూ Gmail నుంచి mail పంపదు. Official IT email @incometax.gov.in మాత్రమే. "48 గంటల్లో" అని urgent చేయడం scam sign.',
      en: '❌ SCAM! Government never emails from Gmail. Official IT email is @incometax.gov.in only. Creating fake urgency ("48 hours") is a scam sign.'
    }
  },
  {
    type: 'whatsapp',
    badge: 'badge-whatsapp',
    isReal: false,
    sender: { te: 'Unknown WhatsApp — "మీ మనవడు"', en: 'Unknown WhatsApp — "your grandson"' },
    message: {
      te: '"నాన్నమ్మా, నేను accident లో ఉన్నాను. Hospital bill కోసం ₹50,000 వెంటనే పంపు. Phone off అవుతోంది. ఈ account కి transfer చేయి: A/C 1234567890, IFSC: HDFC0001234"',
      en: '"Grandma, I had an accident. Send ₹50,000 immediately for hospital bill. My phone is dying. Transfer to: A/C 1234567890, IFSC: HDFC0001234"'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! "Family emergency" చెప్పి డబ్బు అడగడం famous scam. వెంటనే family member కి directly call చేయండి. ఎప్పుడూ verify చేయకుండా పంపకండి.',
      en: '❌ SCAM! "Family emergency" money requests are a classic scam. Call your family member directly first. Never send money without verification.'
    }
  },
  {
    type: 'sms',
    badge: 'badge-sms',
    isReal: true,
    sender: { te: 'ITDEPT', en: 'ITDEPT' },
    message: {
      te: 'Income Tax: మీ ITR-1 filed చేశారు. Acknowledgement number: 123456789012345. Refund process అవుతుంది. incometax.gov.in లో status చెక్ చేయండి.',
      en: 'Income Tax: Your ITR-1 has been filed. Ack No: 123456789012345. Refund will be processed. Check status at incometax.gov.in'
    },
    explanation: {
      te: '✅ ఇది real! Official IT SMS ITDEPT sender ID తో వస్తుంది. Link click అడగదు, డబ్బు అడగదు. incometax.gov.in official site.',
      en: '✅ REAL! Official IT SMS comes from ITDEPT sender ID. Does not ask to click links or send money. incometax.gov.in is official.'
    }
  },
  {
    type: 'whatsapp',
    badge: 'badge-whatsapp',
    isReal: false,
    sender: { te: 'WhatsApp — "TATA Lottery"', en: 'WhatsApp — "TATA Lottery"' },
    message: {
      te: '🎉 TATA Group Anniversary Lottery! మీరు iPhone 15 Pro + ₹5 Lakh గెలుచుకున్నారు! Claim చేయడానికి ₹1,500 registration fee పంపండి. WhatsApp Pay ద్వారా.',
      en: '🎉 TATA Group Anniversary Lottery! You won iPhone 15 Pro + ₹5 Lakh! Send ₹1,500 registration fee via WhatsApp Pay to claim.'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! TATA group WhatsApp lotteries నిర్వహించదు. Prize claim కోసం fee అడగడం 100% scam. ఎప్పుడూ fee పంపకండి.',
      en: '❌ SCAM! TATA group does not run WhatsApp lotteries. Asking for a fee to claim a prize is always a scam. Never pay any fee.'
    }
  },
  {
    type: 'call',
    badge: 'badge-call',
    isReal: false,
    sender: { te: 'Call — "TRAI Officer"', en: 'Call — "TRAI Officer"' },
    message: {
      te: '"మీ mobile number 2 గంటల్లో disconnect అవుతుంది. KYC update లేకపోవడం వల్ల. వెంటనే Aadhaar number మరియు OTP చెప్పండి."',
      en: '"Your mobile number will be disconnected in 2 hours due to pending KYC. Share your Aadhaar number and OTP immediately."'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! TRAI ఎప్పుడూ phone లో directly contact చేయదు. "Number disconnect అవుతుంది" అని భయపెట్టి scam చేయడం. Call drop చేయండి.',
      en: '❌ SCAM! TRAI never calls individuals directly. Threatening "number disconnection" is a scare tactic. Drop the call immediately.'
    }
  },
  {
    type: 'sms',
    badge: 'badge-sms',
    isReal: false,
    sender: { te: 'AD-HDFC Bank (fake)', en: 'AD-HDFC Bank (fake)' },
    message: {
      te: 'HDFC: మీ account temporarily blocked. Unblock కోసం ఇప్పుడే click చేయండి: hdfcbank-kyc.net/update మీ card details enter చేయండి.',
      en: 'HDFC: Your account is temporarily blocked. Click to unblock: hdfcbank-kyc.net/update and enter your card details.'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! HDFC bank official site hdfcbank.com మాత్రమే. "hdfcbank-kyc.net" fake site. Bank ఎప్పుడూ SMS లో card details అడగదు. Delete చేయండి.',
      en: '❌ SCAM! HDFC official site is hdfcbank.com only. "hdfcbank-kyc.net" is a fake phishing site. Banks never ask for card details via SMS.'
    }
  }
];

// ===== GAME STATE =====
let questions = [];
let currentQ = 0;
let score = 0;
let answered = false;
let lang = 'te';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function updateUIText() {
  // Update static UI text elements based on selected language
  document.getElementById('ui-back').textContent = UI_TEXT.back[lang];
  document.getElementById('ui-title').textContent = UI_TEXT.title[lang];
  document.getElementById('ui-subtitle').textContent = UI_TEXT.subtitle[lang];
  document.getElementById('ui-score-label').textContent = UI_TEXT.scoreLabel[lang];
  document.getElementById('ui-restart').textContent = UI_TEXT.restart[lang];
  document.getElementById('ui-home').textContent = UI_TEXT.home[lang];
}

function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('lang-' + l).classList.add('active');
  
  updateUIText();
  renderQuestion();
}

function startGame() {
  questions = shuffle(ALL_QUESTIONS).slice(0, 10);
  currentQ = 0;
  score = 0;
  answered = false;
  
  updateUIText(); // Ensure UI starts in correct language
  
  document.getElementById('scoreScreen').style.display = 'none';
  document.getElementById('gameArea').style.display = 'block';
  renderQuestion();
}

function renderQuestion() {
  if (currentQ >= questions.length) { showScore(); return; }
  const q = questions[currentQ];

  // If this question was already answered before switching languages, keep it in the answered state.
  // Otherwise, reset buttons for the new question.
  if (!answered) {
    document.getElementById('resultCard').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('btnReal').disabled = false;
    document.getElementById('btnFake').disabled = false;
  }

  // Progress
  const pct = (currentQ / questions.length) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('qCounter').textContent = `${currentQ + 1} / ${questions.length}`;

  // Badge Translation
  const badge = document.getElementById('qBadge');
  badge.className = 'q-type-badge ' + q.badge;
  const typeLabels = {
    whatsapp: { te: '💬 WhatsApp మెసేజ్', en: '💬 WhatsApp Message' },
    sms:      { te: '📱 SMS మెసేజ్', en: '📱 SMS Message' },
    call:     { te: '📞 Phone Call', en: '📞 Phone Call' },
    email:    { te: '📧 Email', en: '📧 Email' },
    app:      { te: '📲 App / Online', en: '📲 App / Online' }
  };
  badge.textContent = typeLabels[q.type][lang];

  // Sender Translation
  document.getElementById('msgSender').textContent = q.sender[lang];

  // DOM Visibility Logic for the Question Message
  document.getElementById('msgTelugu').textContent = q.message.te;
  document.getElementById('msgEnglish').textContent = q.message.en;

  const realBtn = document.getElementById('btnReal');
  const fakeBtn = document.getElementById('btnFake');

  if (lang === 'te') {
    // Show only Telugu, hide English
    document.getElementById('msgTelugu').style.display = 'block';
    document.getElementById('msgEnglish').style.display = 'none';
    realBtn.innerHTML = '✅ ఇది Real';
    fakeBtn.innerHTML = '❌ ఇది Fake / స్కామ్';
  } else {
    // Show only English, hide Telugu
    document.getElementById('msgTelugu').style.display = 'none';
    document.getElementById('msgEnglish').style.display = 'block';
    realBtn.innerHTML = '✅ This is Real';
    fakeBtn.innerHTML = '❌ This is Fake / Scam';
  }
  
  // If the user already answered, make sure the result card updates its language instantly
  if (answered) {
    updateResultCardLanguage();
    updateNextButtonText();
  }
}

function answer(choice) {
  if (answered) return;
  answered = true;

  const q = questions[currentQ];
  const correct = (choice === 'real' && q.isReal) || (choice === 'fake' && !q.isReal);

  if (correct) score++;

  // Disable buttons
  document.getElementById('btnReal').disabled = true;
  document.getElementById('btnFake').disabled = true;

  // Setup the Result Card
  const rc = document.getElementById('resultCard');
  rc.className = 'result-card ' + (correct ? 'correct' : 'wrong');
  rc.style.display = 'block';
  document.getElementById('resultIcon').textContent = correct ? '✅' : '❌';
  
  document.getElementById('resultTelugu').textContent = q.explanation.te;
  document.getElementById('resultEnglish').textContent = q.explanation.en;

  updateResultCardLanguage();

  // Show Next button
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.style.display = 'block';
  updateNextButtonText();
}

// Helper to handle Result text visibility
function updateResultCardLanguage() {
  if (lang === 'te') {
    document.getElementById('resultTelugu').style.display = 'block';
    document.getElementById('resultEnglish').style.display = 'none';
  } else {
    document.getElementById('resultTelugu').style.display = 'none';
    document.getElementById('resultEnglish').style.display = 'block';
  }
}

// Helper to handle the "Next" button text translation
function updateNextButtonText() {
  const nextBtn = document.getElementById('nextBtn');
  if (currentQ + 1 >= questions.length) {
    nextBtn.textContent = lang === 'te' ? '🏆 స్కోర్ చూడండి' : '🏆 See Score';
  } else {
    nextBtn.textContent = lang === 'te' ? 'తదుపరి ప్రశ్న →' : 'Next Question →';
  }
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= questions.length) { showScore(); return; }
  answered = false; // Reset answer state for the new question
  renderQuestion();
}

function showScore() {
  document.getElementById('gameArea').style.display = 'none';
  const ss = document.getElementById('scoreScreen');
  ss.style.display = 'block';

  document.getElementById('finalScore').textContent = `${score} / ${questions.length}`;

  const pct = score / questions.length;
  let emoji, msg;

  if (pct >= 0.9) {
    emoji = '🏆';
    msg = lang === 'te'
      ? 'అద్భుతం! మీరు డిజిటల్ స్కామ్స్ గురించి చాలా బాగా తెలుసుకున్నారు. మీ ఫ్యామిలీకి కూడా చెప్పండి!'
      : 'Excellent! You know digital scams very well. Share this knowledge with your family!';
  } else if (pct >= 0.7) {
    emoji = '👍';
    msg = lang === 'te'
      ? 'చాలా బాగుంది! కొంచెం ప్రాక్టీస్ తో మీరు ఎక్స్‌పర్ట్ అవుతారు. మళ్ళీ ట్రై చేయండి!'
      : 'Good job! With a little more practice you will be an expert. Try again!';
  } else if (pct >= 0.5) {
    emoji = '📚';
    msg = lang === 'te'
      ? 'నేర్చుకుంటున్నారు! గుర్తుంచుకోండి: తొందరపెట్టడం + డబ్బు అడగడం + లింక్ నొక్కమనడం = SCAM.'
      : 'Keep learning! Remember: urgency + money + link = SCAM. Try again!';
  } else {
    emoji = '💪';
    msg = lang === 'te'
      ? 'పర్వాలేదు! ప్రాక్టీస్ తో నేర్చుకుంటారు. గోల్డెన్ రూల్: ఎవరైనా ఫోన్ లో డబ్బు అడిగితే — అది SCAM!'
      : 'Don\'t worry! Practice makes perfect. Golden rule: Anyone asking for money on phone = SCAM!';
  }

  document.getElementById('scoreEmoji').textContent = emoji;
  document.getElementById('scoreMessage').textContent = msg;
}

// Init on load
window.onload = startGame;
