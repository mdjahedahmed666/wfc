<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer: B: `ReferenceError: greetign is not defined`
</b></summary>
<p>

#### Answer: ?

<i>Because javascript is case sensitive greeting and greetign is not same. greeting is declared but greetign is not declared. so it will give reference errors.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer:2.C: "12"
</b></summary>
<p>

#### Answer: ?

<i>Because + operator concatenates number and string resulting string. sp 1 and "2" would be "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer: A: `['🍕', '🍫', '🥑', '🍔']`

</b></summary>
<p>

#### Answer: ?

<i>Because favouriteFood is set to "🍝" which does not affect the food array so console the food will show the same food array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer:B: `Hi there, undefined`</b></summary>
<p>

#### Answer: ?

<i>Because sayHi function expect a parameter but when call the funcion no argument is passed so it will be undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>C: 3</b></summary>
<p>

#### Answer: ?

<i>If the number is truthy then count will increase when nums is 0 then count will not increase when 1 count will 1 , when the nums is 2 count will increment and valu would ve 2 , when nums is 3 it will increment and count will be 3</i>

</p>
</details>
