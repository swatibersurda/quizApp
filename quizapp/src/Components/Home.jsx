import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getData } from '../Redux/action';
import { GET_DATA_SUCESS } from '../Redux/actionTypes';
export const Home = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [difficulty, setdifficulty] = useState("");
    const [amount, setAmount] = useState(10);
    console.log(name, category, difficulty, amount);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const data=useSelector((state)=>state.AppReducer.data);
    // console.log(data,"data");

    const handleData = () => {

        if (category, difficulty, amount) {
            let data = {
                category, difficulty, amount,
                type: "multiple"
            }
            dispatch(getData(data)).then((res)=>{
               
                if(res.type===GET_DATA_SUCESS){
                   navigate("/quiz",{replace:true})
                }
               
            })
        }



    }
    return (
        <Box width="50%" height={"400px"} margin="auto" border={"none"} marginTop="5%">
            <Heading>Set up your quiz</Heading>
            <Box>
                <Input type={"text"} placeholder="enter your name" marginTop={"4%"} height="60px" border={"2px solid black"} onChange={(e) => setName(e.target.value)} />
                <Select placeholder='Select Category'
                    marginTop={"4%"} height="50px" border={"2px solid black"} value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value='9'>General Knowledge</option>
                    <option value='10'>Sports</option>
                    <option value='11'>Geography</option>
                </Select>

                <Select placeholder='Select Difficulty'
                    marginTop={"4%"} height="60px" border={"2px solid black"} value={difficulty}
                    onChange={(e) => setdifficulty(e.target.value)}
                >
                    <option value='easy'>easy</option>
                    <option value='medium'>medium</option>
                    <option value='hard'>Hard</option>
                </Select>

                <Input type={"number"} placeholder="enter No of Question" marginTop={"4%"} height="60px"
                    border={"2px solid black"} value={amount} onChange={(e) => setAmount(e.target.value)} />

                <Button onClick={handleData}
                    backgroundColor={"crimson"} color="black"
                    width={"100%"} height="60px" marginTop={"4%"}
                >Start Quiz</Button>
            </Box>
        </Box>

    );
}