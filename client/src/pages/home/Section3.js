import React, { useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import buddyBoxing from "../../images/home/buddy-boxing.mp4";
import buddySoccer from "../../images/home/buddy-soccer.mp4";
import buddyYoga from "../../images/home/buddy-yoga.mp4";
import TestimonialCard from "./TestimonialCard";
import { destructuredTheme, Button } from "../../style";


function Section3() {
	// ========================CAROUSEL SECTION 3 =======================//
	const testimonials = [
		{
			video: buddyBoxing,
			p: ' " I no longer have to workout alone. I\'ve found the best workout partner on Lifter. " ',
			author: "Tom, Yorkshire England",
		},
		{
			video: buddySoccer,
			p: ' " Ole ole ole oleee! "',
			author: "Lionel, Barcelona",
		},
		{
			video: buddyYoga,
			p: ' " I used to be so lonely, but with Lifter I\'ve found a reliable workout buddy. "',
			author: "Angelique, New Jersey",
		},
	];

	const [testimonialNum, setTestimonialNum] = useState(0);
	const totalNumOfTestimonials = testimonials.length;

	return (
		<Styled>
			<TestimonialCard
				{...testimonials[testimonialNum]}
				as={motion.div}
				drag
				setTestimonialNum={setTestimonialNum}
				testimonialNum={testimonialNum}
				totalNumOfTestimonials={totalNumOfTestimonials}
			/>
		</Styled>
	);
}

export default Section3;

// ===================================================================//
const Styled = styled.section(({ theme }) => {
	const t = destructuredTheme(theme);

	return css`
		display: grid;
		justify-content: center;
		align-items: center;
	`;
});
