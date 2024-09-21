import AppLogo from "../../assets/logo.svg"
export default function Logo(){
       console.log()
       return (
        <a href="./index.html">
        <img className="h-9" src={AppLogo} alt="App logo" />
        </a>
       )
    }