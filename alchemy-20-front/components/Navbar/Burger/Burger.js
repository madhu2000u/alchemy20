import React from 'react';
import {StyledBurger} from './Burger.styled';
import {bool, func} from 'prop-types';

export default function Burger({open, setOpen}) {
	return (
		<StyledBurger open={open} onClick={() => setOpen(!open)}>
			<div />
			<div aria-label="Side menu" />
			<div />
		</StyledBurger>
	);
}

Burger.propTypes = {
	open: bool.isRequired,
	setOpen: func.isRequired,
};
