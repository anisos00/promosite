import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
		
	<h1 style={{ color: "gold", fontSize:'40px' , textAlign: "center", marginTop:'20px' ,paddingTop:'30px', paddingBottom:'20px'}}>
			GOLDEN MEET
	</h1>
	<hr style={{color:"white", marginTop:'20px' , width:'1250px', margin:'auto'}}></hr>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Presentation</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">The charter</FooterLink>
			<FooterLink href="#">Subscription</FooterLink>


		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">News</FooterLink>
			<FooterLink href="#">Adress</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
		
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
