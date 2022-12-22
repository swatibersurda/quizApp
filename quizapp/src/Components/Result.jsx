import { useSelector } from "react-redux"
import { Text,Box, Heading } from "@chakra-ui/react"

export const Result=()=>{
     const data=useSelector((state)=>state.AppReducer.data);
     const correct=useSelector((state)=>state.AppReducer.correct);
    return(
        <Box>
             <Box width={"50%"} height="400px" border={"1px solid green"} margin={"auto"} marginTop="5%">
            <Heading>Watch Your Results</Heading>

          <Text fontSize={"25px"} fontWeight={"600"} color={"balck"}>Total </Text> <Text fontSize={"25px"} fontWeight={"600"} color={"green"}>:{data.length}</Text>
          <Text fontSize={"25px"} fontWeight={"600"} color={"balck"}>Correct</Text>  <Text fontSize={"25px"} fontWeight={"600"} color={"green"}>:{correct}</Text>
          <Text fontSize={"25px"} fontWeight={"600"} color={"balck"}>Incorrect</Text> <Text fontSize={"25px"} fontWeight={"600"} color={"green"}>:{data.length-correct}</Text>
          <Text fontSize={"25px"} fontWeight={"600"} color={"balck"}>Percentage</Text><Text fontSize={"25px"} fontWeight={"600"} color={"green"}>:{correct/data.length*100}</Text>
        </Box>
        </Box>
       
    )
}