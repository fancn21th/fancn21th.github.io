# Lodash FP

## get

> get nested property

```js
import { get } from "lodash/fp";

const aryaStark = {
  name: "Arya Stark",
  age: 15,
  father: { name: "Ned Start" },
  mother: { name: "Catelyn Stark" },
};

const jonSnow = {
  name: "Jon Snow",
  age: 30,
  father: { name: "Ned Stark" },
  mother: null,
};

get("mother.name", aryaStark); // 'Catelyn Stark'
get("mother.name", jonSnow); // undefined
```

## getOr

> get nested property or given default value

```js
import { getOr } from "lodash/fp";

const houseLannister = { name: "Lannister" };
const houseStark = { name: "Stark" };
const uknownHouse = { name: null };
const invalidHouse = {};

getOr("UnknownHouse", "name", unknownHouse); // null
getOr("Invalid House", "name", invalidHouse); // 'Invalid House'
```

## Reference

- [some very useful lodash fp functions](https://dev.to/vcpablo/javascript-some-very-useful-lodash-fp-functions-ejh)
