
interface IDefaultStore {
  userID: Number;
  consultantType: { selected: string};
}
const defaultStore: IDefaultStore = {
    userID: 1,
    consultantType: {
      selected :'gp'
    },
  }

  export {
    defaultStore
  }