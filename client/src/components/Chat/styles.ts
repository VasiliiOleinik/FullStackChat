import styled from "styled-components"

export const MyMessage = styled.div`
  width: fit-content;
  padding: 10px;
  background: #4096ff;
  border-radius: 5px;
  display: flex;
  margin-bottom: 10px;
  position: relative;
  margin-left: auto;
`

export const ChatMessage = styled.div`
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  margin-bottom: 10px;

  ${({ friend }) => {
    if (friend) return `background: #91caff; margin-right: auto;`
    if (!friend) return `background: #4096ff; margin-left: auto;`
  }}
`