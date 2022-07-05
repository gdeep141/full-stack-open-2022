const Notification = ({ message, error }) => {
  const style = {
    color: "white",
    background: error ? "red" : "green",
    fontSize: "20px",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };

  if (message === null || message === "") {
    return null;
  }

  return <div style={style}>{message}</div>;
};

export default Notification;
