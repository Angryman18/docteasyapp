const defaulValue = {
  Visible: false,
  message: null,
  timer: 4000,
  color: "#212121",
};

const NotificationReducer = (state = defaulValue, actions) => {
  switch (actions.type) {
    case "visible":
      switch (actions.color) {
        case "SUCCESS":
          return {
            Visible: true,
            message: actions.message,
            timer: actions.timer,
            color: "#5cb85c",
          };
        case "ERROR":
          return {
            Visible: true,
            message: actions.message,
            timer: actions.timer,
            color: "#d9534f",
          };
        case "INFO":
            return {
                Visible: true,
                message: actions.message,
                timer: actions.timer,
                color: "rgba(0,114,187,1)",
              };
        default:
          return {
            Visible: true,
            message: actions.message,
            timer: actions.timer,
            color: "#212121",
          };
      }
    case "visibleOff":
      return { Visible: false };
    default:
      return state;
  }
};

export default NotificationReducer;
