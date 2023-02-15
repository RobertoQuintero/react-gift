import { fireEvent, render, screen } from "@testing-library/react"
import { GiftExpertApp } from "../src/GiftExpertApp"

describe('Pruebas en GifExpertApp', () => {

  test('debe contener el titulo',()=>{
    render(<GiftExpertApp />)
    // screen.debug()
    expect(screen.getByText('GifExpertApp'))

  })

  test('debe returnar el titulo de la categoria',()=>{
    const category='One Punch'
    render(<GiftExpertApp />)

    const input= screen.getByRole('textbox')
    const form = screen.getByRole('form');
    fireEvent.input(input,{target:{value:category}})
    fireEvent.submit(form)


    fireEvent.input(input, { target: { value: category + '2' } });
    fireEvent.submit(form); //agrega Saitama2

    fireEvent.input(input, { target: { value: category + '3' } });
     fireEvent.submit(form);//agrega Saitama3

//Espero que se hallan agregado 3 categorías cuyos nombres aparecen en etiquetas h3
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3);

   

     screen.debug()
    
    
    

  })
  
})
