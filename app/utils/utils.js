export const getResultSymbols = (symbols) => {
  const difficult = localStorage.getItem("difficult");
  const firstResult = symbols[Math.floor(Math.random() * symbols.length)];
  let symbolsToUse = symbols;

  switch (difficult) {
    case "green":
      return [firstResult, firstResult, firstResult];
    case "red":
      symbolsToUse = symbols.filter((symbol) => symbol !== firstResult);
      break;
  }

  const allCombinations = [];

  for (let j = 0; j < symbols.length; j++) {
    for (let k = 0; k < symbols.length; k++) {
      allCombinations.push([firstResult, symbols[j], symbols[k]]);
    }
  }

  const result = [
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)],
    symbols[Math.floor(Math.random() * symbols.length)],
  ];

  return result;
};

export const playGame = (
  bet,
  balance,
  setBalance,
  setMessageBet,
  setResult,
  symbols
) => {
  if (bet > balance) {
    setMessageBet("Saldo insuficiente");
    return;
  }

  if (bet == 0) {
    setMessageBet("Digite um valor");
    return;
  }

  setMessageBet("");
  setBalance(balance - bet);
  setResult(getResultSymbols(symbols));
};

export const getResultWinner = (result, bet, setBalance, setWinner) => {
  if (result[0] === result[1] && result[1] === result[2] && result[0] !== "") {
    setTimeout(() => {
      setBalance((prevstate) => prevstate + bet * 10);
      setWinner(true);
    }, 1000);
  } else {
    setWinner(false);
  }
};
