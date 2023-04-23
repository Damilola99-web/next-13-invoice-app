export default function Head({ title, description }: { title: string; description?: string }) {
	return (
		<>
			<title>{title}</title>
			<meta
				name='description'
				content={description}
			/>
		</>
	);
}
