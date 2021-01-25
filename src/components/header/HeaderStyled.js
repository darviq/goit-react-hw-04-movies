import styled from "styled-components";

const Ul = styled.ul`
    padding: 25px;
    display: flex;
    list-style: none;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);

    li:not(:last-child) {
        margin-right: 25px;
    }

    .link {
        text-decoration: none;
        font-weight: 700;
        font-size: 24px;
        color: black;
    }

    .link:hover,
    .link:focus {
        text-decoration: underline;
    }

    .active-link {
        color: red;
    }
`;

export default Ul;
