import russianMessages from 'ra-language-russian';

export default {
  ...russianMessages,
  root: {
    settings: 'Настройки',
    notifications: {
      title: 'Уведомления',
      noContentTitle: 'Здесь пока ничего нет',
      noContentText: 'В этом разделе будут собраны уведомления',
    },
    menu: {
      users: 'Пользователи',
    },
  },
  resources: {
    invites: {
      name: 'Приглашения',
      fields: {
        email: 'Email',
        group: 'Группа',
        accepted: 'Принято',
      },
    },
    users: {
      name: 'Юзеры',
      fields: {
        email: 'Почта',
        'first_name': 'Имя',
        'last_name': 'Фамилия',
        status: 'Активен',
        role: 'Роль',
        'created_at': 'Создан',
        picture: 'Аватар',
      },
    },
    groups: {
      name: 'Группы',
      fields: {
        name: 'Название',
        role: 'Роль',
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
      title: 'Настройки',
      links: {
        documents: 'Документы',
      },
    },
    login: {
      title: 'Незарегистрированные пользователи не могут просматривать проекты',
      text: 'Создайте новую учетную запись или войдите с имеющейся',
      buttonText: 'Войти или Зарегистрироваться',
    },
    documents: {
      company: 'Компания',
      contact: 'Контакты',
      banking: 'Банковская информация',
      nextStepButton: 'Дальше',
      prevStepButton: 'Назад',
      companyForm: {
        title: 'Компания',
        countriesPlaceholder: 'Пусто',
        name: 'Название компании',
        alternativeName: 'Бизнесс-имя (альтернативное название)',
        website: 'Веб-сайт',
        country: 'Страна',
        region: 'Штат / Провинция / Регион',
        zip: 'ZIP код',
        city: 'Город',
        address: 'Адрес',
        additionalAddress: 'Дополнительный адрес',
        registrationNumber: 'Регистрационный номер',
        taxId: 'Tax ID / EIN / TIN',
      },
      contactForm: {
        title: 'Контакты',
        authorized: {
          email: 'Email',
          fullName: 'Полное имя уполномоченного лица',
          phone: 'Номер телефона',
          position: 'Должность уполномоченного лица',
        },
        technical: {
          email: 'Email технического специалиста',
          fullName: 'Технический специалист',
          phone: 'Номер телефона технического специалиста',
        },
        invalidEmail: 'Email не валиден',
        invalidPhone: 'Телефон не валиден',
      },
      bankingForm: {
        title: 'Банковская информация',
        accountNumber: 'Номер аккаунта',
        address: 'Адрес банка',
        currency: 'Валюта выплат',
        currenciesPlaceholder: 'Не выбрано',
        details: 'Реквизиты банка-корреспондента',
        name: 'Банк',
        swift: 'SWIFT',
      },
      modal: {
        welcome: {
          button: 'Начните!',
          text: 'Thanks fo singnin up and welcome to Super.com partner’s dashboard.<br><br>To get started, we ask you to fill out your company and bank details in order for us to prepare your contract.<br><br>As soon as our manager checks everything, we will be ready to sign a contract and open all the functions of the portal to you.<br><br>Feel free to contact us if you have any questions.',
          title: 'Добро пожаловать в onBoarding!',
        },
      },
      save: 'Сохранить',
      finish: 'Все шаги пройдены - вы закончили',
      status: {
        draft: {
          title: 'Вы закончили заполнение данных вашей компании, отправте их нам на проверку',
          submit: 'На ревью',
          beforeSubmit: 'Внимательно проверьте введенные данные и нажмите кнопку отправить, внести изменения можно будет только по запросу в тех.поддержку.',
        },
        review: {
          title: 'Данные вашей компании проходят проверку',
          submit: 'Внести правки',
        },
        approved: {
          title: 'Данные вашей компании проверены. Свяжитесь с нами, если хотите внести изменения',
          submit: 'Связаться с нами',
        },
      },
      title: 'Документы',
    },
  },
};
