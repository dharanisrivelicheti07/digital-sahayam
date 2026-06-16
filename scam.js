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
      te: '❌ ఇది స్కామ్! TRAI ఎప్పుడూ phone లో directly contact చేయదు. "Number disconnect అవుతుంది" అని భయపెట్టడం scam. Call drop చేయండి.',
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
  },
  {
    type: 'whatsapp',
    badge: 'badge-whatsapp',
    isReal: false,
    sender: { te: 'WhatsApp Job Offer', en: 'WhatsApp Job Offer' },
    message: {
      te: '💼 Work from Home Job! Amazon లో part-time job. రోజుకి 2 గంటలు పని చేసి ₹5,000 సంపాదించండి! Registration: ₹500. WhatsApp: 9988776655',
      en: '💼 Work from Home! Part-time job at Amazon. Work 2 hours/day, earn ₹5,000! Registration fee: ₹500. WhatsApp: 9988776655'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! Amazon WhatsApp లో jobs offer చేయదు. "Registration fee" అడగడం fraud. Work-from-home scams చాలా common. ఎప్పుడూ fee pay చేయకండి.',
      en: '❌ SCAM! Amazon never offers jobs via WhatsApp. Asking "registration fee" is fraud. Work-from-home scams are very common. Never pay any fee.'
    }
  },
  {
    type: 'sms',
    badge: 'badge-sms',
    isReal: true,
    sender: { te: 'PAYTM', en: 'PAYTM' },
    message: {
      te: 'Paytm: మీ wallet కి ₹200 cashback credited అయింది order #PY123456 కోసం. Valid till 30-Jun-2026. Paytm app లో use చేయండి.',
      en: 'Paytm: ₹200 cashback credited to your wallet for order #PY123456. Valid till 30-Jun-2026. Use in Paytm app.'
    },
    explanation: {
      te: '✅ ఇది real! Paytm SMS PAYTM sender ID తో వస్తుంది. Link click అడగదు, OTP అడగదు. Cashback notification safe.',
      en: '✅ REAL! Paytm SMS comes from PAYTM sender ID. Does not ask for link click or OTP. Cashback notification is safe.'
    }
  },
  {
    type: 'call',
    badge: 'badge-call',
    isReal: false,
    sender: { te: 'Call — "CBI Officer"', en: 'Call — "CBI Officer"' },
    message: {
      te: '"మీ పేరు drug case లో వస్తోంది. Arrest warrant issue అయింది. ₹2 Lakh pay చేస్తే case close అవుతుంది. Digital Arrest అంటే ఏమిటో తెలుసా?"',
      en: '"Your name came up in a drug case. Arrest warrant issued. Pay ₹2 Lakh to close the case. This is a Digital Arrest."'
    },
    explanation: {
      te: '❌ ఇది "Digital Arrest" స్కామ్! CBI ఎప్పుడూ phone లో arrest announce చేయదు లేదా phone లో payment అడగదు. వెంటనే 1930 (Cyber Crime helpline) కి call చేయండి.',
      en: '❌ "Digital Arrest" SCAM! CBI never announces arrests on phone or asks for phone payment. Call 1930 (Cyber Crime helpline) immediately.'
    }
  },
  {
    type: 'whatsapp',
    badge: 'badge-whatsapp',
    isReal: false,
    sender: { te: 'WhatsApp — Unknown number', en: 'WhatsApp — Unknown number' },
    message: {
      te: '🔴 మీ WhatsApp 24 గంటల్లో ban అవుతుంది! WhatsApp Terms violate చేశారు. OTP ఇవ్వండి, మీ account restore చేస్తాం: 782456',
      en: '🔴 Your WhatsApp will be banned in 24 hours! You violated Terms. Share OTP to restore: 782456'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! WhatsApp ఎప్పుడూ WhatsApp message ద్వారా OTP అడగదు. OTP ఇస్తే మీ account hack అవుతుంది. ఇది account takeover scam.',
      en: '❌ SCAM! WhatsApp never asks for OTP via WhatsApp message. Sharing OTP will get your account hacked. This is an account takeover scam.'
    }
  },
  {
    type: 'sms',
    badge: 'badge-sms',
    isReal: false,
    sender: { te: 'VM-PMKISAN (fake)', en: 'VM-PMKISAN (fake)' },
    message: {
      te: 'PM Kisan: మీ ₹6,000 installment pending ఉంది. Aadhaar link చేయడానికి ఈ link click చేయండి: pmkisan-aadhaar.in మీ bank details enter చేయండి.',
      en: 'PM Kisan: Your ₹6,000 installment is pending. Link Aadhaar by clicking: pmkisan-aadhaar.in and enter your bank details.'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! PM Kisan official site: pmkisan.gov.in మాత్రమే. "pmkisan-aadhaar.in" fake site. Government ఎప్పుడూ SMS లో bank details అడగదు.',
      en: '❌ SCAM! PM Kisan official site is pmkisan.gov.in only. "pmkisan-aadhaar.in" is fake. Government never asks for bank details via SMS.'
    }
  },
  {
    type: 'app',
    badge: 'badge-app',
    isReal: false,
    sender: { te: 'Google Play Store (fake app)', en: 'Google Play Store (fake app)' },
    message: {
      te: '"AnyDesk" లేదా "TeamViewer" app install చేయమని ఒక bank officer చెప్పాడు. "మీ account fix చేస్తాం" అని అంటున్నాడు.',
      en: 'A "bank officer" asked you to install "AnyDesk" or "TeamViewer" app. He says "We will fix your account."'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! AnyDesk/TeamViewer screen sharing apps. Install చేస్తే వారు మీ phone పూర్తిగా control చేస్తారు మరియు bank balance దొంగిలిస్తారు. ఎప్పుడూ install చేయకండి.',
      en: '❌ SCAM! AnyDesk/TeamViewer are screen-sharing apps. If installed, they get full control of your phone and steal your bank balance. Never install these for anyone.'
    }
  },
  {
    type: 'sms',
    badge: 'badge-sms',
    isReal: true,
    sender: { te: 'HPCL-GAS', en: 'HPCL-GAS' },
    message: {
      te: 'HPCL: మీ LPG cylinder delivery scheduled తేది 15-Jun-2026. Delivery person చేతికి cash pay చేయండి లేదా UPI వాడండి. Booking#: HP123456',
      en: 'HPCL: Your LPG cylinder delivery is scheduled on 15-Jun-2026. Pay cash or UPI to delivery person. Booking#: HP123456'
    },
    explanation: {
      te: '✅ ఇది real! HPCL SMS అధికారిక delivery notification. Link click అడగడం లేదు, advance payment అడగడం లేదు. Delivery person కి మాత్రమే pay చేయండి.',
      en: '✅ REAL! HPCL SMS is an official delivery notification. No link click, no advance payment requested. Pay only to the delivery person directly.'
    }
  },
  {
    type: 'call',
    badge: 'badge-call',
    isReal: false,
    sender: { te: 'Call — "Microsoft Support"', en: 'Call — "Microsoft Support"' },
    message: {
      te: '"మీ computer లో virus detect అయింది. వెంటనే ₹3,000 pay చేయండి, remove చేస్తాం. Payment చేయకపోతే computer permanently block అవుతుంది."',
      en: '"Virus detected on your computer. Pay ₹3,000 immediately to remove it. Computer will be permanently blocked if not paid."'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! Microsoft ఎప్పుడూ unsolicited calls చేయదు. "Virus" అని భయపెట్టి money అడగడం classic tech support scam. Call disconnect చేయండి.',
      en: '❌ SCAM! Microsoft never makes unsolicited calls. Scaring with "virus" threats to demand money is a classic tech support scam. Disconnect immediately.'
    }
  },
  {
    type: 'whatsapp',
    badge: 'badge-whatsapp',
    isReal: false,
    sender: { te: 'WhatsApp — "Electricity Department"', en: 'WhatsApp — "Electricity Department"' },
    message: {
      te: '⚡ TSECPDCL: మీ electricity connection tonight 9 PM కి cut చేయబడుతుంది. Immediately ఈ number కి call చేసి pay చేయండి: 9876543210. ₹2,340 outstanding.',
      en: '⚡ TSECPDCL: Your electricity will be cut at 9 PM tonight. Call 9876543210 and pay immediately. ₹2,340 outstanding.'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! Electricity department WhatsApp లో message పంపదు. "రాత్రి cut అవుతుంది" అని urgent చేయడం scam. Official TSECPDCL: 1912 కి call చేయండి.',
      en: '❌ SCAM! Electricity dept does not send WhatsApp messages. Creating urgency about night disconnection is a scam tactic. Call official TSECPDCL: 1912.'
    }
  },
  {
    type: 'sms',
    badge: 'badge-sms',
    isReal: true,
    sender: { te: 'BOIIND', en: 'BOIIND' },
    message: {
      te: 'Bank of India: మీ FD ₹1,00,000 matured అయింది తేది 14-Jun-2026. Auto-renewal process అయింది. Details: bankofIndia.in లో login చేయండి.',
      en: 'Bank of India: Your FD of ₹1,00,000 matured on 14-Jun-2026. Auto-renewal processed. Details at bankofIndia.in'
    },
    explanation: {
      te: '✅ ఇది real! Bank of India official SMS BOIIND sender ID తో వస్తుంది. OTP అడగడం లేదు, link click అడగడం లేదు. FD maturity notification safe.',
      en: '✅ REAL! Bank of India official SMS comes from BOIIND sender ID. No OTP or link click requested. FD maturity notification is safe.'
    }
  },
  {
    type: 'app',
    badge: 'badge-app',
    isReal: false,
    sender: { te: 'WhatsApp Forward', en: 'WhatsApp Forward' },
    message: {
      te: '🚨 Jio FREE Recharge! Jio 75th Anniversary Celebration! ఈ link click చేయండి, మీ number enter చేయండి, మీ contacts కి forward చేయండి — 90 Days FREE recharge పొందండి! jio-offer2026.com',
      en: '🚨 Jio FREE Recharge! Jio 75th Anniversary! Click link, enter your number, forward to contacts — get 90 Days FREE! jio-offer2026.com'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! Jio అటువంటి offers WhatsApp లో announce చేయదు. "Contacts కి forward చేయి" అంటే scam spread చేయమని అర్థం. Delete చేసి ignore చేయండి.',
      en: '❌ SCAM! Jio never announces offers via WhatsApp forwards. "Forward to contacts" means they want to spread the scam. Delete and ignore it.'
    }
  },
  {
    type: 'call',
    badge: 'badge-call',
    isReal: false,
    sender: { te: 'Call — Toll Free 1800xxxxxx', en: 'Call — Toll Free 1800xxxxxx' },
    message: {
      te: '"Hello, I am calling from your insurance company. Your policy is about to expire. Pay ₹3,500 now via phone to continue coverage. I can take UPI payment on this call."',
      en: '"Hello, I am calling from your insurance company. Your policy expires soon. Pay ₹3,500 now via UPI on this call to continue."'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! Insurance companies phone లో direct payment అడగవు. మీ policy number, official company website check చేయండి. Unknown caller కి payment చేయకండి.',
      en: '❌ SCAM! Insurance companies never ask for direct phone payment. Check your policy number and official company website. Never pay unknown callers.'
    }
  },
  {
    type: 'sms',
    badge: 'badge-sms',
    isReal: false,
    sender: { te: 'AD-ICICI (fake)', en: 'AD-ICICI (fake)' },
    message: {
      te: 'ICICI Bank: Congratulations! మీకు Pre-approved Personal Loan ₹5,00,000 అందుబాటులో ఉంది. Instant disbursal. Processing fee ₹2,000 pay చేయండి: iciciloan.net',
      en: 'ICICI Bank: Congratulations! Pre-approved Personal Loan ₹5,00,000 available. Instant disbursal. Pay ₹2,000 processing fee at iciciloan.net'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! ICICI official site: icicibank.com మాత్రమే. "iciciloan.net" fake. Loan processing fee advance లో అడగడం fraud. Banks ఎప్పుడూ advance fee అడగవు.',
      en: '❌ SCAM! ICICI official site is icicibank.com only. "iciciloan.net" is fake. Asking for loan processing fee upfront is fraud. Banks never ask for advance fees.'
    }
  },
  {
    type: 'whatsapp',
    badge: 'badge-whatsapp',
    isReal: true,
    sender: { te: 'WhatsApp — నీ కొడుకు/కూతురు', en: 'WhatsApp — your son/daughter' },
    message: {
      te: 'అమ్మా, నేను office లో ఉన్నాను. రాత్రి 8 కి ఇంటికి వస్తాను. Dinner ready చేయండి. Love you! 😊',
      en: 'Mom, I am in office. Will come home by 8 PM. Please have dinner ready. Love you! 😊'
    },
    explanation: {
      te: '✅ ఇది real normal message! డబ్బు అడగడం లేదు, link లేదు, urgency లేదు. Personal family message safe. Scam messages ఎప్పుడూ money, links, లేదా urgency కలిగి ఉంటాయి.',
      en: '✅ REAL normal message! No money request, no links, no urgency. Personal family messages are safe. Scam messages always have money requests, links, or urgency.'
    }
  },
  {
    type: 'sms',
    badge: 'badge-sms',
    isReal: false,
    sender: { te: 'Unknown Number', en: 'Unknown Number' },
    message: {
      te: 'మీ UPI ID కి ₹15,000 transfer చేయబడింది. Confirm చేయడానికి మీ UPI PIN enter చేయండి ఈ link లో: upi-confirm.com/verify',
      en: 'Rs.15,000 has been transferred to your UPI ID. Enter your UPI PIN to confirm receipt: upi-confirm.com/verify'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! UPI money receive చేయడానికి ఎప్పుడూ PIN అడగదు. PIN enter చేస్తే మీ account నుంచి money పోతుంది, వస్తుంది కాదు! PIN = money పోవడానికి మాత్రమే.',
      en: '❌ SCAM! UPI never asks for PIN to receive money. If you enter PIN, money LEAVES your account! PIN is only for sending money, never for receiving.'
    }
  },
  {
    type: 'call',
    badge: 'badge-call',
    isReal: true,
    sender: { te: 'Call — 1800-XXX-XXXX (Bank Toll Free)', en: 'Call — 1800-XXX-XXXX (Bank Toll Free)' },
    message: {
      te: '"నమస్కారం, మీరు SBI customer care కి call చేశారు. మీ account relate చేసిన problem కోసం, దయచేసి మీ registered mobile number confirm చేయండి." (మీరు call చేశారు)',
      en: '"Welcome to SBI customer care. For your account-related issue, please confirm your registered mobile number." (You called them)'
    },
    explanation: {
      te: '✅ ఇది real! మీరు call చేసినప్పుడు bank మీ registered number అడగవచ్చు. కానీ OTP, full card number, CVV ఎప్పుడూ అడగదు. మీరు call చేయడం vs వారు call చేయడం తేడా గుర్తుంచుకోండి.',
      en: '✅ REAL! When YOU call the bank, they may verify your registered mobile. But they NEVER ask for OTP, full card number, or CVV. Remember: you calling them vs them calling you is very different.'
    }
  },
  {
    type: 'whatsapp',
    badge: 'badge-whatsapp',
    isReal: false,
    sender: { te: 'WhatsApp — "Courier Company"', en: 'WhatsApp — "Courier Company"' },
    message: {
      te: '📦 FedEx: మీ parcel customs లో hold అయింది. Drugs/illegal items suspect అయ్యాయి. ₹10,000 customs duty pay చేయకపోతే FIR file అవుతుంది. Immediately WhatsApp చేయండి.',
      en: '📦 FedEx: Your parcel is held at customs. Drugs/illegal items suspected. Pay ₹10,000 customs duty or FIR will be filed. WhatsApp immediately.'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! FedEx/courier companies WhatsApp లో customs demands పంపవు. "FIR, arrest" అని భయపెట్టడం classic scam. 1930 కి call చేయండి.',
      en: '❌ SCAM! Courier companies never make customs demands on WhatsApp. Threatening "FIR, arrest" is a classic intimidation scam. Call 1930 (Cyber Crime).'
    }
  },
  {
    type: 'sms',
    badge: 'badge-sms',
    isReal: true,
    sender: { te: 'BSNL-CARE', en: 'BSNL-CARE' },
    message: {
      te: 'BSNL: మీ postpaid bill ₹456 due తేది 20-Jun-2026. Pay via myBSNL app లేదా bsnl.co.in లో. Helpline: 1800-180-1503.',
      en: 'BSNL: Your postpaid bill of ₹456 is due on 20-Jun-2026. Pay via myBSNL app or bsnl.co.in. Helpline: 1800-180-1503.'
    },
    explanation: {
      te: '✅ ఇది real! BSNL official SMS BSNL-CARE sender ID తో వస్తుంది. Official site bsnl.co.in, official helpline 1800-180-1503. OTP లేదా personal info అడగడం లేదు.',
      en: '✅ REAL! BSNL official SMS comes from BSNL-CARE. Official site bsnl.co.in, helpline 1800-180-1503. No OTP or personal info requested.'
    }
  },
  {
    type: 'app',
    badge: 'badge-app',
    isReal: false,
    sender: { te: 'Online Ad / Pop-up', en: 'Online Ad / Pop-up' },
    message: {
      te: '🏆 మీరు TODAY\'s LUCKY WINNER! Spin the wheel చేయండి — iPhone, Gold, లేదా ₹1 Lakh cash win చేయండి! Only 5 minutes left! [SPIN NOW] అనే button',
      en: '🏆 You are TODAY\'s LUCKY WINNER! Spin the wheel — win iPhone, Gold, or ₹1 Lakh cash! Only 5 minutes left! [SPIN NOW]'
    },
    explanation: {
      te: '❌ ఇది స్కామ్! "Lucky winner, spin wheel, countdown timer" అన్నీ scam signs. ఈ games లో కొన్ని rounds తర్వాత personal/bank details అడుగుతారు. వెంటనే close చేయండి.',
      en: '❌ SCAM! "Lucky winner, spin wheel, countdown timer" are all scam signs. After a few rounds, these ask for personal/bank details. Close immediately.'
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

function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('lang-' + l).classList.add('active');
  renderQuestion();
}

function startGame() {
  questions = shuffle(ALL_QUESTIONS).slice(0, 10);
  currentQ = 0;
  score = 0;
  answered = false;
  document.getElementById('scoreScreen').style.display = 'none';
  document.getElementById('gameArea').style.display = 'block';
  renderQuestion();
}

function renderQuestion() {
  if (currentQ >= questions.length) { showScore(); return; }
  const q = questions[currentQ];
  answered = false;

  // Progress
  const pct = (currentQ / questions.length) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('qCounter').textContent = `${currentQ + 1} / ${questions.length}`;

  // Badge
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

  // Sender
  document.getElementById('msgSender').textContent = q.sender[lang];

  // Message
  document.getElementById('msgTelugu').textContent = q.message.te;
  document.getElementById('msgEnglish').textContent = q.message.en;
  document.getElementById('msgEnglish').style.display = lang === 'en' ? 'none' : 'block';
  document.getElementById('msgTelugu').style.display = 'block';

  // Buttons
  const realBtn = document.getElementById('btnReal');
  const fakeBtn = document.getElementById('btnFake');
  realBtn.disabled = false;
  fakeBtn.disabled = false;
  realBtn.style.opacity = 1;
  fakeBtn.style.opacity = 1;

  if (lang === 'te') {
    realBtn.innerHTML = '✅ ఇది Real';
    fakeBtn.innerHTML = '❌ ఇది Fake / స్కామ్';
  } else {
    realBtn.innerHTML = '✅ This is Real';
    fakeBtn.innerHTML = '❌ This is Fake / Scam';
  }

  // Hide result
  document.getElementById('resultCard').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'none';
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

  // Show result
  const rc = document.getElementById('resultCard');
  rc.className = 'result-card ' + (correct ? 'correct' : 'wrong');
  rc.style.display = 'block';
  document.getElementById('resultIcon').textContent = correct ? '✅' : '❌';
  document.getElementById('resultTelugu').textContent = q.explanation.te;
  document.getElementById('resultEnglish').textContent = q.explanation.en;
  document.getElementById('resultEnglish').style.display = lang === 'en' ? 'none' : 'block';

  // Next button
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.style.display = 'block';
  if (currentQ + 1 >= questions.length) {
    nextBtn.textContent = lang === 'te' ? '🏆 Score చూడండి' : '🏆 See Score';
  } else {
    nextBtn.textContent = lang === 'te' ? 'తదుపరి ప్రశ్న →' : 'Next Question →';
  }
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= questions.length) { showScore(); return; }
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
      ? 'అద్భుతం! మీరు digital scams గురించి చాలా బాగా తెలుసు. మీ family కి కూడా చెప్పండి!'
      : 'Excellent! You know digital scams very well. Share this knowledge with your family!';
  } else if (pct >= 0.7) {
    emoji = '👍';
    msg = lang === 'te'
      ? 'చాలా బాగుంది! కొంచెం practice తో మీరు expert అవుతారు. మళ్ళీ try చేయండి!'
      : 'Good job! With a little more practice you will be an expert. Try again!';
  } else if (pct >= 0.5) {
    emoji = '📚';
    msg = lang === 'te'
      ? 'నేర్చుకుంటున్నారు! Scam signs గుర్తుంచుకోండి: urgency + money + link = SCAM. మళ్ళీ try చేయండి!'
      : 'Keep learning! Remember: urgency + money + link = SCAM. Try again!';
  } else {
    emoji = '💪';
    msg = lang === 'te'
      ? 'పర్వాలేదు! Practice తో నేర్చుకుంటారు. Golden rule: ఎవరైనా phone లో డబ్బు అడిగితే — అది SCAM!'
      : 'Don\'t worry! Practice makes perfect. Golden rule: Anyone asking for money on phone = SCAM!';
  }

  document.getElementById('scoreEmoji').textContent = emoji;
  document.getElementById('scoreMessage').textContent = msg;
}

// Init on load
window.onload = startGame;