type FooDate = Date & { foo: unknown };

interface IFoo {
  date: FooDate;
}

const obj: IFoo = {
  date: new Date()
}

obj.date.foo = 42;

console.log(obj);
