/*
export const mapAccountFromApiToVm = (account) => {
  return {
    id: account.id,
    type: account.type,
    alias: account.name,
  };
};

export const mapAccountFromVmToApi = (account) => {
  return {
    id: account.id,
    type: account.type,
    name: account.alias,
  };
};
*/

export const mapAccountVmToApi = (account) => ({
  ...account,
  name: account.alias,
});
export const mapAccountApiToVm = (account) => ({
  ...account,
  alias: account.name,
});
