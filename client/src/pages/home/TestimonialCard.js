import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { destructuredTheme } from "../../style";
import { motion } from "framer-motion";

/**
 * @author: Blahblahblaah13
 * @Functionalities
 * 1. play and pause video: https://stackoverflow.com/questions/37463832/how-to-play-pause-video-in-react-without-external-library/37465127
 * 2. video not refreshing upon useState change: https://stackoverflow.com/questions/53439081/video-doesnt-load-after-changing-src/53443405
 */

function TestimonialCard({ video, p, author, testimonialNum, setTestimonialNum, totalNumOfTestimonials }) {
	const vidRef = useRef(null);

	const handleDragNext = (event, info) => {
		console.log(info.offset.x, info.offset.y);
		if (info.point.x > 500 || info.point.x < 200) {
			setTestimonialNum((prevNum) => (prevNum < totalNumOfTestimonials - 1 ? prevNum + 1 : 0));
		}
	};

	const handleTiltDrag = (event, info) => {
		// alert(JSON.stringify(info));
	};

	return (
		<Styled
			as={motion.section}
			drag="x"
			dragConstraints={{ left: 5, right: 5 }}
			dragElastic={1}
			onDragEnd={handleDragNext}
			onDrag={handleTiltDrag}
			dragSnapToCenter={true}
			onHoverStart={() => vidRef.current.play()}
			onHoverEnd={() => vidRef.current.pause()}
		>
			<video id={video.toString()} src={video} ref={vidRef} alt="testimonial-video" loop muted />
			<div>
				<p>{p}</p>

				<p className="author">{author}</p>
			</div>
		</Styled>
	);
}

export default TestimonialCard;

// ======================================//
const Styled = styled.div(({ theme }) => {
	const t = destructuredTheme(theme);

	return css`
		background-color: ${t.white.DEFAULT};
		height: 80vh;
		width: 50vh;
		filter: ${t.dropShadow1};
		align-content: center;
		position: relative;

		video {
			height: 70%;
			width: 100%;
			object-fit: cover;
		}

		div {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 30%;
			width: 100%;
			padding: 1em;
		}

		p {
			font-size: 2.5vh;
		}

		.author {
			line-height: 2em;
			font-size: 1.8vh;
			font-style: italic;
			color: ${t.black.light};
		}
	`;
});
