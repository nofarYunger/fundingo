export class Expense {
  constructor(
    public amount: number,
    public timestamp: any,
    public description: String,
    public _id?: String
  ) {}
  setId?() {
    this._id = this.makeId();
  }

  private makeId(length = 6): String {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
  }
}
