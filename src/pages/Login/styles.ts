const styles: any = () => {
  return {
    authBoard: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '100vh',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      padding: '32px',
      color: '#b1b1b1',
    },
    title: {
      display: 'block',
      margin: '12px 0 0',
      fontSize: '20px',
      fontWeight: 'bold',
    },
    text: {
      display: 'block',
      margin: '8px 0 16px',
      fontSize: '12px',
      textAlign: 'center',
    },
    button: {
      marginBottom: '8px',
    },
    locales: {
      position: 'fixed',
      top: '24px',
      right: '24px',
    },
    frame: {
      display: 'block',
      width: '400px',
      height: '500px',
      backgroundColor: 'white',
      border: 'none',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContent: {
      position: 'relative',
      padding: '32px',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,.3)',
      borderRadius: '4px',
      outline: 'none',
    },
  };
};

export default styles;
