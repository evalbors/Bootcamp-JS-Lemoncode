const mapMovementApiToVm = (movement) => ({
  ...movement,
  amount: `${movement.amount} €`,
  balance: `${movement.balance} €`,
  transaction: new Date(movement.transaction).toLocaleDateString(),
  realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
});

export const mapMovementsApiToVm = (movements) =>
  Array.isArray(movements)
    ? movements.map((movement) => mapMovementApiToVm(movement))
    : [];

const mapDataAccount = (account) => ({
  ...account,
  iban: account.iban,
  balance: `${account.balance} €`,
  alias: account.name,
});


/*
export const mapDataAccountToVM = (accountList) => {
  Array.isArray(accountList)
    ? accountList.map(
        (account) => movement.accountId === id && mapDataAccount(account)
      )
    : [];
};  */
