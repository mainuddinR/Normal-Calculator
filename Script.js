let prefixValue, suffixValue;
let currentOperation;

function getPressValue(id) {
    let value;
    let StringValue = document.getElementById(id).innerText;
    value = parseFloat(StringValue);
    return value
}

function showScreen(value) {
    let preValue = document.getElementById('Screen').innerText;
    document.getElementById('Screen').innerText = preValue + value;
}

function showOperation(Operation) {
    let preValue = document.getElementById('Screen').innerText
    prefixValue = parseFloat(preValue);
    console.log("Prefix Value: ", prefixValue);
    currentOperation = Operation;
    document.getElementById('Screen').innerText = preValue + Operation;
}
function getInnerText(id) {
    const Text = document.getElementById(id).innerText
    return Text;
}
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function Calculation() {
    let ScreenStore = document.getElementById('Screen').innerText;
    console.log("Screen current value: ", ScreenStore);
    console.log("Current Operation: ", currentOperation);
    console.log(typeof (ScreenStore))

    let operationPosition = ScreenStore.indexOf(currentOperation);
    console.log("Operation position: ", operationPosition);

    let StringSuffix = ScreenStore.slice(operationPosition + 1, ScreenStore.length);
    suffixValue = parseFloat(StringSuffix);
    console.log("Suffix :", suffixValue);
    let count = 0;
    for (let i = 0; i < ScreenStore.length; i++) {
        if (ScreenStore[i] == '+' || ScreenStore[i] == getInnerText('Divide') || ScreenStore[i] == '-' || ScreenStore[i] == '%' || ScreenStore[i] == 'x2' || ScreenStore[i] == getInnerText('Multiple')) {
            count++;
        }
        if (count > 1) {
            setInnerText('Screen', 'Error');
            return 0;
        }
    }
    switch (currentOperation) {
        case '+':
            let sum = prefixValue + suffixValue;
            setInnerText('Screen', sum);
            break;
        case '-':
            let minus = prefixValue - suffixValue;
            setInnerText('Screen', minus);
            break;
        case getInnerText('Divide'):
            let divide;
            if (suffixValue != 0) {
                divide = prefixValue / suffixValue;
                setInnerText('Screen', divide);
            }
            else {
                setInnerText('Screen', 'Undefined');
            }
            break;
        case getInnerText('Multiple'):
            let Multiple = prefixValue * suffixValue;
            setInnerText('Screen', Multiple);
            break;
        case 'x2':
            let Square = prefixValue * prefixValue;
            setInnerText('Screen', Square);
            break;
        case '%':
            let par = (suffixValue / prefixValue) * 100;
            par1 = par + '%';
            setInnerText('Screen', par1);
            break;
        default:
            setInnerText('Screen', 'Error');
    }
}

document.getElementById('Eight').addEventListener('click', function () {
    let value = getPressValue('Eight');
    //document.getElementById(Screen).innerText=value;
    showScreen(value);
});
document.getElementById('Seven').addEventListener('click', function () {
    let value = getPressValue('Seven');
    showScreen(value);
});
document.getElementById('Nine').addEventListener('click', function () {
    let value = getPressValue('Nine');
    showScreen(value);
});
document.getElementById('Zero').addEventListener('click', function () {
    let value = getPressValue('Zero');
    showScreen(value);
});
document.getElementById('Six').addEventListener('click', function () {
    let value = getPressValue('Six');
    showScreen(value);
});
document.getElementById('Five').addEventListener('click', function () {
    let value = getPressValue('Five');
    showScreen(value);
});
document.getElementById('Four').addEventListener('click', function () {
    let value = getPressValue('Four');
    showScreen(value);
});
document.getElementById('Three').addEventListener('click', function () {
    let value = getPressValue('Three');
    showScreen(value);
});
document.getElementById('Two').addEventListener('click', function () {
    let value = getPressValue('Two');
    showScreen(value);
});
document.getElementById('One').addEventListener('click', function () {
    let value = getPressValue('One');
    showScreen(value);
});
document.getElementById('Summation').addEventListener('click', function () {
    showOperation('+');
});
document.getElementById('Minus').addEventListener('click', function () {
    showOperation('-');
});
document.getElementById('Multiple').addEventListener('click', function () {
    showOperation(getInnerText('Multiple'));
});
document.getElementById('Divide').addEventListener('click', function () {
    showOperation(getInnerText('Divide'));
});
document.getElementById('AC').addEventListener('click', function () {
    document.getElementById('Screen').innerText = '';
});
document.getElementById('Equal').addEventListener('click', function () {
    Calculation();
});
document.getElementById('Parsent').addEventListener('click', function () {
    showOperation('%');
});
document.getElementById('Square').addEventListener('click', function () {
    showOperation(getInnerText('Square'));
});
document.getElementById('Dot').addEventListener('click', function () {
    let value = '.';
    showScreen(value);
});
document.getElementById('Delete').addEventListener('click', function () {
    let StringValue = getInnerText('Screen');
    if (StringValue != "") {
        let newString = StringValue.slice(0, StringValue.length - 1);
        setInnerText('Screen', newString);
    }
});
