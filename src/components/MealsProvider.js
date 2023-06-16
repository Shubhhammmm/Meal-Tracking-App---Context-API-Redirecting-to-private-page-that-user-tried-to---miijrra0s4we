import React, { useState,createContext } from "react";
export const mealContext=createContext()
const todaysMeals = [
    { id: 1, name: 'Baked Beans'},
    { id: 2, name: 'Baked Sweet Potatoes' },
    { id: 3, name: 'Baked Potatoes'},
]

const MealsProvider = ({children}) => {
    const [meals, setMeals] = useState(todaysMeals);
    function tickMeal(id) {
        setMeals(
            meals.map((e) => (
                e.id === id ? { ...e, ticked: !e.ticked } : e
            ))
        )
    }

    return (
        <div>
            <mealContext.Provider value={{meals,tickMeal}}>
                {children}
            </mealContext.Provider>
        </div>
    )
};

export default MealsProvider;
