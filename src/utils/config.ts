import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "N3X G3N AI",
  seo: {
    title: "N3X G3N AI – Smart Apps for Everyday Life",
    description: "Explore innovative mobile apps like Evolve and N3X G3N AI Chatbot — designed to elevate your wellness, productivity, and communication.",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/logo.jpg",
  theme: "corporate",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: false,
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: true,
  apps: [
    {
      name: "Evolve GPT : Voice AI Chat\n",
      googlePlayLink: "https://play.google.com/store/apps/details?id=com.n3xg3nai.evolve",
      appStoreLink: "",
    },
    {
      name: "IMAGE GPT CHAT",
      googlePlayLink: "https://play.google.com/store/apps/details?id=com.n3xg3n.chatbot",
      appStoreLink: "",
    }
  ],

  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Download Our Mobile Apps Today!",
    subtitle:
      "Unlock the full potential of our services with seamless access at your fingertips. Stay connected, informed, and in control wherever you are.",
    screenshots: [
      "/screenshots/v.png",
      "/screenshots/y.png",
      "/screenshots/x.png",
    ],
  },
  home: {
    seo: {
      title: "Image GPT Chat ( N3X G3N AI Chat )",
      description: "Image Chat GBT with voice detection",
    },
    testimonials: {
      id: "testimonials",
      title: "Testimonials",
      subtitle: "Check out a few of our customer reviews",
      cards: [
        {
          name: "Alice Johnson",
          comment:
            "The apps are sleek, smart, and incredibly useful. N3xG3n AI is building tools that actually improve your life — not just fill space on your phone.",
        },
        {
          name: "Bob Smith",
          comment:
            "Finally — apps that feel intelligent, not overwhelming. Every feature feels intentional and thoughtfully designed.",
        },
        {
          name: "Charlie Brown",
          comment:
            "N3xG3n AI doesn’t just follow trends — it creates meaningful tools that integrate seamlessly into your day-to-day life",
        },
        {
          name: "Dana White",
          comment:
            "What stood out most? The speed, simplicity, and subtle intelligence baked into everything. These apps just work.",
        },
        {
          name: "Eve Adams",
          comment:
            "Using these apps feels like upgrading your lifestyle without the learning curve.",
        },
      ],
    },
    partners: {
      title: "Get all apps on",
      logos: [
        "/misc/companies/google.webp",
      ],
    },
    howItWorks: {
      id: "how-it-works",
      title: "How it works",
      subtitle:
        "Explore our comprehensive step-by-step guide to understand how our process ensures seamless and effective results",
      steps: [
        {
          title: "Download the App",
          subtitle:
              "Get started by downloading N3xG3n Chatbot from the Google Play Store. It's quick, free, and installs in seconds.",
          image: "/stock/1.jpeg",
        },
        {
          title: "Start Free Trial",
          subtitle:
              "Open the app and tap the red ✖️ icon to begin your trial period. No commitment — just explore!",
          image: "/stock/02.webp",
        },
        {
          title: "Sign Up for Full Access",
          subtitle:
              "Click the 'Sign Up' button and unlock everything for just $1.99/week — cheaper than a cup of coffee ☕.",
          image: "/stock/03.webp",
        },
        {
          title: "Chat Freely with AI",
          subtitle:
              "Use the chatbot to ask anything. A green circle means it's online. Try voice input or select a personality or language — N3xG3n adapts instantly.",
          image: "/stock/2.jpeg",
        },
        {
          title: "Use Image GPT Chat",
          subtitle:
              "Snap or upload an image to ask complex questions. Get instant summaries or just request an 'answer only'. (📢 Please don’t use for exams!)",
          image: "/stock/04.webp",
        },
        {
          title: "Download Evolve",
          subtitle:
              "Install Evolve and sign up easily with Google. After setup, try the app completely free — ask questions or share your mood anytime.",
          image: "/stock/4.webp",
        },
        {
          title: "Stay Well for Less",
          subtitle:
              "If you love it, unlock everything in Evolve for just $0.99/month — no AI wellness app is more affordable.",
          image: "/stock/3.webp",
        },
      ],

    },
    features: {
      id: "features",
      title: "Why Choose N3X G3N AI Apps?",
      subtitle:
          "Each app is built with precision, privacy, and usability in mind. Here's what makes them stand out.",
      cards: [
        {
          title: "Health & Wellness AI",
          subtitle:
              "Evolve tracks your goals, workouts, and habits with machine-learning insights and tailored feedback.",
          icon: "/3D/link-front-color.webp",
        },
        {
          title: "Conversational Intelligence",
          subtitle:
              "N3xG3n Chatbot brings fast, multilingual, offline-friendly AI to your pocket.",
          icon: "/3D/clock-front-color.webp",
        },
        {
          title: "Secure by Design",
          subtitle:
              "Sleek design and smart UX mean users of any level can start fast and feel at home.",
          icon: "/3D/roll-brush-front-color.webp",
        },
        {
          title: "Top-Notch Security",
          subtitle:
            "Protect your data with our top-notch security protocols, offering robust encryption and real-time monitoring to keep your information safe and secure",
          icon: "/3D/sheild-front-color.webp",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Frequently Asked Question",
      qa: [
        {
          question: "How can I contact customer support? Or Delete my Account?",
          answer:
            "You can contact our customer support team by emailing info@n3xg3nai.com. We are available via email. Our support hours are Monday to Friday, 9 AM to 5 PM.",
        },
      ],
    },
    header: {
      headline: "Your Ultimate App for Every Need",
      subtitle:
        "Streamline your tasks, boost your productivity, and accomplish more every day. Unlock a world of possibilities with our cutting-edge mobile application.",
      screenshots: [
        "/screenshots/1.jpg",
        "/screenshots/2.jpg",
        "/screenshots/3.jpg",
        "/screenshots/4.jpg",
        "/screenshots/5.jpg",
        "/screenshots/8.jpg",

      ],
      usersDescription: "300+ people already using the app",
      headlineMark: [1, 3],
    },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Mobile App Landing Template",
      description: "Privacy Policy",
    },
    content: `# Privacy Policy

**Effective Date:** [Insert Date]

## Introduction

Welcome to N3X G3N AI (the "App"). N3X G3N AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our App.

## Information We Collect

### 1. Information You Provide
- **Account Information:** When you sign up for our App, we may collect your name, email address, and other contact information.
- **User Content:** We may collect any content you upload, post, or otherwise transmit through the App, including messages, photos, and other media.

### 2. Information We Collect Automatically
- **Usage Data:** We collect information about your interactions with the App, such as the features you use and the time spent on the App.
- **Device Information:** We collect information about the device you use to access the App, including IP address, device type, and operating system.

### 3. Information from Third Parties
- **Third-Party Services:** If you connect to the App through a third-party service (e.g., social media), we may collect information from that service as permitted by their privacy policies.

## How We Use Your Information

We may use the information we collect for the following purposes:
- **To Provide and Maintain Our Service:** We use your information to operate and improve the App.
- **To Communicate with You:** We may use your contact information to send you updates, notifications, and other communications related to the App.
- **To Personalize Your Experience:** We may use your information to personalize your experience with the App and to offer you content tailored to your interests.
- **For Analytics and Research:** We use the information to analyze how our users interact with the App and to improve our services.

## Sharing Your Information

We do not share your personal information with third parties except in the following circumstances:
- **With Your Consent:** We may share your information with third parties if you give us explicit consent to do so.
- **Service Providers:** We may share your information with third-party service providers who perform services on our behalf.
- **Legal Requirements:** We may disclose your information if required by law, or if we believe that such action is necessary to comply with legal obligations, protect our rights, or prevent fraud.

## Your Rights and Choices

- **Access and Correction:** You have the right to access and correct the personal information we hold about you.
- **Data Deletion:** You may request that we delete your personal information by contacting us at [Your Contact Information].
- **Opt-Out:** You may opt out of receiving promotional communications from us by following the instructions in those communications.

## Security

We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no security system is completely secure, and we cannot guarantee the absolute security of your information.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Privacy Policy.

## Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at:

N3X G3N AI SOLUTIONS
EMAIL: info@n3xg3nai.com

`,
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy -N3X G3N AI SOLUTIONS",
      description: "Cookies Policy",
    },
    content: `# Cookies Policy

**Effective Date:** 05/2025

## Introduction

This Cookies Policy explains how  N3X G3N AI SOLUTIONS ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our app, N3X G3N AI (the "Apps"). It explains what these technologies are and why we use them, as well as your rights to control their use.

## What Are Cookies?

Cookies are small data files that are placed on your device when you visit a website or use an app. Cookies are widely used by online service providers to facilitate and help to make the interaction between users and websites/apps faster and easier, as well as to provide reporting information.

### Types of Cookies We Use

We use the following types of cookies in our App:

1. **Strictly Necessary Cookies:**  
   These cookies are essential for you to use some of the features of our App. Without these cookies, some services cannot be provided.

2. **Performance and Analytics Cookies:**  
   These cookies collect information about how users interact with our App, including which pages are visited most often. We use this information to improve how our App works.

3. **Functionality Cookies:**  
   These cookies allow our App to remember choices you make when you use the App, such as remembering your login details or language preference.

4. **Targeting and Advertising Cookies:**  
   These cookies are used to deliver advertisements that are relevant to you. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.

### Cookies From Third Parties

In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the App and to deliver advertisements on and through the App.

## How We Use Cookies

We use cookies to:

- **Remember your login details and preferences.**
- **Analyze usage patterns and improve the functionality of our App.**
- **Deliver relevant content and advertisements.**
- **Understand your preferences based on previous or current App activity.**

## Your Choices Regarding Cookies

You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting the settings in your browser. Most browsers allow you to:

- **View what cookies are stored on your device and delete them individually.**
- **Block third-party cookies.**
- **Block cookies from particular websites.**
- **Block all cookies from being set.**
- **Delete all cookies when you close your browser.**

Please note that if you block or delete cookies, some features of the App may not function properly.

## Changes to This Cookies Policy

We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Cookies Policy.

## Contact Us

If you have any questions or concerns about our use of cookies, please contact us at:

N3X G3N AI SOLUTIONS 
EMAIL : info@n3xg3nai.com

`,
  },
  termsAndConditions: {
    seo: {
      title: "Terms and conditions - N3X G3N AI Mobile Apps ",
      description: "Terms and conditions",
    },
    content: `# Terms and Conditions

**Effective Date:** 5/2025

## Introduction

Welcome to N3X G3N AI SOLUTIONS (the "Apps"). These Terms and Conditions ("Terms") govern your use of the App provided by N3X G3N AI ("we," "our," or "us"). By accessing or using our Apps, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.

## Use of the App

### 1. Eligibility
To use our App, you must be at least 13 years old and capable of entering into a legally binding agreement. By using the Apps, you represent and warrant that you meet these eligibility requirements.

### 2. User Accounts
- **Registration:** You may be required to create an account to access certain features of the App. You must provide accurate and complete information when creating your account.
- **Account Security:** You are responsible for maintaining the confidentiality of your account login details and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
- **Account Termination:** We reserve the right to terminate or suspend your account at any time, without notice, for any reason, including if we believe you have violated these Terms.

### 3. Prohibited Conduct
You agree not to:
- Use the Apps for any illegal or unauthorized purpose.
- Interfere with or disrupt the operation of the Apps or the servers or networks used to make the Apps available.
- Upload or transmit any viruses, malware, or other harmful code.
- Attempt to gain unauthorized access to any part of the Apps or to other accounts, systems, or networks connected to the Apps.

## Intellectual Property

### 1. Ownership
All content and materials available on the Apps, including but not limited to text, graphics, logos, and software, are the property of N3X G3N AI or its licensors and are protected by intellectual property laws.

### 2. License
We grant you a limited, non-exclusive, non-transferable license to access and use the Apps for your personal, non-commercial use. This license is subject to your compliance with these Terms.

### 3. Restrictions
You may not:
- Reproduce, distribute, modify, or create derivative works of any content or materials on the Apps without our prior written consent.
- Use any data mining, robots, or similar data gathering or extraction methods on the Apps.

## Disclaimers and Limitation of Liability

### 1. Disclaimers
The Apps is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the content available on or through the Apps. We disclaim all warranties, whether express or implied, including any warranties of merchantability, fitness for a particular purpose, and non-infringement.

### 2. Limitation of Liability
To the fullest extent permitted by law, N3X G3N AI SOLUTIONS shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
- Your use or inability to use the App;
- Any unauthorized access to or use of our servers and/or any personal information stored therein;
- Any bugs, viruses, or other harmful code that may be transmitted to or through the App;
- Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the App.

## Indemnification

You agree to indemnify, defend, and hold harmless N3X G3N AI , its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the App or your violation of these Terms.

## Governing Law

These Terms shall be governed by and construed in accordance with the laws of  GOOGLE PLAY, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in GOOGLE PLAY STORE to resolve any legal matter arising from these Terms.

## Changes to These Terms

We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Effective Date" above. Your continued use of the Apps after such changes signifies your acceptance of the revised Terms.

## Contact Us

If you have any questions or concerns about these Terms, please contact us at:

NEX GEN AI SOLUTIONS  
Email: info@n3xg3nai.com
`,
  },
};

export default templateConfig;
