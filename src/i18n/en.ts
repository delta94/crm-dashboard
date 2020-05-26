import englishMessages from 'ra-language-english';

export default {
  ...englishMessages,
  root: {
    settings: 'Settings',
    notifications: {
      title: 'Notifications',
      noContentTitle: 'In this section you will see notifications',
      noContentText: 'There\'s nothing here yet',
    },
    menu: {
      users: 'Users',
    },
  },
  resources: {
    invites: {
      name: 'Invites',
      fields: {
        email: 'Email',
        group: 'Group',
        accepted: 'Accepted',
      },
    },
    users: {
      name: 'Users',
      fields: {
        email: 'Email',
        'first_name': 'FirstName',
        'last_name': 'LastName',
        status: 'Active',
        role: 'Role',
        'created_at': 'Created',
        picture: 'Picture',
      },
    },
    groups: {
      name: 'Groups',
      fields: {
        name: 'Name',
        role: 'Role',
      },
    },
    games: {
      name: 'Games',
      description: 'Here you can customize the look and feel of your game page in the store. Fields marked with * are mandatory',
      fields: {
        title: 'Title',
        developers: {
          label: 'Developers',
          description: 'You can specify more then one developer with comma separated list.',
        },
        publishers: {
          label: 'Publishers',
          description: 'You can specify more then one publisher with comma separated list.',
        },
        supportedLanguages: {
          label: 'Supported Languages',
          description: `What languages does your game support and how exactly are they presented?

          Interface: all in-game menu and interface is displayed in this language.
          Voice: each phrase is translated and sounded in the specified language.
          Subtitles: each phrase is accompanied by subtitles in this language.`,
          interface: 'Interface',
          audio: 'Audio',
          subtitles: 'Subtitles',
        },
        genres: {
          label: 'Genre',
          description: `Select up to 3 additional genres describes your game. 
          It will be listed in the top of store page.`,
          rolePlaying: 'Role Playing',
        },
        tags: {
          label: 'Tags',
          description: `Any other genre keywords describes your game. Avoid using the genre or platforms provided above. Max of 10.
          `,
        },
        releaseDate: {
          label: 'Release Date',
          description: `Setup release date in your local time zone.
          If you set this date in the future then we'll restrict activation until the release date has passed. `,
        },
        featuresSupported: {
          label: 'Features supported',
          description: 'You can specify more then one publisher with comma separated list.',
          numberPlayers: 'Number of players',
          singlePlayer: 'Single-player',
          multiPlayer: 'Multi-player',
          onlineMultiPlayer: 'Online Multi-player',
          localMultiPlayer: 'Local Multi-player',
          splitScreen: 'Split Screen',
          mmo: 'MMO',
          coop: 'Co-op',
          onlineCoop: 'Online Co-op',
          localCoop: 'Local Co-op',
          crossPlarform: 'Cross-Plarform',
          platformFeatures: 'Platform features',
          achievements: 'Achievements',
          cloudSaves: 'Cloud saves',
        },
        controllers: {
          label: 'Controllers',
          notSupported: {
            label: 'Not supported',
            description: '',
          },
          partiallySupported: {
            label: 'Partially supported',
            description: `Games with partial controller support may require a keyboard and mouse to install,
            configure, or use a launcher.`,
          },
          fullSupport: {
            label: 'Full support',
            description: `- Fully compatible with Xbox controller and other similar controllers, from installation to launch and further action.
            - If your game uses a launcher that appears before the game starts (such as Unity settings), the launcher must also have full controller support.
            - You don't need a keyboard or mouse to play or exit the game.
            `,
          },
        },
        supportedPlatforms: {
          label: 'Supported platforms',
          description: 'What operating systems does your game support?',
          minimal: 'minimal system requirements',
          recommended: 'Recommended system requirements',
          system: 'System',
          processor: 'Processor',
          graphics: 'Graphics',
          directX: 'DirectX ',
          sound: 'Sound',
          memory: 'Memory',
          storage: 'Storage',
          other: 'Other',
        },
      },
      tabs: {
        general: 'General',
        description: 'Description',
        ratings: 'Ratings',
        media: 'Media',
      },
    },
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
