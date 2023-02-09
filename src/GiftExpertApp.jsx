import { useState } from "react"
import { AddCategory,GifGrid } from "./components"

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState([])

  const onAddCategory=(newCategory)=>{
    if(categories.includes(newCategory))return
    // setCategories(categories.concat('valorant'))
    // setCategories(cat=>cat.concat('valorant'))
    setCategories(cat=>[newCategory,...cat])
  }

  return (
    <>
    <h1>GiftExpertApp</h1>
    <AddCategory onNewCategory={onAddCategory}/>
    <button onClick={onAddCategory
    }>Agregar</button>
    
      {categories.map(c=>
        <GifGrid key={c} category={c}/>
        )}
    </>
  )
}
