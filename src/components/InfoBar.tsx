import "./InfoBar.scss";
import {memo} from "react";

interface IInfoBarProps {
  message: string
}
const InfoBar = memo(({message}: IInfoBarProps) => {
  return (
    <div className="info-bar">
      {message}
    </div>
  )
})

export default InfoBar;