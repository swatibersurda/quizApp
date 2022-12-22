import { Box, RadioGroup, Stack, Radio, Button, Text } from "@chakra-ui/react"
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { correctCount, PageData } from "../Redux/action";
export const Quiz = () => {
    const data = useSelector((state) => state.AppReducer.data);
    const corr = useSelector((state) => state.AppReducer.correct);
    const [x, setX] = useState(data[0]);
    const [clickk, setOnclickk] = useState("false")
    const navigate = useNavigate();
    console.log(corr,"correct")

    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [ans, setAns] = useState("");
    const PageData = (pagedata) => {
        var b = data.map((ele, index) => {
            if (index === pagedata) {
                setX(ele);
            }
        })
    }


    useEffect(() => {

        PageData(page)
    }, [page])


    useEffect(() => {

        if (ans === "0") {

            console.log("we are together");
            setOnclickk("true")

            dispatch(correctCount(1));

        }
        else if (ans > 0) {

            alert("wrong ans");
            setOnclickk("true")
        }



    }, [ans])
    useEffect(() => {
        if (page === data.length) {
            navigate("/result", { replace: true })
        }
    }, [page])

    useEffect(() => {
        setOnclickk("false")
    }, [page])



    const handleButton = () => {
        setPage(page - 1);

    }



    return (
        <Box>
            <Box width={"50%"} height="400px" border="1px solid green" margin={"auto"} marginTop="10%" backgroundColor={"crimson"} >
                Question:<Text fontWeight={"800"}>{x.question}</Text>
                <Stack marginleft="20%" marginTop={"2%"} marginLeft={"20%"} >
                    <RadioGroup onChange={setAns} value={ans} >



                        <Stack marginleft={"5%"}>
                            <Stack border={"1px solid black"} height="50px" width="70%" backgroundColor={"white"}>
                                <Radio value='0'
                                    isDisabled={clickk === "true"}>
                                    {x.correct_answer}</Radio></Stack>
                            <Stack border={"1px solid black"} height="50px" width="70%" backgroundColor={"white"}>
                                <Radio value='1' isDisabled={clickk === "true"}>{x.incorrect_answers[0]}
                                </Radio>
                            </Stack>
                            <Stack border={"1px solid black"} height="50px" width="70%" backgroundColor={"white"}>
                                <Radio value='2' isDisabled={clickk === "true"} >{x.incorrect_answers[1]}</Radio></Stack>
                            <Stack border={"1px solid black"} height="50px" width="70%" backgroundColor={"white"}>
                                <Radio value='3' isDisabled={clickk === "true"}>{x.incorrect_answers[2]}</Radio></Stack>




                        </Stack>
                    </RadioGroup>
                </Stack>




            </Box>
            <Button disabled={page === data.length}
                onClick={(e) => setPage(page + 1)}>Next</Button>
            <Button disabled={page === 1}
                onClick={handleButton}>

                {page === data.length ? "submit" : "prev"}
            </Button>

        </Box>
    )
}