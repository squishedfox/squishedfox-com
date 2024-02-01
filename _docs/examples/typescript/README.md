---
title: Typescript Example
layout: page
parent: Examples
has_children: false
permalink: /examples/typescript/
---

# Typescript Examples

## How to infer dynamic props

```ts
interface Foo {
    prop1: any;
}
  
interface Bar {
    prop2: any;
}

type ComponentTypes = {
    foo: Foo;
    bar: Bar;
};

type ComponentProps<T extends keyof ComponentTypes> = {
    [key in keyof ComponentTypes[T]]: ComponentTypes[T][key];
};

// Example usage:

const example1: ComponentProps<'foo'> = {
    prop1: 'value1',
};

const example2: ComponentProps<'bar'> = {
    prop2: 42,
};
  
```