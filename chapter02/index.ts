// @ts-nocheck
/*
 * Example
 */
let a = 1 + 2 // number
let b = a + 3 // number
let c = {
  apple: a, // number
  banana: b, // number
}
let d = c.apple * 4 // number

/*
 * Exercise
 */
let e = c.apple * "string" // error: The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.

let f = c.apple.a // error: Property 'a' does not exist on type 'number'.

let g: never = 1 // error: Type 'number' is not assignable to type 'never'.

let h = "string"
h.push(1) // error: Property 'push' does not exist on type 'string'.

let i = { a: 1 }
i = 1 // error: Type 'number' is not assignable to type '{ a: number; }'.
