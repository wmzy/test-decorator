function foo(target: Object) {}
function bar(target: Object, propertyKey: string | symbol, parameterIndex: number) {}

@foo
export class Foo {
  constructor(@bar foo: any, @bar bar: any) {}
}
