// Async function to fetch data
async function fetchData() {
    try {
        // Display loading message while data is being fetched
        document.getElementById('output').innerText = "Loading...";
        
        // Fetch data from API
        const response = await fetch('https://dummyjson.com/posts');
        
        
        if (!response.ok) {
            throw new Error('Error fetching data');
        }
        
        
        const data = await response.json();
        
        // Display the fetched post titles
        document.getElementById('output').innerText = data.posts.map(post => post.title).join(', ');
    } catch (error) {
        // Handle errors such as network issues or other exceptions
        document.getElementById('output').innerText = error.message;
    }
}

// Adding event listener to button
document.getElementById('asyncBtn').addEventListener('click', fetchData);
