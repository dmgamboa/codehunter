// import styled from "styled-components";

// const AvatarContainer = styled.div`
//     #avatarPic {
//         position: absolute;
//         z-index: 0;
//     }
//     #editProfileBtn {
//         position: absolute;
//         z-index: 1;
//         right: 10px;
//         width: 30%;
//     }
//     #editProfileBtn {
//         width: 300%;
//     }
// `;
// export default AvatarContainer

import styled from "styled-components";

const AvatarContainer = styled.div`
    position: relative;
    #avatarPic {
        position: absolute;
        z-index: -1;
    }
    #editProfileBtn {
        position: absolute;
        z-index: 1;
        float: right;
    }
`;

export default AvatarContainer;