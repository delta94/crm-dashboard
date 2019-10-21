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
