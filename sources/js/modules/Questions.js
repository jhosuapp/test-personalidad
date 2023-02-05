const Questions = (()=>{


    const SendTest = ()=>{
        const getAllInputsSend = document.querySelectorAll('.block-questions input');
        const getBtnSend = document.querySelector('#btn-send');
        const getAllBlockQuestionsSend = document.querySelectorAll('.block-questions');
        const hundredPercentSend = getAllBlockQuestionsSend.length * 60;
        const getTestResult = document.querySelector('.test-result');
        const getTestCtn = document.querySelectorAll('.test-result__ctn article');
        //EVENTO CLICK EN BOTÓN DE ENVIAR
        getBtnSend.addEventListener('click', ()=>{
            let arrayPercent = []; 
            getAllInputsSend.forEach((data)=>{
                if(data.checked){
                    arrayPercent.push(parseInt(data.value));
                }
            });
            const unifiqueArr = arrayPercent.reduce((a, b) => a + b, 0);
            const calcPercent = (100 * unifiqueArr) / hundredPercentSend;
            console.log(Math.trunc(calcPercent));
            if(Math.trunc(calcPercent) >= 0 && Math.trunc(calcPercent) < 33){
                getTestResult.classList.add('enable');
                getTestCtn[0].classList.add('enable');
            }else if(Math.trunc(calcPercent) >= 34 && Math.trunc(calcPercent) < 66){
                getTestResult.classList.add('enable');
                getTestCtn[1].classList.add('enable');
            }else if(Math.trunc(calcPercent) >= 66 && Math.trunc(calcPercent) <= 100){
                getTestResult.classList.add('enable');
                getTestCtn[2].classList.add('enable');
            }
        });
    }

    //BARRA DE PROGRESO
    const ProgressBar = ()=>{
        const getAllInputs = document.querySelectorAll('.block-questions input');
        const getAllBlockQuestions = document.querySelectorAll('.block-questions');
        const getProgressBar = document.querySelector('#progress-bar');
        const getFollowPercent = document.querySelector('#follow-percentage');

        const hundredPercent = getAllBlockQuestions.length;
        getAllInputs.forEach((data)=>{
            data.addEventListener('click', ()=>{
                data.parentNode.classList.add('validate-question');
                const getAllBlockQuestionsValidate = document.querySelectorAll('.validate-question');
                const getPercent = (100 * getAllBlockQuestionsValidate.length) / hundredPercent;
                getProgressBar.style.width = `${getPercent}%`;
                getFollowPercent.textContent = `${Math.trunc(getPercent)}%`;
            });
        });
    }
    //SETEAMOS ATRIBUTO DE TAB Y VALIDAMOS TAB ACTUAL
    const QuestionsTab = ()=>{
        const getCtnTab = document.querySelectorAll('.tab__ctn');
        const getBtnTab = document.querySelector('.tab__btn');
        const getTotalPage = document.querySelector('#total-page');
        const getActualPage = document.querySelector('#actual-page');
        //SETEO DE ATRIBUTO TAB CONTENEDOR
        getCtnTab[0].classList.add('active');
        getCtnTab.forEach((data, indice)=>{
            data.setAttribute('data-tabCtn', indice);
        });
        //SETEO DEL TOTAL DE PAGINAS A TEXTO DINAMICO Y PÁGINA ACTUAL
        getTotalPage.textContent = getCtnTab.length;
        getActualPage.textContent = 1;
        //SETEO DE ATRIBUTO TAB BOTON
        getBtnTab.setAttribute('data-count', 0);
        getBtnTab.addEventListener('click', ()=>{
            const getDataAtrCount = parseInt(getBtnTab.getAttribute('data-count'));
            const suma = getDataAtrCount + 1;
            //VALIDAMOS QUE EL CONTENEDOR SI EXISTA PARA CAMBIAR DE PASO
            if(getCtnTab.length > suma){
                getBtnTab.setAttribute('data-count', suma);
                //VALIDAMOS POSICIÓN DE CONTENEDOR Y TAB
                getCtnTab.forEach((data, indice)=>{
                    data.setAttribute('data-tabCtn', indice);
                    //CREAMOS CONTADOR Y VALIDAMOS QUE EL NUMERO SEA IGUAL AL DEL ATRIBUTO
                    getCtnTab.forEach((data)=>{
                        data.classList.remove('active');
                        const getAtrCtn = data.getAttribute('data-tabCtn');
                        if(getAtrCtn == suma){
                            data.classList.add('active');
                        }
                    });
                });
                //PAGINADOR
                getActualPage.textContent = suma + 1;
            }
            //VALIDAMOS SI ES EL CONTENEDOR FINAL
            if(getCtnTab.length == suma + 1){
                getBtnTab.textContent = 'Enviar';
                //ENVÍO DEL TEST
                SendTest();
            }
        });

    }   
    return {
        getChildsQuestions : function(){
            try{
                QuestionsTab();
            }catch(err){ }
            try{
                ProgressBar();
            }catch(err){ }
        }
    }

})();


const getChildsParentQuestions = ()=>{
    Questions.getChildsQuestions();
}

export {
    getChildsParentQuestions
}