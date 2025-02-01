let plus = document.getElementsByClassName("plus")
let moins = document.getElementsByClassName("moins")
let multiplie = document.getElementsByClassName("multiplie")
let divise = document.getElementsByClassName("divise")
let parenthese = document.getElementsByClassName("parenthese")
let _1 = document.getElementsByClassName("_1")
let _2 = document.getElementsByClassName("_2")
let _3 = document.getElementsByClassName("_3")
let _4 = document.getElementsByClassName("_4")
let _5 = document.getElementsByClassName("_5")
let _6 = document.getElementsByClassName("_6")
let _7 = document.getElementsByClassName("_7")
let _8 = document.getElementsByClassName("_8")
let _9 = document.getElementsByClassName("_9")
let _0 = document.getElementsByClassName("_0")
let virgule = document.getElementsByClassName("virgule")
let carre = document.getElementsByClassName("carre")
let racineCarre = document.getElementsByClassName("racinecarree")
let DEL = document.getElementsByClassName("_DEL")
let equals = document.getElementsByClassName("equals")

let ecriture = ""
let element = document.getElementsByClassName("champentree")

element[0].textContent = ecriture;
function modification(nom, variable) {
    variable += nom;
    element[0].textContent = variable;
    return variable;
}
plus[0].addEventListener("click", () => { ecriture = modification("+", ecriture)})
moins[0].addEventListener("click", () => { ecriture = modification("-", ecriture)})
multiplie[0].addEventListener("click", () => { ecriture = modification("X", ecriture)})
divise[0].addEventListener("click", () => { ecriture = modification("÷", ecriture)})
parenthese[0].addEventListener("click", () => { ecriture = modification("(", ecriture)})
document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        ecriture += ")"
        element[0].textContent = ecriture
    }
    if (event.key === "Backspace") {
        ecriture = ecriture.slice(0, -1)
        element[0].textContent = ecriture
    }
})
_1[0].addEventListener("click", () => { ecriture = modification("1", ecriture)})
_2[0].addEventListener("click", () => { ecriture = modification("2", ecriture)})
_3[0].addEventListener("click", () => { ecriture = modification("3", ecriture)})
_4[0].addEventListener("click", () => { ecriture = modification("4", ecriture)})
_5[0].addEventListener("click", () => { ecriture = modification("5", ecriture)})
_6[0].addEventListener("click", () => { ecriture = modification("6", ecriture)})
_7[0].addEventListener("click", () => { ecriture = modification("7", ecriture)})
_8[0].addEventListener("click", () => { ecriture = modification("8", ecriture)})
_9[0].addEventListener("click", () => { ecriture = modification("9", ecriture)})
_0[0].addEventListener("click", () => { ecriture = modification("0", ecriture)})
virgule[0].addEventListener("click", () => { ecriture = modification(".", ecriture)})
carre[0].addEventListener("click", () => { ecriture = modification("^", ecriture)})
racineCarre[0].addEventListener("click", () => { ecriture = modification("√", ecriture)})
DEL[0].addEventListener("click", () => { 
    ecriture = "";
    element[0].textContent = ecriture
})
let confirmation = true
equals[0].addEventListener("click", () => {
    try {
        element[0].classList.remove("mistake")
        for (let i = 0; i < ecriture.length; i++) {
            confirmation = true
            if (ecriture[i] == "X" || ecriture[i] == "." || ecriture[i] == "÷") {
                if (ecriture[i+1] == "X" || ecriture[i+1] == "." || ecriture[i+1] == "÷") {
                    throw new Error("erreur")
                }
            }
            if (ecriture[i] === "(") {
                confirmation = false
                for (let o = i; o < ecriture.length; o++) {
                    if (ecriture[o] === ")") {
                        ecriture = ecriture.slice(0, o) + "]" + ecriture.slice(o+1)
                        console.log(ecriture[o])
                        confirmation = true
                    }
                }
            }
            if (ecriture[i] === ".") {
                for (let o = i + 1; o < ecriture.length; o++) {
                    if (ecriture[o] === "+" || ecriture[o] === "-" || ecriture[o] === "X" || ecriture[o] === "÷" || ecriture[0] === "√" || ecriture[o] === "(" || ecriture[o] === "]") {
                        break;
                    }
                    if (ecriture[o] === ".") {
                        console.log(ecriture[o])
                        confirmation = false
                        break;
                    }
                }
            }
            if (confirmation === false) {
                console.log("confirmation = false")
                throw new Error("hi!")
            }
        }
        for (let i = 0; i < ecriture.length; i++) {
            if (ecriture[i] === ")") {
                console.log("erreur )")
                throw new Error("erreur")
            }
        }
        if (ecriture[ecriture.length - 1] == "X" || ecriture[ecriture.length - 1] == "÷" || ecriture[ecriture.length - 1] == "." ||  ecriture[ecriture.length - 1] == "√" || ecriture[ecriture.length - 1] == "(" || ecriture[ecriture.length - 1] == "+" || ecriture[ecriture.length - 1] == "-") {
            console.log("erreur a la fin du mot")
            throw new Error("erreur")
        }
        console.log("toujours ok")
        for (let i = 0; i < ecriture.length; i++) {
            if (ecriture[i] === "]") {
                ecriture = ecriture.slice(0, i) + ")" + ecriture.slice(i+1)
            }
        }
        function decouperchaine(chaine) {
            let liste = chaine.match(/-?\d+(\.\d+)?|[-+*\/X÷√()]/g);
            console.log(liste);
        }
        console.log(ecriture)
        ecriture = ecriture.replace(/\)(\d+)/g, ')*$1')
        ecriture = ecriture.replace(/(\d+)\(/g, '$1*(')
        ecriture = ecriture.replace(/\)\(/g, ')*(')
        console.log(ecriture)
        ecriture = ecriture.replace(/\^/g, '**')
        ecriture = ecriture.replace(/X/g, '*')
        ecriture = ecriture.replace(/÷/g, '/')    
        ecriture = ecriture.replace(/√(\d+)/, (match, number) => `Math.sqrt(${number})`)
        decouperchaine(ecriture)
        ecriture = eval(ecriture)
        console.log(ecriture)
        element[0].textContent = ecriture
        ecriture = ""
    } catch (error) {
        console.log(":)")
        ecriture = ""
        element[0].classList.add("mistake")
        element[0].textContent = ecriture
        console.log("apres effet")
    }
})





