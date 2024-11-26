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

  const totalCombinations = localStorage.getItem("chanceWin") || 25;
  const remainingCombinations = totalCombinations - 1;

  const allCombinations = [];
  const symbolsWithoutFirstResult = symbols.filter(
    (symbol) => symbol !== firstResult
  );

  //resulta em determinadas combinações erradas
  for (let i = 0; i < remainingCombinations; i++) {
    const combination = [
      firstResult,
      symbolsWithoutFirstResult[
        Math.floor(Math.random() * symbolsWithoutFirstResult.length)
      ],
      symbolsWithoutFirstResult[
        Math.floor(Math.random() * symbolsWithoutFirstResult.length)
      ],
    ];

    allCombinations.push(combination);
  }

  //insere o resultado correto num índice aleatório
  const randomIndex = Math.floor(Math.random() * (allCombinations.length + 1));
  allCombinations.splice(randomIndex, 0, [
    firstResult,
    firstResult,
    firstResult,
  ]);

  const resultAllCombinations =
    allCombinations[Math.floor(Math.random() * allCombinations.length)];

  return resultAllCombinations;
};

export const getQtdPossibleResults = (homeAmount, bet, setChanceWin) => {
  const possiblePayment = homeAmount - bet * 10;

  let getChance = Math.floor(25 * Math.exp(-0.002 * possiblePayment));

  if (getChance <= 10) {
    getChance = 5;
  } else if (getChance >= 50) {
    getChance = 50;
  }

  window.localStorage.setItem("chanceWin", `${getChance}`);
  setChanceWin(getChance);
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

export const getResultWinner = (
  result,
  bet,
  setBalance,
  setWinner,
  setHomeAmount
) => {
  if (result[0] === result[1] && result[1] === result[2] && result[0] !== "") {
    setTimeout(() => {
      setBalance((prevstate) => prevstate + Number(bet) * 10);
      setWinner(true);
      setHomeAmount((prevstate) => prevstate - Number(bet) * 10);
    }, 1000);
  } else {
    setWinner(false);
    setHomeAmount((prevstate) => prevstate + Number(bet));
  }
};
