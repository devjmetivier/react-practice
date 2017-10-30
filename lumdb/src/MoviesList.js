/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

class MoviesList extends Component {
    state = {
        movies: [],
    };

    async componentDidMount() {
        try {
            const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=3a91bfc53a3f79979ecc3e0c5384e8b0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
            const movies = await res.json();
            this.setState({
                movies: movies.results,
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <MovieGrid>
                {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} desc={movie.desc} />)}
            </MovieGrid>
        );
    }
}

export default MoviesList;

const MovieGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
    padding: 1rem;
    max-width: 100%;
`;
