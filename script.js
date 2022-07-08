const InsertValue = (digit) => {
  document.getElementById("display").value =
    document.getElementById("display").value + digit;
};

const InsertSignal = (digit) => {
  if (document.getElementById("display").value != "") {
    document.getElementById("display").value =
      document.getElementById("display").value + digit;
  }
};

const DeleteValue = () => {
  let valor = document.getElementById("display").value;
  valor = valor.slice(0, valor.length - 1);
  document.getElementById("display").value = valor;
};

const ClearDisplay = () => {
  document.getElementById("result").innerHTML = "";
  document.getElementById("display").value = "";
};

const ViewResult = (number) => {
  number = number.replace(/%/gi, "/100").replace(/π/gi, Math.PI);
  if (number != "") {
    document.getElementById("result").innerHTML = eval(number);
    document.getElementById("display").value = eval(number);
  }
};

const CalculateSqrt = () => {
  let value;
  if (document.getElementById("display").value != "") {
    value = eval(
      document
        .getElementById("display")
        .value.replace(/%/gi, "/100")
        .replace(/π/gi, Math.PI)
    );
    document.getElementById("result").innerHTML = Math.sqrt(value);
    document.getElementById("display").value = Math.sqrt(value);
  }
};

const CalculateSquared = () => {
  let value;
  if (document.getElementById("display").value != "") {
    value = eval(
      document
        .getElementById("display")
        .value.replace(/%/gi, "/100")
        .replace(/π/gi, Math.PI)
    );
    document.getElementById("result").innerHTML = value * value;
    document.getElementById("display").value = value * value;
  }
};
