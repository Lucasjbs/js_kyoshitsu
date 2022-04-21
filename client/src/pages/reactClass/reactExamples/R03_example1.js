import React from 'react'




function R03_example1() {
  return (
    <section className='App'>
      <FoodList></FoodList>
    </section>
  )
}

const foodAmount1 = 8 * 3 + 8

const FoodList = () => {
  const foodName1 = "Apple"
  const foodName2 = "Raw Cow Meat"
  return (
    <article>
      <h3>{foodName1}</h3>
      <h3>{foodAmount1}</h3>

      <h3>{foodName2.toUpperCase()}</h3>
      <h3>{/* const foodAmount2 = 8 - 5 + 7 (ERROR EXAMPLE) */}</h3>
      <h3>{8 - 5 + 7}</h3>
    </article>
  )
}

export default R03_example1