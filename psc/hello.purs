module Main where
import Debug.Trace
data Person = Person { name :: String, age :: Number }

showPerson :: Person -> String
showPerson (Person o) = o.name ++ ", aged " ++ show o.age

examplePerson :: Person
examplePerson = Person { name: "Bonnie", age: 26 }

main = trace (showPerson examplePerson)
