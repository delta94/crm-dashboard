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
      padding: '32px',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: '#b1b1b1',
    },
    title: {
      fontWeight: 'bold',
      fontSize: '20px',
      margin: 0,
      display: 'block',
      marginTop: '12px',
    },
    text: {
      display: 'block',
      fontSize: '12px',
      marginTop: '8px',
      marginBottom: '16px',
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
      border: 'none',
      backgroundColor: 'white',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContent: {
      position: 'relative',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,.3)',
      borderRadius: '4px',
      padding: '32px',
      outline: 'none',
    },
  };
};

export default styles;