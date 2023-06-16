import React, { useContext } from "react";
import {mealContext} from './MealsProvider'
const Counter = () => {
const {meals}=useContext(mealContext)
const remainingMeals = meals.filter((meal) => !meal.ticked);
    return (
        <div>
            <h3>Meals Remaining: {remainingMeals.length}</h3>
        </div>
    )
}

export default Counter;
