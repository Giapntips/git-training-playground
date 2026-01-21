// app/calculator.js

// Các hàm toán học cơ bản
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

// Hàm tính toán từ chuỗi lệnh, ví dụ: "add 2 3"
export function calculate(expression) {
  if (typeof expression !== "string") {
    throw new Error("Expression must be a string");
  }

  const parts = expression.trim().split(/\s+/);
  if (parts.length !== 3) {
    throw new Error("Expression format must be: <op> <a> <b>");
  }

  const [op, x, y] = parts;
  const a = Number(x);
  const b = Number(y);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error("Operands must be numbers");
  }

  switch (op) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
    default:
      throw new Error(`Unknown operation: ${op}`);
  }
}

// Đoạn demo nhỏ để chạy nhanh bằng node
if (require.main === module) {
  console.log("Demo calculator:");
  console.log("add 2 3 =", calculate("add 2 3"));
  console.log("multiply 4 5 =", calculate("multiply 4 5"));
}

<<<<<<< HEAD
function Hieu(){
  console.log("hieu desu");
}
=======
function huyTestCommitCalculator() {
  return console.log("LE MINH HUY!");
}
>>>>>>> 222334206dfa51f5df1edcaadc3aed55c8a5dac6
