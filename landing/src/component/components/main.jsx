import { LeftPanel } from "./leftPanel"
import { RightPanel } from "./rightPanel"
import "./styles/main.css"

export function Main () {
  return (
    <div className="main">
      <LeftPanel/>
      <RightPanel/>
    </div>
  )
}