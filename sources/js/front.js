//COMPONENTS
import { getChildsParentNav } from "./components/Nav";
//MODULES
import { getChildsParentQuestions } from "./modules/Questions";
//CSS
import "../sass/main.scss";

window.addEventListener('load', ()=>{
    getChildsParentNav();
    getChildsParentQuestions();
});