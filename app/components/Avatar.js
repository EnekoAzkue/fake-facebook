
import styled from "styled-components/native";

const Continer = styled.View`
    width: 40px;
    height: 40px;
    position: relative;
`

const ProfileImage = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`

const Avatar = ({source}) => {
    return ( 
        <Continer>
            <ProfileImage source={source} />
        </Continer>
    )
}

export default Avatar