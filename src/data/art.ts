export interface ArtPiece {
	id: number;
	title: string;
	description: string;
	image: string;
	date: string;
}

// To add new art: 
// 1. Add the image file to public/art/
// 2. Add a new entry to this array
// 3. The image path should be "/art/filename.jpg" (or .png, .gif, etc.)
export const artPieces: ArtPiece[] = [
	{
		id: 1,
		title: "Ahundia",
		description: "Ahundia is a beautiful yellow unicorn.",
		image: "/art/Ahundia.png",
		date: "2025-08-02"
	},
	{
		id: 2,
		title: "Kellar",
		description: "Kellar is a very starry blue unicorn with a night sky full of stars behind it.",
		image: "/art/Kellar.png",
		date: "2025-08-02"
	},
	{
		id: 3,
		title: "Wellar",
		description: "Wellar is a mystical fantasy unicorn. It is very green and majestic.",
		image: "/art/Wellar.png",
		date: "2025-08-02"
	},
	{
		id: 4,
		title: "Hunzia",
		description: "Hunzia is a pink unicorn with a swirly rainbow rail and purple wings.",
		image: "/art/Hunzia.png",
		date: "2025-08-04"
	},
]; 