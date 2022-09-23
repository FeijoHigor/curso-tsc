// Pode ser qualquer letra que quiser, mas tem algumas que são mais usadas por facilitar a leitura
// S => state
// T => type
// K => key
// V => value
// E => Element
function useState() {
    var state; //esse "= string" está falando que o tipo padrão é string
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
//const newState = useState<boolean>() // booleano não vai aceitar porque só pode ser number ou string
//const newState = useState<number>() //number vai aceitar só para os parametros que são numeros
var newState = useState(); // eu defini o padrão como string, então eu não preciso colocar aqui
newState.setState("123"); //O primeiro tipo que passar não vai poder mudar depois, aqui o primeiro tipo que eu coloquei foi uma string
console.log(newState.getState());
//newState.setState(123) //dê erro, porque o tipo que eu defini primeiro é uma string
//console.log(newState.getState())
