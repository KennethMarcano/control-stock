
function isValidCNPJ(cnpj) {  
    if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) {  
        return false; // CNPJ inválido  
    }  

    // Cálculo del primer dígito de verificación  
    let sum = 0;  
    let weight = 5;  
    for (let i = 0; i < 12; i++) {  
        sum += parseInt(cnpj[i]) * weight;  
        weight = weight === 2 ? 9 : weight - 1;  
    }  
    let firstDigit = (sum % 11 < 2) ? 0 : 11 - (sum % 11);  

    if (parseInt(cnpj[12]) !== firstDigit) {  
        return false; // CNPJ inválido  
    }  

    // Cálculo del segundo dígito de verificación  
    sum = 0;  
    weight = 6;  
    for (let i = 0; i < 13; i++) {  
        sum += parseInt(cnpj[i]) * weight;  
        weight = weight === 2 ? 9 : weight - 1;  
    }  
    let secondDigit = (sum % 11 < 2) ? 0 : 11 - (sum % 11);  

    return parseInt(cnpj[13]) === secondDigit; // Retorna verdadero o falso  
} 

function isValidCPF(cpf) {      
    // Verificar longitud  
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {  
        return false; // CPF inválido  
    }  

    // Cálculo del primer dígito de verificación  
    let sum = 0;  
    for (let i = 0; i < 9; i++) {  
        sum += parseInt(cpf[i]) * (10 - i);  
    }  
    let firstDigit = (sum * 10) % 11;  
    if (firstDigit === 10 || firstDigit === 11) {  
        firstDigit = 0;  
    }  
    if (parseInt(cpf[9]) !== firstDigit) {  
        return false; // CPF inválido  
    }  

    // Cálculo del segundo dígito de verificación  
    sum = 0;  
    for (let i = 0; i < 10; i++) {  
        sum += parseInt(cpf[i]) * (11 - i);  
    }  
    let secondDigit = (sum * 10) % 11;  
    if (secondDigit === 10 || secondDigit === 11) {  
        secondDigit = 0;  
    }  

    return parseInt(cpf[10]) === secondDigit; // Retorna verdadero o falso  
}  


export default function validaTaxNumber(taxNumber) {  
    taxNumber = taxNumber.replace(/[^\d]+/g, '');  
    if (taxNumber.length !== 11 || taxNumber.length !== 14 || /^(\d)\1{10}$/.test(taxNumber)) { 
        return false; 
    }  
}  
