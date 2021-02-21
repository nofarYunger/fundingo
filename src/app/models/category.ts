import { Expense } from './expense';

export class Category {
  constructor(
    public title: String,
    public icon: String,
    public color: String,
    public expenses: Expense[] = [],
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
