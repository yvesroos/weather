import styled from 'styled-components';

export const SearchElement = styled.div`
  position: relative;
  height: 3.25rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  margin-bottom: 1.4rem;
  display: flex;
  align-items: center;
  z-index: 1;
  box-sizing: border-box;
  padding: 0 1rem;
`;
export const Input = styled.input`
  box-sizing: border-box;
  flex: 1;
  height: 100%;
  border: none;
  background-color: ${({ theme }) => theme.bgColor};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.mainColor};
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.greyColor};
  }
`;
export const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  box-sizing: border-box;
  background: ${({ theme }) => theme.bgColor};
  width: 100%;
  left: 0;
  top: 3.35rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  border-top: none;
  border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
`;

export const SuggestionItem = styled.a`
  color: ${({ theme }) => theme.mainColor};
  text-decoration: none;
  padding: 0.6rem 1rem;
  display: block;
  text-align: left;
  border-bottom: 1px dotted ${({ theme }) => theme.greyColor};
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;
