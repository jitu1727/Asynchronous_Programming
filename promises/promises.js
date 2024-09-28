// Function to fetch data and return a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        // Set timeout for delay
        setTimeout(() => {
            fetch('https://dummyjson.com/posts')
                .then(response => response.json())
                .then(data => {
                    
                    const titles = data.posts.map(post => post.title).join(', ');
                    resolve(titles);
                })
                .catch(() => reject('Error fetching data'));
        }, 4000); 

        // Reject the promise if it takes more than 5 seconds
        setTimeout(() => {
            reject('Operation timed out');
        }, 5000);  
    });
}

// Adding event listener to button
document.getElementById('promiseBtn').addEventListener('click', function() {
    
    document.getElementById('output').innerText = "Loading...";

    // Fetch data and handle promise
    fetchData()
        .then(result => {
            // Display the fetched result when promise is resolved
            document.getElementById('output').innerText = result;
        })
        .catch(error => {
            // Display error message when promise is rejected
            document.getElementById('output').innerText = error;
        });
});
