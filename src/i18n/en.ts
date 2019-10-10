import englishMessages from 'ra-language-english';

export default {
  ...englishMessages,
  root: {
    settings: 'Settings',
  },
  pages: {
    settings: {
      title: 'Settings',
      links: {
        documents: 'Documents',
      },
    },
    login: {
      title: 'Unsigned user can’t browse any projects',
      text: 'Please create new account on sign in if you have one',
      buttonText: 'Sign In or Sign Up',
    },
    documents: {
      company: 'Company',
      contact: 'Contacts',
      banking: 'Banking Info',
      nextStepButton: 'Next',
      prevStepButton: 'Back',
      companyForm: {
        title: 'Company',
        countriesPlaceholder: 'Empty',
        name: 'Company name',
        alternativeName: 'Doing business as (alternative name)',
        website: 'Website',
        country: 'Country',
        region: 'State / Province / Region',
        zip: 'ZIP code',
        city: 'City',
        address: 'Address',
        additionalAddress: 'Address line 2',
        registrationNumber: 'Registration number',
        taxId: 'Tax ID / EIN / TIN',
      },
      contactForm: {
        title: 'Contact',
        authorized: {
          email: 'Email',
          fullName: 'Authorized person full name',
          phone: 'Phone',
          position: 'Authorized person position',
        },
        technical: {
          email: 'Technical specialist email',
          fullName: 'Technical specialist',
          phone: 'Technical specialist phone',
        },
        invalidEmail: 'Email is invalid',
        invalidPhone: 'Phone is invalid',
      },
      bankingForm: {
        title: 'Banking Info',
        accountNumber: 'Account number',
        address: 'Bank address',
        currency: 'Payout currency',
        currenciesPlaceholder: 'Not selected',
        details: 'Correspondent bank details',
        name: 'Bank',
        swift: 'SWIFT',
      },
      modal: {
        welcome: {
          button: 'Let`s do it!',
          text: 'Thanks fo singnin up and welcome to Super.com partner’s dashboard.<br><br>To get started, we ask you to fill out your company and bank details in order for us to prepare your contract.<br><br>As soon as our manager checks everything, we will be ready to sign a contract and open all the functions of the portal to you.<br><br>Feel free to contact us if you have any questions.',
          title: 'Welcome aboard!',
        },
      },
      save: 'Save',
      finish: 'All steps completed - you are finished',
      status: {
        draft: {
          title: 'You have finished filling out company details, send them for review',
          submit: 'To Review',
          beforeSubmit: 'Carefully check the entered data and click the send button, it will be possible to make changes only upon request in technical support.',
        },
        review: {
          title: 'Your company details in on review now',
          submit: 'Make changes',
        },
        approved: {
          title: 'Your company details are approved. Contact us if you wish to make changes',
          submit: 'Contact us',
        },
      },
      title: 'Documents',
    },
  },
};
