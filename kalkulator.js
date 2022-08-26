const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    isWaitForSecondNumber: false,
};
   
function updateDisplay() {
    document.querySelector("#displaynumber").innerText = calculator.displayNumber
    
}
   
function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.isWaitForSecondNumber = false;
}
   
function inputDigit(digit) {
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

function handleOperator(operator) {
    if (!calculator.isWaitForSecondNumber) {
      calculator.operator = operator;
      calculator.isWaitForSecondNumber = true;
      calculator.firstNumber = calculator.displayNumber;
   
      // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
      calculator.displayNumber = '0';
    } else {
      alert('Operator sudah ditetapkan');
    }
}

function performCalculation() {
  if (calculator.firstNumber == null || calculator.operator == null) {
    alert('Anda belum menetapkan operator');
    return;
  }
   
  let result = 0;
    if (calculator.operator === '+') {
      result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else if (calculator.operator === '-'){
      result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    } else if (calculator.operator === '×'){
      result = parseInt(calculator.firstNumber) * parseInt(calculator.displayNumber);  
    } else if (calculator.operator === '÷'){
      result = parseInt(calculator.firstNumber) / parseInt(calculator.displayNumber); 
  }
   
  //penambahan untuk proses menambahkan riwayat kalkusalsi
  // objek yang akan dikirimkan sebagai argumen fungsi putHistory()
  const history = {
    firstNumber: calculator.firstNumber,
    secondNumber: calculator.displayNumber,
    operator: calculator.operator,
    result: result
  }
  putHistory(history);
  calculator.displayNumber = result;
  renderHistory();
}
   
const tombols = document.querySelectorAll('.tombol');
for (const tombol of tombols) {
    tombol.addEventListener('click', function (event) {
      // mendapatkan objek elemen yang diklik
      const target = event.target;

      if (target.classList.contains('clear')) {
        clearCalculator();
        updateDisplay();
        return;
      }

      if (target.classList.contains('equals')) {
        performCalculation();
        updateDisplay();
        return;
      }

      if (target.classList.contains('operator')) {
        handleOperator(target.innerText);
        return;
      }
      
      inputDigit(target.innerHTML);
      updateDisplay();
    });
}

//mengatur javascript agar bisa berfungsi pada bagian Navigasi
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => nav.classList.toggle("active"));

//mengatur javascript agar bisa berfungsi pada Teks yang bergerak untuk timbul di bagian heder, Selamat Datang Di Web Saya
const textElement = document.getElementById("text");
const speedElement = document.getElementById("speed");
const text = "Ini adalah Kalkulator Website Rifqi";
let index = 1;
let speed = 300 / speedElement.value;

const writeText = () => {
  textElement.innerText = text.slice(0, index);
  index++;
  if (index > text.length) index = 1;
  setTimeout(writeText, speed);
};

writeText();