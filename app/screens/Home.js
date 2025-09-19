import styled from "styled-components/native";

import MainSeparator from "../components/MainSeparator";
import ToolBar from "../components/ToolBar";


const View = styled.View`
    align-items: center;
    height: 500px;
`

const Home = () => {
    return (
        <View>
            <ToolBar />
            <MainSeparator />
        </View>
    )
}

export default Home