import { render,screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('prueba en GifItem', () => {
  const url='https://onepunch.com/images/12345abdc'
  const title= 'One Punch'

  test('evaluar snapshot', () => { 
    const {container}=render(<GifItem url={url} title={title}/>)
    expect(container).toMatchSnapshot()
  })

  test('debe mostar la imagen con el URL y el ALT indicado', () => { 

    render(<GifItem url={url} title={title} />)
    // screen.debug()
    // expect(screen.getByRole('img').src).toBe(url)
    // expect(screen.getByRole('img').alt).toBe(title)
    
    const {src,alt}= screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(alt)
  })
  
  test('debe mostar el titulo', () => { 
    
    render(<GifItem url={url} title={title} />)
    //despues de l render utilizamos screen para referirnos al componente
    expect(screen.getByText(title)).toBeTruthy()


  
  })

  

  
  
  
})


