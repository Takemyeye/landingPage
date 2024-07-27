import { Text } from "./textUnit"
import "./styles/innovation.css"

  const img = {
    img:"img/img.jpg"
  }
export function Innovation () {

  return (
    <div className="innovation">
        <div className="innovationText">
          <h5>New Features</h5>
          <h1>Faster iteration. More innovation.</h1>
          <h3>The platform for rapid progress. Let your team focus on shipping features instead of managing infrastructure with automated CI/CD, built-in testing, and integrated collaboration.</h3>
        </div>
        <div className="container">
          <div className="block">
            <Text
              h2="Collaboration"
              h3="Make collaboration seamless with built-in code review tools."/>
            <Text
              h2="Automation"
              h3="Automate your workflow with continuous integration."/>
            <Text
              h2="Scale"
              h3="Deploy to the cloud with a single click and scale with ease."/>
          </div>
          <img src={img.img} alt="TakeMyEyeGit" />
        </div>
    </div>
  )
}