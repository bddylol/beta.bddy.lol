/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import React from 'react'

let projects = [
	{
		image: "",
		title: "2chat",
		description: "Yet, another replit chat application. But, it has something special. Voice Chat! Currently, Voice Chat is whitelisted to certain users only since we are unsure how to moderate it with bots. It also has all the features of every other chat app out there.",
		tags: ["#javascript", "#chatting", "#voicechat"]
	},
	{
		image: "",
		title: "Replchat",
		description: `Have you ever wanted to chat with others in a custom made chatroom for replit users? probably not. Well, here may I present to you 🥁 drumroll please REPLCHAT! The place that fits all your needs. Chatting. Just chatting. And, you can even annoy your friends by mentioning them with
@YourFriend
! We will add more content later on in the development, but this is what we have so far! What are you doing? Check it out!!!`,
		tags: ["#javascript", "#chatting", "#chatapp"]
	},
]

const Section = ({ children, css2 = "" }: {
	children: React.ReactNode,
	css2: string
}) => {
	return <section css={css`
		display: flex;
	 	flex-direction: column;
	 justify-content: center;
		width: 100%;
	gap: 10px;
	 height: 100%;
	${css2}
 		`}>
		{children}
	</section>
}

const Project = ({ css2 = "", image = "", title, description, tags }: {
	children: React.ReactNode,
	css2: string,
	image: string,
	title: string,
	description: string,
	tags: String[]
}) => {
	return <div css={css`
${css2}
width: 100%;
padding: 10px;
display: flex;
flex-direction: row;
gap: 10px;
 `}>
	<img css={css`width: 91px; height:91px;
 background: #D9D9D9;
border-radius: 16px; ${image === "" ? "display: none;" : "display: flex;"}`} src={image} />
		<div css={css`width: 100%;display:flex;flex-direction:column;gap:5px;`}>
			<h1>{title}</h1>
			<p>{description}</p>
			<div css={css`display:flex;flex-wrap:wrap;gap:5px; margin-top: 3px;`}>
				{tags.map(t => {
					return <div css={css`
height: 28px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;

background: #376A48;
border-radius: 32px;
padding: 0px 10px; 
	 `}>{t}</div>
				})}
			</div>
		</div>
	</div>
}

const Role = ({ children }: { children: React.ReactNode }) => {
	return <div css={css`
background: #4B7F86;
border-radius: 24px;
width: 156px;
height: 30px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 10px;`}>{children}</div>
}

export default function Home() {
	return <>
		<Section>
			<h1 css={css`
		text-shadow: 0px 0px 15px #FFFFFF;
	font-weight: 400;
 font-size: 36px;
	`}>bddylol</h1>
			<Role>Replit Moderator</Role>
			<p css={css`
	font-size: 20px;
 font-weight: 400;
	`}>I'm bddy. I enjoy programming and playing video games. I'm a Full-Stack Developer & Proficient in Typescript, Javascript, HTML, CSS, and many more languages!</p>
		</Section>
		<Section css2={`
		justify-content: flex-start;	
 `}>
			<div css={css`
			display: flex;
	 flex-direction: row;
	gap: 10px;
 @media (max-width: 1000px) {
 flex-direction: column;
 }
	`}>
				<input placeholder="Search Projects" css={css`
	background: #28433E;
box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;	
border: 0;
padding: 10px;
color: white;
text-align: center;
width: 100%;
	`} />
				<button css={css`
		background: #28433E;
box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
border:0;
padding: 10px 25px;
color: white;
cursor: pointer;
transition: all 300ms
&:hover {
	background: #31544e;
}
	`}>Search</button>
			</div>
			{projects.map(p => {
				return <Project title={p.title} description={p.description} tags={p.tags} />
			})}
		</Section>
	</>
}