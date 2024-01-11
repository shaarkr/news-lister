# News Lister

An application for exploring and searching news articles.

## Description

This application is a Vue.js coding exercise that consumes a REST service to obtain a collection of JSON objects containing links to News Stories about a certain topic, renders any images from the news, and provides a link to the actual story.

## Features

1. **Search News**: Enter a search term to find news articles. Keyword suggestions are provided.
2. **View Results**: See matching news articles. If no matches are found, a message is displayed.
3. **News Details**: Each news article displays a thumbnail and a headline. Click on these to read the full article.
4. **Pagination**: Navigate through results 10 articles at a time.
5. **Keyword Search**: Click on a keyword to refresh the page with new results based on that keyword.
6. **Flexible Design**: The application is designed to easily add or swap out news feeds and modify the UI without altering the rendering logic.

## Installation

This project uses [pnpm](https://pnpm.io/) as the package manager. You need to have Node.js version 18 or above.

```bash
# Clone the repository
git clone https://github.com/shaarkr/news-lister.git

# Go to the project directory
cd news-lister

# Install dependencies
pnpm install

# Start the development server
pnpm run dev
```

## Scripts

- `pnpm run dev`: Starts the development server.
- `pnpm run build`: Builds the application for production.
- `pnpm run preview`: Serves the built application for preview.
- `pnpm run lint`: Lints the source code.
- `pnpm run format`: Formats the source code.
- `pnpm run test`: Runs the tests.
- `pnpm run coverage`: Runs the tests and generates a coverage report.

## Author

- Name: shaarkr
- Email: sharathkr@pm.me
- Website: [https://sharathkr.netlify.app](https://sharathkr.netlify.app)

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is [MIT](LICENSE) licensed.
