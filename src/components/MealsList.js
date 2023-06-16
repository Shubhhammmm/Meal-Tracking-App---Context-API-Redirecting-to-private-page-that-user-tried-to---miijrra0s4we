import React, {useContext } from "react";
import{mealContext} from './MealsProvider'
const MealsList = () => {
    const {meals,tickMeal} =useContext(mealContext)
    return (
        <div>
            <h2>Meals:</h2>
            <ul>
                {meals.map((e)=>(
                    <li key={e.id}>
                    <input 
                        type="checkbox"
                        checked={e.ticked}
                        onChange={()=> tickMeal(e.id)}
                    />
                    {e.name}
                </li>
                ))} 
            </ul>
        </div>
    )
}

export default MealsList;
