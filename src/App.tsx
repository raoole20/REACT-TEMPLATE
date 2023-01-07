import { Box } from "@mui/material"

// My Imports -------------------------
import "./assets/sass/tailwind.scss"
import Todo from "./testcomponents/Todo"

function App() {
  return (
    <Box 
      className="box-layout"
      height={'100vh'} 
      width={'100%'}
      >
      <Todo />
    </Box>
  )
}

export default App
