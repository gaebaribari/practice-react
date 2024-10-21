import styled, { keyframes } from 'styled-components'


const rotaionAnimation = keyframes`
 from{
 transform:rotate(0deg);
 border-radius:0px;
 }to{
 transform:rotate(360deg);
 border-radius:100px;

 }
`

const Emoji = styled.p`
`;

const Box = styled.div`
    background-color:${(props) => props.bgColor};
    width:100px;
    height:100px;
    animation : ${rotaionAnimation} 1s linear infinite;
    display:flex;
    justify-content:center;
    align-items:center;
    ${Emoji} {
        font-size:36px;
        &:hover {
        font-size:50px;
        }
    }

`;
const Circle = styled(Box)`
    border-radius:50px;
    
`


const Btn = styled.a`
color:white;
 background-color:blue;
 border:0;
 border-radius:15px;
`

const Text = styled.span`
    color:white;    
`
export default function Home() {

    return (
        <>
            <Box bgColor='tomato'>
                <Text>홈</Text>
            </Box>
            <Circle bgColor='green'>
            <Emoji>🥰</Emoji>
            </Circle>
            <Btn href='/'>버튼</Btn>

        </>)
}

// 그냥 처음부터 styled.a 하면 안되나 굳이 as a 말고 