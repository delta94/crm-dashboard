/* eslint-disable max-len */
export default {
  translation: {
    save: 'Save',
    create: 'Create',
    cancell: 'Cancell',
    name: 'Name',
    slug: 'Slug',
    games: {
      create: 'Create new game',
      name: 'Games',
      description: 'Here you can customize the look and feel of your game page in the store. Fields marked with * are mandatory',
      languages: {
        eng: 'English',
        rus: 'Russian',
        deu: 'German',
        esp: 'Spanish',
      },
      fields: {
        title: 'Title',
        slug: 'Slug',
        type: 'Type',
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
          label: 'Features',
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
          notSupported: 'Not supported',
          partiallySupported: 'Partially supported',
          fullSupport: 'Full support',
        },
        supportedPlatforms: {
          label: 'Supported platforms',
          description: 'What operating systems does your game support?',
          platform: 'Platform',
          requirements: 'System requirements',
          minimal: 'Minimal system requirements',
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
        description: {
          label: 'Description',
        },
        summary: {
          label: 'Summary',
        },
        review: {
          label: 'Review',
          description: `Which of game press reviews you want to include to the game page to help us to sell your product. These reviews are visible to users around the world. You can add max 3 of reviews. 
          We we use all of some of them depends on concrete store page design.`,
          pressName: 'Press name',
          link: 'The link',
          quote: 'Quote',
          score: 'Score',
        },
        socialLinks: {
          label: 'Social links',
          name: 'Name',
          link: 'Link',
          facebook: 'Facebook',
          reddit: 'Reddit',
          twitter: 'Twitter',
          twitch: 'Twitch',
          youTube: 'YouTube',
          discord: 'Discord',
        },
        rating: {
          label: 'Rating',
          warning: `Don't make this up. 
          You may only enter a rating below if your game has been rated by that rating agency.`,
          displayOnlineNotice: 'Display online rating notice',
          showAgeRestrict: 'Show age restrict',
        },
      },
      tabs: {
        general: 'General',
        description: 'Description',
        rating: 'Rating',
        media: 'Media',
      },
    },
  },
};