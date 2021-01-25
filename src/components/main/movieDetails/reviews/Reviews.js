import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {findMovieReviews} from "../../../../api/api";

const Ul = styled.ul`
    padding: 25px;

    li {
        margin-top: 25px;
    }

    p {
        margin-top: 10px;
    }
`;

const Reviews = () => {
    const [state, setState] = useState({
        reviews: [],
    });

    const history = useHistory();

    useEffect(() => {
        const q = history.location.pathname.split("/").slice(-2, -1);
        findMovieReviews(...q).then(data =>
            setState({
                reviews: [...data],
            })
        );
    }, [history]);

    return (
        <>
            {state.reviews.length > 0 ? (
                <Ul>
                    {state.reviews.map(review => (
                        <li key={review.id}>
                            <h4>Author: {review.author}</h4>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </Ul>
            ) : (
                <p>We dont have any reviews for this movie.</p>
            )}
        </>
    );
};

export default Reviews;
