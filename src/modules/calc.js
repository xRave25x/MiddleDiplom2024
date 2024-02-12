const calc = () => {
    const calcBlock = document.getElementById('calc')
    const calcType = document.getElementById('calc-type');
    const calcTypeMaterial = document.getElementById('calc-type-material');
    const calcInput = document.getElementById('calc-input');
    const calcTotal = document.getElementById('calc-total');



    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcTypeMaterialValue = calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
        const calcInputValue = calcInput.value;

        let totalValue = 0;

        totalValue = Math.round(calcInputValue * calcTypeValue * calcTypeMaterialValue)

        calcTotal.value = totalValue;
    }

    if(calcBlock) {
        calcBlock.addEventListener('input', e => {

            if(e.target === calcType || e.target === calcTypeMaterial || e.target === calcInput){
                countCalc();
            }
    })

    }

    if(calcInput){
        calcInput.addEventListener('input', e => {
            e.target.value = e.target.value.replace(/[^0-9]/gi, '');
        })
    }

}

export default calc;