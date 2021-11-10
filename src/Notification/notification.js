import Notification from ".";
import { useSelector } from "react-redux";

const CustomNotification = () => {
  const Visible = useSelector((state) => state?.NotificationReducer?.Visible);
  const Msg = useSelector((state) => state?.NotificationReducer?.message);
  const timer = useSelector((state) => state?.NotificationReducer?.timer);
  const color = useSelector((state) => state?.NotificationReducer?.color);

  return (
    <>{Visible && <Notification text={Msg} timer={timer} color={color} />}</>
  );
};

export default CustomNotification;
