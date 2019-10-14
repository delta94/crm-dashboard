const styles: any = () => {
  return {
    listItem: {
      paddingLeft: '1rem',
    },
    listItemText: {
      paddingLeft: 2,
      fontSize: '1rem',
    },
    sidebarIsOpen: {
      paddingLeft: 25,
      transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
    },
    sidebarIsClosed: {
      paddingLeft: 0,
      transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
    },
  };
};

export default styles;
