import styled from "styled-components"

const PSStyle = styled.div`

        margin: 20px;
        #digits {
            float: left;
        }
        #redeemBtn {
            margin-right: 8px;
            float: right;
            top: -49px;
            right: -15px;
        }
        
        #redeemModal {
            display: none;
            position: fixed;
            z-index: 1;
            width: 40%;
            height: 30%;
            background-color: #99B4A5;
            border: 1px solid #005526;
        }

        .redeem-modal .ant-modal-footer{
            background-color: #99B4A5;
          }

        #confirmationText {
            text-align: center;
            color: black;
        }

        #yesRedeem {
            background-color: #005526;
            color: white;
        }

        #cancelRedeem {
            background-color: #005526;
            color: white;
        }
        
    `
export default PSStyle