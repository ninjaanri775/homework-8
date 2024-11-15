import { useState } from 'react'
import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themes'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    transition: 0.1s;
  }
  body{
    background-color:${props => props.theme.background} ;
  }
`

function App() {
  const [todo, settodo] = useState([])
  const [isDark, setisDark] = useState(false)
  
  const addtodo = (e) => {
    
    const input = document.querySelector('.addintodo');
    e.preventDefault();

    const newnewtodo = input.value
    
    if (newnewtodo) {
      settodo([newnewtodo, ...todo])
      input.value = "";

    }


  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle/>
 <Main>
       <Backimg  src={isDark ? darkTheme.img : lightTheme.img} alt="" />
       <Todo>T O D O</Todo>
         <form onSubmit={addtodo}>
        
        <Todoinput placeholder='Create a new todo...' type="text" className='addintodo' />
      </form>
      <Darklight onClick={() => setisDark(!isDark)}> <img src={isDark ? darkTheme.img2 : lightTheme.img2}    alt=""          /> </Darklight>
    
    <Todolist> 
      <Todoul>
      {todo.map(el => (

        <Todoli>{el}</Todoli>
        ))}

      </Todoul>
      </Todolist>
      
      </Main>

    </ThemeProvider>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Todoul = styled.ul`
  list-style-type: none; 

`;

const Todoli = styled.li`

 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 22px;
font-weight: 400;
line-height: 18px;
letter-spacing: -0.25px;
padding-left: 80px;
text-decoration-skip-ink: none;
border-bottom: 1px solid #393A4B;;
padding-top: 15px;
padding-bottom: 15px;
`;


const Todolist = styled.div`
width: 400px;
height: 339px;
top: 246px;
left: 450px;
gap: 0px;
opacity: 0px;
overflow-y: auto;
overflow-x: auto;
background-color: ${props => props.theme.background2};
color: ${props => props.theme.color};;
transform: translateY(-200px);
border-radius: 5px;
box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.2);
&::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 426px) {
    width: 320px;
    height: 432px;
    transform: translateY(-170px);
  }
`

const Backimg = styled.img`
  width: 100%;

  @media (max-width: 426px) {
    height: 200px;
  }

`



const Todoinput = styled.input`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 18px;
background-color: ${props => props.theme.background2};
width: 540px;
height: 64px;
top: 158px;
left: 450px;
gap: 0px;
opacity: 0px;
transform: translateY(-198px);
padding-left: 70px;
border: none;


&::placeholder{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 18px;
font-weight: 400;
line-height: 18px;
letter-spacing: -0.25px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;


}

@media (max-width: 426px) {
    width: 327px;
    transform: translateY(-150px);
  }

`

const Darklight = styled.button`
  background-color: transparent;
  border: none;
  transform: translateY(-354px)translateX(290px);

  @media (max-width: 426px) {

transform: translateY(-280px)translateX(184px);
}
`

const Todo = styled.h1`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: white;
  transform: translateY(-250px)translateX(-226px);
  font-size: 40px;
  @media (max-width: 426px) {

    transform: translateY(-179px)translateX(-114px);
  }

`

export default App
