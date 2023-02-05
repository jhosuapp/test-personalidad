const Nav = (()=>{

    const NavConfig = ()=>{
        
    }

    const Loader = ()=>{
        const getLoaderCtn = document.querySelector('.loader-ctn');
        getLoaderCtn && getLoaderCtn.classList.add('hidden');
    }

    const WelCome = ()=>{
        const getCtnWelcome = document.querySelector('.test__welcome');
        getCtnWelcome && getCtnWelcome.classList.add('enable');
    }

    return {
        getChildsNav : function(){
            NavConfig();
            try{
                Loader();
            }catch(error){ }
            try{
                WelCome();
            }catch(error){ }
        }
    }

})();


const getChildsParentNav = ()=>{
    Nav.getChildsNav();
}

export {
    getChildsParentNav
}