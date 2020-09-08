export class BudgetItem {
  constructor(public description: string, public amount: number) {} // this is equivalent declaring these above and then using this.description = description inside the constructor, it's just shorthand - this is provided by TypeScript
}
